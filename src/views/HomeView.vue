<script setup>
	import { ref, onMounted,  } from 'vue'

	let games = ref(process.env.data);
	const baseUrl = ref(process.env.baseUrl)

</script>

<template>
	<main>
		<div class="game-item" v-for="game in games">
			<img v-if="game.Image" :src="baseUrl + '/' + game.Image[0]['path']" alt="">
			<h2>{{ game.Name }}</h2>
			<p class="author">{{ game["Auteur - éditeur"] }}</p>
			<p class="created-date">{{ game["Date de création"] }}</p>
			<p class="details">{{ game["Spécifité"] }}</p>
			<p class="time">{{ game["Durée"] }}</p>
			<p class="warning">{{ game["Warning"] }}</p>
			<h3>Types: </h3>
			<div class="types" v-for="type in game['Types'].split(',')" v-if="game['Types']">
				<p class="type">{{ type }}</p>
			</div>
			<p class="author">{{ game["Difficulté"] }}</p>
			<p class="author">{{ game["Budget"] }}</p>
			<h3>platformes: </h3>
			<div class="platformes" v-for="platforme in game['Platformes'].split(',')" v-if="game['Platformes']">
				<p class="Platforme">{{ platforme }}</p>
			</div>
			<h3>styles: </h3>
			<div class="styles" v-for="style in game['Styles'].split(',')" v-if="game['Styles']">
				<p class="Style">{{ style }}</p>
			</div>
		</div>
	</main>
</template>

<style scoped>
	main{
		display: grid;
		grid-template-columns: 33.3% 33.3% 33.3%;
		padding: 0 2rem;
		border: solid 1px black;
		width: 100%;
	}

	.game-item{
		border: solid 1px black;
		padding: 1rem;
		margin: 1rem;
	}
	/* .game-item > *{
		max-width: 100%;
	} */
	
	.game-item img{
		width: 100%;
	}

	.types{
		margin-left: 10px;
	}
	
</style>