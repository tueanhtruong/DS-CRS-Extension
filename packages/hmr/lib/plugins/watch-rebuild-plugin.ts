import type { PluginOption } from 'vite';
import { WebSocket } from 'ws';
import MessageInterpreter from '../interpreter';
import { LOCAL_RELOAD_SOCKET_URL } from '../constant';
import * as fs from 'fs';
import path from 'path';

type PluginConfig = {
  reload?: boolean;
  refresh?: boolean;
};

const injectionsPath = path.resolve(__dirname, '..', '..', '..', 'build', 'injections');

const refreshCode = fs.readFileSync(path.resolve(injectionsPath, 'refresh.js'), 'utf-8');
const reloadCode = fs.readFileSync(path.resolve(injectionsPath, 'reload.js'), 'utf-8');

export function watchRebuildPlugin(config: PluginConfig): PluginOption {
  let ws: WebSocket | null = null;
  const id = Math.random().toString(36);
  const { refresh, reload } = config;

  const hmrCode = (refresh ? refreshCode : '') + (reload ? reloadCode : '');

  return {
    name: 'watch-rebuild',
    writeBundle() {
      if (!ws) {
        ws ??= new WebSocket(LOCAL_RELOAD_SOCKET_URL);
        ws.onerror = () => {
          console.error(`[HMR] Failed to start server at ${LOCAL_RELOAD_SOCKET_URL}`);
          console.error('PLEASE MAKE SURE YOU ARE RUNNING `pnpm dev-server`');
        };
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
          module.code = `let __HMR_ID = "${id}";\n` + hmrCode + '\n' + module.code;
        }
      }
    },
  };
}
