<script setup>
import { ref } from "vue";
import IconDisplay from "./icons/IconDisplay.vue";
const props = defineProps(["game", "key"]);

let cardIsActive = ref(false);
const baseUrl = ref(process.env.baseUrl);

function toggleInformations() {
    cardIsActive.value = !cardIsActive.value;
}
</script>

<template>
    <div class="game-item" :class="{ active: cardIsActive }">
        <img v-if="game.Image" :src="baseUrl + '/' + game.Image[0]['path']" alt="" />

        <header>
            <div class="up">
                <h2>{{ game.Name }}</h2>
                <p class="created-date">{{ game["Date de création"] }}</p>
            </div>
            <div class="up">
                <p class="author">{{ game["Auteur - éditeur"] }}</p>
                <IconDisplay @clicked="toggleInformations"></IconDisplay>
            </div>
        </header>

        <div class="content">
            <p class="details row text-rigth">{{ game["Spécifité"] }}</p>

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
            </div>

            <p class="difficulty row" v-if="game.difficulty">
                <span class="left-column title">Difficulté :</span>
                <span class="right-column">{{ game["Difficulté"] }}</span>
            </p>

            <p class="budget row" v-if="game.Budget">
                <span class="left-column title">Budget :</span>
                <span class="right-column" v-if="game.Budget > 0"
                    >{{ game.Budget }}€</span
                >
                <span class="right-column" v-else-if="game.Budget == 0">Gratuit</span>
            </p>

            <div
                class="platformes-container row"
                v-if="game.Platformes && game.Platformes.length"
            >
                <h3 class="left-column title">Platformes :</h3>

                <span class="right-column">{{ game.Platformes }}</span>
            </div>

            <p class="technos row" v-if="game.Technologies">
                <span class="left-column title">Technologies :</span>
                <span class="right-column">{{ game.Technologies }}</span>
            </p>

            <div
                class="styles-container row last"
                v-if="game.Styles && game.Styles.length"
            >
                <h3 class="left-column title">Styles :</h3>

                <span class="right-column">{{ game.Styles }}</span>
            </div>
        </div>
    </div>
</template>
