<!-- eslint-disable no-undef -->
<script setup>
import { ref } from "vue";

let games = ref(process.env.data);
const baseUrl = ref(process.env.baseUrl);

games.value.forEach((game) => {
    if (game["Date de création"]) {
        console.log(game["Date de création"]);
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

    if (game["Types"]) {
        game["Types"] = game["Types"].replaceAll(",", ", ");
        // game["Types"] ? (game.types = game["Types"].split(",")) : null;
        //game["Types"] ? (game.types = game["Types"].replace(",", " ,")) : null;
    }

    game["Difficulté"] ? (game.difficulty = game["Difficulté"].split(",")) : null;
    game["Platformes"]
        ? (game["Platformes"] = game["Platformes"].replaceAll(",", ", "))
        : null;
    game["Styles"] ? (game["Styles"] = game["Styles"].replaceAll(",", ", ")) : null;
});
</script>

<template>
    <main>
        <div class="game-item" v-for="(game, key) in games" v-bind:key="'game-' + key">
            <img v-if="game.Image" :src="baseUrl + '/' + game.Image[0]['path']" alt="" />
            <header>
                <h2>{{ game.Name }}</h2>
                <p class="created-date">{{ game["Date de création"] }}</p>
                <p class="author">{{ game["Auteur - éditeur"] }}</p>
            </header>
            <div class="content">
                <p class="details row">{{ game["Spécifité"] }}</p>
                <p class="time row">
                    <span class="left-column title">Durée :</span>
                    <span class="right-column">{{ game["Durée"] }}</span>
                </p>

                <p class="warning row" v-if="game.Warning">
                    <span class="left-column title">⚠️</span>
                    <span class="right-column">{{ game.Warning }}</span>
                </p>

                <div
                    class="types-container tags-container row"
                    v-if="game.Types && game.Types.length"
                >
                    <h3 class="left-column title">Types :</h3>

                    <span class="right-column">{{ game["Types"] }}</span>
                    <!-- <span
                        class="type tag"
                        v-for="(type, key) in game.types"
                        v-bind:key="'type-' + key"
                    >
                        {{ type }}
                    </span> -->
                </div>

                <p class="difficulty row" v-if="game.difficulty">
                    <span class="left-column title">Difficulté :</span>
                    <span class="right-column">{{ game["Difficulté"] }}</span>
                </p>
                <p class="budget row" v-if="game.Budget">
                    <span class="left-column title">Budget :</span>
                    <span class="right-column">{{ game.Budget }}€</span>
                </p>

                <div
                    class="platformes-container row"
                    v-if="game.Platformes && game.Platformes.length"
                >
                    <h3 class="left-column title">Platformes :</h3>

                    <span class="right-column">{{ game.Platformes }}</span>
                </div>

                <div
                    class="styles-container row last"
                    v-if="game.Styles && game.Styles.length"
                >
                    <h3 class="left-column title">Styles :</h3>

                    <span class="right-column">{{ game.Styles }}</span>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss"></style>
