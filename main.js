import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { DiscordSDK } from "@discord/embedded-app-sdk";

const discordSdk = new DiscordSDK("1289632223418384424");
async function setupDiscordSdk() {
    await discordSdk.ready();
}
createApp(App).mount('#app')