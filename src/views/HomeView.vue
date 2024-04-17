<!-- eslint-disable no-undef -->
<script setup>
import { ref } from "vue";

let games = ref(process.env.data);
const baseUrl = ref(process.env.baseUrl);

games.value.forEach((game) => {
    if (game["Date de création"]) {
        const dateOptions = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        };

        game["Date de création"] = new Date(game["Date de création"]).toLocaleDateString(
            undefined,
            dateOptions
        );
    }

    game["Types"] ? (game.types = game["Types"].split(",")) : null;
    game["Platformes"] ? (game.platformes = game["Platformes"].split(",")) : null;
    game["Styles"] ? (game.styles = game["Styles"].split(",")) : null;
});
</script>

<template>
    <main>
        <div class="game-item" v-for="(game, key) in games" v-bind:key="'game-' + key">
            <img v-if="game.Image" :src="baseUrl + '/' + game.Image[0]['path']" alt="" />
            <div class="content">
                <h2>{{ game.Name }}</h2>
                <p class="created-date">{{ game["Date de création"] }}</p>
                <p class="author">{{ game["Auteur - éditeur"] }}</p>
                <p class="details">{{ game["Spécifité"] }}</p>
                <p class="time">{{ game["Durée"] }}</p>
                <p class="warning">{{ game["Warning"] }}</p>

                <div
                    class="types-container tags-container"
                    v-if="game.types && game.types.length"
                >
                    <h3 class="title">Types :</h3>
                    <span
                        class="type tag"
                        v-for="(type, key) in game.types"
                        v-bind:key="'type-' + key"
                    >
                        {{ type }}
                    </span>
                </div>

                <p class="difficulty">{{ game["Difficulté"] }}</p>
                <p class="budget">{{ game["Budget"] }}</p>

                <div
                    class="platformes-container"
                    v-if="game.platformes && game.platformes"
                >
                    <h3>platformes:</h3>
                    <div
                        class="platformes"
                        v-for="(platforme, key) in game.platforms"
                        v-bind:key="'platform-' + key"
                    >
                        <p class="Platforme">{{ platforme }}</p>
                    </div>
                </div>

                <div class="styles-container" v-if="game.styles && game.styles">
                    <h3>styles:</h3>
                    <div
                        class="styles"
                        v-for="(style, key) in game.styles"
                        v-bind:key="'style-' + key"
                    >
                        <p class="Style">{{ style }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss"></style>
