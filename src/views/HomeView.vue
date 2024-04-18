<!-- eslint-disable no-undef -->
<script setup>
import { ref } from "vue";

import iconDisplay from "./../components/icons/IconDisplay.vue";
import GameCard from "@/components/GameCard.vue";

let games = ref(process.env.data);

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
        <GameCard
            v-for="(game, key) in games"
            v-bind:key="'game-' + key"
            :game="game"
            :key="key"
        >
        </GameCard>
    </main>
</template>
