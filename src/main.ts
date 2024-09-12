import { QiankunProps, qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

let app: any;

const initQianKun = () => {
    renderWithQiankun({
        bootstrap() {
            console.log('bootstrap');
        },
        mount(_props: any) {
            console.log('mount', _props);
            render(_props.container)
        },
        unmount(_props: any) {
            console.log('unmount', _props);
            app.unmount();
        },
        update: function (props: QiankunProps) {
            console.log('update', props);
        }
    });
}

const render = (container: any = null) => {
    app = createApp(App);
    app.use(router);
    const appElement = container ? container.querySelector('#app') : '#app';
    app.mount(appElement)
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()