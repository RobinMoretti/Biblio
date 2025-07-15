<!-- eslint-disable no-undef -->
<script setup>
import { ref } from "vue";
import TipsCard from "@/components/TipsCard.vue";

let tipsCardsDatas = ref(process.env.tipsCards);

// const baseUrl = ref(process.env.baseUrl);
</script>

<template>
    <main>
        <div class="header">
            <span class="title">Titre</span>
            <span class="description">Description</span>
            <span class="category">Category</span>
            <span class="tags-container">Tags</span>
        </div>

        <tips-card
            v-for="(card, key) in tipsCardsDatas"
            v-bind:key="'card-' + key"
            :card="card"
            :baseUrl="baseUrl"
        ></tips-card>
    </main>
</template>

<style scoped lang="scss">
main {
    max-width: 1280px;
    margin: auto;
    margin-top: 4rem;
    display: flex;
    // justify-content: space-between;
    // align-items: flex-start;
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

    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;

        span {
            display: inline-block;
        }

        .title {
            width: 20%;
        }

        .description {
            width: 55%;
            text-align: left;
        }
        .category {
            width: 5%;
            text-align: center;
        }
        .tags-container {
            width: 20%;
            text-align: right;
        }
    }
}
</style>
