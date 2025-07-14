import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import { createDirectus, rest, authentication, readItems} from '@directus/sdk';

export default defineConfig(async () => {
	const data = await getData();
  
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
		define: { 'process.env': { data: data, baseUrl: "https://directus.robinmoretti.eu"} },
		build: {
			outDir: './www'
		}
	}
})

async function getData() {
    try {
        const client = createDirectus('https://directus.robinmoretti.eu').with(rest()).with(authentication());
		await client.setToken('TRi-qBTq1ZAbg3qv-ETSeWn_nMBf2l1C');
        return await client.request(readItems('ludoth_que'));
    }
    catch (e) {
        console.log(e)
    }
}