/**
 * Storage area type for persisting and exchanging data.
 * @see https://developer.chrome.com/docs/extensions/reference/storage/#overview
 */
export enum StorageType {
  /**
   * Persist data locally against browser restarts. Will be deleted by uninstalling the extension.
   * @default
   */
  Local = 'local',
  /**
   * Uploads data to the users account in the cloud and syncs to the users browsers on other devices. Limits apply.
   */
  Sync = 'sync',
  /**
   * Requires an [enterprise policy](https://www.chromium.org/administrators/configuring-policy-for-extensions) with a
   * json schema for company wide config.
   */
  Managed = 'managed',
  /**
   * Only persist data until the browser is closed. Recommended for service workers which can shutdown anytime and
   * therefore need to restore their state. Set {@link SessionAccessLevel} for permitting content scripts access.
   * @implements Chromes [Session Storage](https://developer.chrome.com/docs/extensions/reference/storage/#property-session)
   */
  Session = 'session',
}

/**
 * Global access level requirement for the {@link StorageType.Session} Storage Area.
 * @implements Chromes [Session Access Level](https://developer.chrome.com/docs/extensions/reference/storage/#method-StorageArea-setAccessLevel)
 */
export enum SessionAccessLevel {
  /**
   * Storage can only be accessed by Extension pages (not Content scripts).
   * @default
   */
  ExtensionPagesOnly = 'TRUSTED_CONTEXTS',
  /**
   * Storage can be accessed by both Extension pages and Content scripts.
   */
  ExtensionPagesAndContentScripts = 'TRUSTED_AND_UNTRUSTED_CONTEXTS',
}

type ValueOrUpdate<D> = D | ((prev: D) => Promise<D> | D);

export type BaseStorage<D> = {
  get: () => Promise<D>;
  set: (value: ValueOrUpdate<D>) => Promise<void>;
  getSnapshot: () => D | null;
  subscribe: (listener: () => void) => () => void;
};

type StorageConfig = {
  /**
   * Assign the {@link StorageType} to use.
   * @default Local
   */
  storageType?: StorageType;
  /**
   * Only for {@link StorageType.Session}: Grant Content scripts access to storage area?
   * @default false
   */
  sessionAccessForContentScripts?: boolean;
};

/**
 * If one session storage needs access from content scripts, we need to enable it globally.
 * @default false
 */
let globalSessionAccessLevelFlag: StorageConfig['sessionAccessForContentScripts'] = false;

/**
 * Checks if the storage permission is granted in the manifest.json.
 */
function checkStoragePermission(storageType: StorageType): void {
  if (chrome.storage[storageType] === undefined) {
    throw new Error(`Check your storage permission in manifest.json: ${storageType} is not defined`);
  }
}

export function createStorage<D>(key: string, fallback: D, config?: StorageConfig): BaseStorage<D> {
  let cache: D | null = null;
  let listeners: Array<() => void> = [];
  const storageType = config?.storageType ?? StorageType.Local;

  // Set global session storage access level for StoryType.Session, only when not already done but needed.
  if (
    globalSessionAccessLevelFlag === false &&
    storageType === StorageType.Session &&
    config?.sessionAccessForContentScripts === true
  ) {
    checkStoragePermission(storageType);
    chrome.storage[storageType].setAccessLevel({
      accessLevel: SessionAccessLevel.ExtensionPagesAndContentScripts,
    });
    globalSessionAccessLevelFlag = true;
  }

  // Register life cycle methods
  const _getDataFromStorage = async (): Promise<D> => {
    checkStoragePermission(storageType);
    const value = await chrome.storage[storageType].get([key]);
    return value[key] ?? fallback;
  };

  const _emitChange = () => {
    listeners.forEach(listener => listener());
  };

  const set = async (valueOrUpdate: ValueOrUpdate<D>) => {
    if (typeof valueOrUpdate === 'function') {
      // eslint-disable-next-line no-prototype-builtins
      if (valueOrUpdate.hasOwnProperty('then')) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        cache = await valueOrUpdate(cache);
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        cache = valueOrUpdate(cache);
      }
    } else {
      cache = valueOrUpdate;
    }
    await chrome.storage[storageType].set({ [key]: cache });
    _emitChange();
  };

  const subscribe = (listener: () => void) => {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  const getSnapshot = () => {
    return cache;
  };

  _getDataFromStorage().then(data => {
    cache = data;
    _emitChange();
  });

  return {
    get: _getDataFromStorage,
    set,
    getSnapshot,
    subscribe,
  };
}
