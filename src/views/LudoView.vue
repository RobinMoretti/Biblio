<!-- eslint-disable no-undef -->
<script setup>
import { ref, onMounted, nextTick, watch } from "vue";
import { useRoute } from "vue-router";
import GameItem from "@/components/ludoView/GameItem.vue";

const route = useRoute();
let games = ref(process.env.data);
const baseUrl = ref(process.env.baseUrl);

// Fonction pour scroller vers un jeu spécifique
const scrollToGame = async (gameId) => {
    await nextTick();
    const element = document.getElementById(`game-${gameId}`);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        // Optionnel : ajouter une classe pour highlighting
        element.classList.add("highlighted");
        setTimeout(() => {
            element.classList.remove("highlighted");
        }, 3000);
    }
};

// Watcher pour surveiller les changements de route
watch(
    () => route.params.gameId,
    (newGameId) => {
        if (newGameId) {
            setTimeout(() => {
                scrollToGame(newGameId);
            }, 100);
        }
    }
);

onMounted(() => {
    // Si on a un paramètre gameId dans l'URL
    if (route.params.gameId) {
        scrollToGame(route.params.gameId);
    }
});

const dateOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
};

games.value.forEach((game) => {
    if (game["created"]) {
        game["created"] = new Date(game["created"]).toLocaleDateString(
            undefined,
            dateOptions
        );
    }
});
</script>

<template>
    <main>
        <p class="page-description">Une simple collection de jeux à conseiller.</p>
        <div class="games-container">
            <game-item
                v-for="(game, key) in games"
                v-bind:key="'game-' + key"
                :game="game"
                :baseUrl="baseUrl"
            ></game-item>
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    max-width: 1280px;
    margin: auto;
    margin-top: 2rem;
    /* grid-template-columns: repeat(3, minmax(0, 1fr)); */
    padding: 0;
    width: 100%;
    padding: 0 3rem;

    .games-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    @media (max-width: 1250px) {
    }

    @media (max-width: 800px) {
        padding: 0 1rem;
        margin-top: 1rem;
    }

    padding-bottom: 3rem;
}

.game-item.highlighted {
    animation: highlight 2s ease-in-out;
}

@keyframes highlight {
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.7);
    }
    50% {
        transform: scale(1.02);
        box-shadow: 0 0 0 10px rgba(255, 193, 7, 0.3);
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(255, 193, 7, 0);
    }
}
</style>
