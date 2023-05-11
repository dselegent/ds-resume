/// <reference types="vite/client" />

interface ViteEnvType {
	VITE_ENV: string;
	VITE_OUTPUT_DIR: string;
	VITE_PUBLIC_PATH: string;
	VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
	VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
}

interface RouteObject {
  caseSensitive?: boolean
  children?: RouteObject[]
  element?: React.ReactNode
  path?: string
  meta?: {
		keepAlive?: boolean
		requiresAuth?: boolean
		title: string
		key?: string
	},
  isLink?: string
}
