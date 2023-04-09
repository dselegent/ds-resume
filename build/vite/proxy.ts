import { ProxyOptions } from 'vite'

/**
 * Generate proxy
 */
export default function createProxy(): Record<string, string | ProxyOptions> {
  return {
    '/api': {
      target: '',
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/api/, ''),
    },
  }
}
