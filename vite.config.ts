import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true,
    }),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dirs: [path.resolve(pathSrc, 'composables')],

      resolvers: [
        ElementPlusResolver(),

        IconsResolver({
          prefix: 'Icon',
        }),
      ],
      vueTemplate: true,
      dts: path.resolve(pathSrc, 'typings', 'auto-imports.d.ts'),
    }),

    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ['ep'],
        }),
        ElementPlusResolver(),
      ],

      dts: path.resolve(pathSrc, 'typings', 'components.d.ts'),
    }),

    Icons({
      autoInstall: true,
    }),
  ]
})