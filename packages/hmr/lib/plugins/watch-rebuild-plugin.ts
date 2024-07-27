import type { PluginOption } from 'vite';
import { type WebSocket } from 'ws';
import MessageInterpreter from '../interpreter';
import { readFileSync } from 'fs';
import path from 'path';
import { initializeWSS } from '../initializeWSS';

type PluginConfig = {
  onStart?: () => void;
  reload?: boolean;
  refresh?: boolean;
};

const injectionsPath = path.resolve(__dirname, '..', '..', '..', 'build', 'injections');

const refreshCode = readFileSync(path.resolve(injectionsPath, 'refresh.js'), 'utf-8');
const reloadCode = readFileSync(path.resolve(injectionsPath, 'reload.js'), 'utf-8');

export function watchRebuildPlugin(config: PluginConfig): PluginOption {
  let ws: WebSocket | null = null;
  const id = Math.random().toString(36);
  const { refresh, reload } = config;

  const hmrCode = (refresh ? refreshCode : '') + (reload ? reloadCode : '');

  return {
    name: 'watch-rebuild',
    writeBundle() {
      config.onStart?.();
      if (!ws) {
        ws = initializeWSS();
        return;
      }
      /**
       * When the build is complete, send a message to the reload server.
       * The reload server will send a message to the client to reload or refresh the extension.
       */
      if (!ws) {
        throw new Error('WebSocket is not initialized');
      }
      ws.send(MessageInterpreter.send({ type: 'build_complete', id }));
    },
    generateBundle(_options, bundle) {
      for (const module of Object.values(bundle)) {
        if (module.type === 'chunk') {
          module.code = `(function() {let __HMR_ID = "${id}";\n` + hmrCode + '\n' + '})();' + '\n' + module.code;
        }
      }
    },
  };
}
