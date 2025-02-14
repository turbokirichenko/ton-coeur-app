import { mount } from 'svelte'
import App from './App.svelte'
import telegramAnalytics from '@telegram-apps/analytics';

export function bootstrap() {
    //console.log(import.meta.env.VITE_ANALYTICS_TOKEN, import.meta.env.VITE_ANALYTICS_IDENTIFIER);
    telegramAnalytics.init({
        token: import.meta.env.VITE_ANALYTICS_TOKEN, // Token received via @DataChief_bot
        appName: import.meta.env.VITE_ANALYTICS_IDENTIFIER, // The analytics identifier you entered in @DataChief_bot
    });
    const app = mount(App, {
        target: document.getElementById('app'),
    })
    return app;
}