import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath } from 'node:url'
import { wrapperEnv } from './build/utils'
import createProxy from './build/vite/proxy'
import createBuild from './build/vite/build'
import createVitePlugins from './build/vite/plugins'
import autoprefixer from 'autoprefixer'

export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build' // 是否是构建 serve
  const env = loadEnv(mode, process.cwd()) // 加载env环境
  const viteEnv = wrapperEnv(env)

  return {
    plugins: createVitePlugins(),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      postcss: {
        // 关键代码
        plugins: [
          autoprefixer({
            // 自动添加前缀
            overrideBrowserslist: [
              'Android 4.1',
              'iOS 7.1',
              'Chrome > 31',
              'ff > 31',
              'ie >= 8',
              //'last 2 versions', // 所有主流浏览器最近2个版本
            ],
            grid: true,
          }),
        ],
      },
    },
    server: {
      port: 8888, //启动端口
      host: '0.0.0.0',
      hmr: {
        host: 'localhost',
        port: 8080,
      },
      // 设置代理
      proxy: createProxy(),
    },
    build: createBuild(viteEnv),
  }
})
