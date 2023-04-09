/// <reference types="vite/client" />

interface ViteEnv {
	VITE_ENV: string;
	VITE_OUTPUT_DIR: string;
	VITE_PUBLIC_PATH: string;
	VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
	VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
}
