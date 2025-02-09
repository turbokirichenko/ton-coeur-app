import { mount } from 'svelte'
import App from './App.svelte'

export function bootstrap() {
    const app = mount(App, {
        target: document.getElementById('app'),
    })
    return app;
}