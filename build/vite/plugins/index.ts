import type { Plugin, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import configAutoImportPlugin from './autoImport'
import configImageminPlugin from './imagemin'

export default function createVitePlugins() {
  const vitePlugins: (Plugin | Plugin[] | PluginOption | Promise<Plugin | Plugin[]>)[] = [react(), Unocss()]
  vitePlugins.push(configAutoImportPlugin())
  vitePlugins.push(configImageminPlugin())
  return vitePlugins
}
