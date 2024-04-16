<!-- eslint-disable no-undef -->
<script setup>
	import { ref } from 'vue'

	let games = ref(process.env.data);
	const baseUrl = ref(process.env.baseUrl)
	
	console.log(games.value[0]);

	games.value.forEach(game => {
		game.types = game['Types'].split(',');
		game.platformes = game['Platformes'].split(',');
		game.styles = game['Styles'].split(',');
	});

</script>

<template>
	<main>
		<div class="game-item" v-for="(game, key) in games" v-bind:key="'game-' + key">
			<img v-if="game.Image" :src="baseUrl + '/' + game.Image[0]['path']" alt="">
			<h2>{{ game.Name }}</h2>
			<p class="author">{{ game["Auteur - éditeur"] }}</p>
			<p class="created-date">{{ game["Date de création"] }}</p>
			<p class="details">{{ game["Spécifité"] }}</p>
			<p class="time">{{ game["Durée"] }}</p>
			<p class="warning">{{ game["Warning"] }}</p>

			<div class="types-container" v-if="game.types.length">
				<h3>Types: </h3>
				<div class="types" v-for="(type, key) in game.types" v-bind:key="'type-' + key">
					<p class="type">{{ type }}</p>
				</div>
			</div>

			<p class="difficulty">{{ game["Difficulté"] }}</p>
			<p class="budget">{{ game["Budget"] }}</p>

			<div class="platformes-container" v-if="game.platformes">
				<h3>platformes: </h3>
				<div class="platformes" v-for="(platforme, key) in game.platforms" v-bind:key="'platform-' + key">
					<p class="Platforme">{{ platforme }}</p>
				</div>
			</div>

			<div class="styles-container" v-if="game.styles">
				<h3>styles: </h3>
				<div class="styles" v-for="(style, key) in game.styles" v-bind:key="'style-' + key">
					<p class="Style">{{ style }}</p>
				</div>
			</div>	
		</div>
	</main>
</template>

<style scoped lang="scss">
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