import AutoImport from 'unplugin-auto-import/vite'

export default function configAutoImportPlugin() {
  return AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.md$/, // .md
    ],
    imports: [
      'react',
      'react-router-dom',
      'ahooks',
      {
        '@emotion/styled': [
          // default imports
          ['default', 'styled'], // import { default as styled } from '@emotion/styled',
        ],
      },
    ],
    dirs: [
      'src/store/**/*',
      'src/router/**/*',
      'src/components/**/*',
      'src/pages/**/*',
      'src/options',
      'src/material/**/*',
      'src/hooks',
      'src/utils',
    ],
    dts: './types/auto-imports.d.ts',
    // 生成全局声明文件，给eslint用
    eslintrc: {
      enabled: true, // Default `false`
      filepath: './types/.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
  })
}
