import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import qiankun from 'vite-plugin-qiankun';

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [
        vue(),
        qiankun("qiankun-vue-system", {
            useDevMode: true
        })
    ],
    server: {
        port: 13100,
        origin: "http://localhost:13100"
    }
})
