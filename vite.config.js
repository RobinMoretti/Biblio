import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import { createDirectus, rest, authentication, readItems} from '@directus/sdk';

let client;

export default defineConfig(async () => {
	await initClient();

	const data = await getGames();
	const tipsCards = await getTipsCards();
  
	return {
		plugins: [
			vue(),
			VueDevTools(),
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		},
		define: { 'process.env': { data: data, tipsCards: tipsCards, baseUrl: "https://directus.robinmoretti.eu"} },
		build: {
			outDir: './www'
		}
	}
})

async function initClient(){
	client = createDirectus('https://directus.robinmoretti.eu').with(rest()).with(authentication());
	await client.setToken('TRi-qBTq1ZAbg3qv-ETSeWn_nMBf2l1C');
}

async function getGames() {
    try {
        return await client.request(readItems('ludoth_que', {
    		sort: ['-id'],
		}));
    }
    catch (e) {
        console.log(e)
    }
}
async function getTipsCards() {
    try {
        return await client.request(readItems('resources_game_dev', {
			fields: ['*.*.*'],
		}));
    }
    catch (e) {
        console.log(e)
    }
}