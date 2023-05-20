import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      // scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [transformerCompileClass(), transformerVariantGroup(), transformerDirectives()],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'f-c-c': 'flex justify-center items-center',
    'f-b-c': 'flex justify-between items-center',
    'text-ellipsis': 'truncate',
    'flex-col': 'flex flex-col',
    'transition-base': 'transition-all duration-300 ease-in-out',
    'icon-btn':
      'text-16 inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary !outline-none',
    'index-see-more-btn':
      'mr-5 h-10 w-30 cursor-pointer rounded-12 from-green-400 to-cyan-400 bg-gradient-to-r text-center text-sm leading-10 transition-opacity letter-2 hover:opacity-80',
  },
  rules: [
    [/^letter-(.+)$/, ([, size]) => ({ 'letter-spacing': `${size}px` })],
    ['card-shadow', { 'box-shadow': '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017' }],
  ],
  theme: {
    colors: { primary: '#00c091', dark_bg: 'var(--dark-bg)', font_color: '#74a274', mask: 'rgba(0, 0, 0, 0.5)' },
  },
})
