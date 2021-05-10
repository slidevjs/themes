import { resolve } from 'path'
import { mergeWindicssConfig, defineConfig } from 'vite-plugin-windicss'
import BaseConfig from '@slidev/client/windi.config'

export default mergeWindicssConfig(
  BaseConfig,
  defineConfig({
    extract: {
      include: [
        resolve(__dirname, '**/*.{vue,ts}'),
      ],
    },
    shortcuts: {
      'bg-main': 'bg-white text-[#181818] dark:(bg-[#000] text-[#fff])',
    },
    theme: {
      extend: {
        fontFamily: {
          sans: '"Helvetica Neue"'
        },
      },
    },
  }),
)
