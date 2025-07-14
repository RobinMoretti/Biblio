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
        <!-- <div class="game-item" v-for="(game, key) in games" v-bind:key="'game-' + key">
            <img
                v-if="game.image"
                :src="baseUrl + '/assets/' + game.image + '?width=1500&quality=98'"
            />
            <header>
                <h2>{{ game.name }}</h2>
                <p class="created-date">{{ game["created"] }}</p>
                <p class="author">{{ game["author"] }}</p>
            </header>

            <div class="content">
                <button class="detail-button" v-on:click="">display</button>
                <p class="details row" v-if="game.specificity">
                    {{ game["specificity"] }}
                </p>
                <p class="time row" v-if="game.duration">
                    <span class="left-column title">Durée :</span>
                    <span class="right-column"
                        >{{ game["duration"] }} heure{{ game["duration"] > 1 ? "s" : "" }}
                    </span>
                </p>

                <p class="warning row" v-if="game.warning">
                    <span class="left-column title">⚠️</span>
                    <span class="right-column">{{ game.warning }}</span>
                </p>

                <div class="tags-container row" v-if="game.type && game.type.length">
                    <span class="left-column title">Types :</span>

                    <span class="text-right">
                        <span
                            class="right-column"
                            v-for="(type, key) in game.type"
                            v-bind:key="'type-' + key"
                        >
                            {{ type }}{{ key < game.type.length - 1 ? ", " : "" }}
                        </span>
                    </span>
                </div>

                <p class="difficulty row" v-if="game.difficulty">
                    <span class="left-column title">Difficulté :</span>
                    <span class="right-column">
                        {{ game.difficulty }}
                    </span>
                </p>
                <p class="budget row" v-if="game.price">
                    <span class="left-column title">Budget :</span>
                    <span class="right-column">{{ game.price }}€</span>
                </p>

                <div
                    class="platformes-container row"
                    v-if="game.platform && game.platform.length"
                >
                    <span class="left-column title">Platformes :</span>

                    <span class="text-right">
                        <span
                            class="right-column"
                            v-for="(platform, key) in game.platform"
                            v-bind:key="'platform-' + key"
                        >
                            {{ platform }}{{ key < game.platform.length - 1 ? ", " : "" }}
                        </span>
                    </span>
                </div>

                <div
                    class="styles-container row last"
                    v-if="game.style && game.style.length"
                >
                    <span class="left-column title">Styles :</span>

                    <span
                        class="right-column"
                        v-for="(style, key) in game.style"
                        v-bind:key="'style-' + key"
                    >
                        {{ style }}
                        {{ key < game.style.length - 1 ? "," : "" }}
                    </span>
                </div>
            </div>
        </div> -->
    </main>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped lang="scss"></style>
