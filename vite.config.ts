import Vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import qiankun from 'vite-plugin-qiankun';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

    return {
        base: "./",
        plugins: [
            Vue(),
            qiankun("qiankun-vue-system", {
                useDevMode: true
            }),
            AutoImport({
                imports: ["vue", "pinia", "vue-router"],
                resolvers: [ElementPlusResolver({ importStyle: "sass" })],
                eslintrc: {
                    enabled: false,
                    filepath: "./.eslintrc-auto-import.json",
                    globalsPropValue: true,
                },
                vueTemplate: true,
                dts: false,
            }),
            Components({
                resolvers: [ElementPlusResolver({ importStyle: "sass" })],
                dirs: ["src/components", "src/**/components"],
                dts: false,
            }),
        ],
        server: {
            port: 13100,
            origin: "http://localhost:13100"
        },
        resolve: {
            alias: {
                "@": resolve(__dirname, "./src"),
                "#": resolve(__dirname, "./types")
            }
        }
    }
})
