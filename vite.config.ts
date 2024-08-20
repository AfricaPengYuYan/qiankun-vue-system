import Vue from '@vitejs/plugin-vue';
import VueMacros from 'unplugin-vue-macros/vite';
import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import qiankun from 'vite-plugin-qiankun';

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [
        VueMacros({
            plugins: {
                vue: Vue(),
            },
        }),

        Inspect(),

        qiankun("qiankun-vue-system", {
            useDevMode: true
        }),
    ],
    server: {
        port: 13100,
        origin: "http://localhost:13100"
    }
})
