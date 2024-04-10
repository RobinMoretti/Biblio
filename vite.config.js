import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

import { Api } from 'nocodb-sdk'

let api;

export default defineConfig(async ({ command, mode}) => {
	api = new Api({
	  baseURL: 'https://databases.robinmoretti.eu',
	  headers: {
		'xc-token': loadEnv(mode, process.cwd()).VITE_TOKEN
	  }
	})
		
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
		define: { 'process.env': { data: data, baseUrl: "https://databases.robinmoretti.eu"} },
		build: {
		outDir: './www'
		}
	}
})


async function getData() {
	const response = await api.dbViewRow.list(
		"noco",
		"pr14d1a80kphz3g",
		"mygz3a7xx4omeos",
		"vwtie9l5kkrboyat", {
			"offset": 0,
			"limit": 25,
			"where": ""
	})
	return response.list;
}