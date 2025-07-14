<!-- eslint-disable no-undef -->
<script setup>
import { ref } from "vue";
import GameItem from "@/components/ludoView/GameItem.vue";
import Multiselect from "vue-multiselect";
let games = ref(process.env.data);

// let types = new Set();

// games.value.forEach((game) => {
//     if (game.type && game.type.length) {
//         game.type.forEach((type) => types.add(type));
//     }
// });

// types = Array.from(types);

// let selectedType = ref([]);

const baseUrl = ref(process.env.baseUrl);

games.value.forEach((game) => {
    if (game["created"]) {
        const dateOptions = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        };

        game["created"] = new Date(game["created"]).toLocaleDateString(
            undefined,
            dateOptions
        );
    }
});
</script>

<template>
    <main>
        <!-- <multiselect
            v-model="selectedType"
            :options="types"
            :multiple="true"
            :close-on-select="false"
            :clear-on-select="false"
        ></multiselect> -->

        <game-item
            v-for="(game, key) in games"
            v-bind:key="'game-' + key"
            :game="game"
            :baseUrl="baseUrl"
        ></game-item>
    </main>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped lang="scss">
main {
    max-width: 1280px;
    margin: auto;
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    /* grid-template-columns: repeat(3, minmax(0, 1fr)); */
    padding: 0;
    width: 100%;
    gap: 3.5%;
    padding: 0 3rem;

    @media (max-width: 1250px) {
        gap: 4%;
    }
    @media (max-width: 800px) {
        gap: 4%;
        padding: 0 1rem;
        margin-top: 1rem;
    }

    padding-bottom: 3rem;
}
</style>
