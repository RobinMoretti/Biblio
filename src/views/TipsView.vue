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
            <span class="empty-container"></span>
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
    margin-bottom: 4rem;
    display: flex;
    // justify-content: space-between;
    // align-items: flex-start;
    flex-wrap: wrap;
    /* grid-template-columns: repeat(3, minmax(0, 1fr)); */
    padding: 0;
    width: 90%;
    gap: 3.5%;
    padding: 0 0rem;

    border-radius: 10px;
    // add a box shadow
    -webkit-box-shadow: 3px 0px 15px 4px rgba(0, 0, 0, 0.08);
    box-shadow: 3px 0px 15px 4px rgba(0, 0, 0, 0.08);
    background-color: white;
    border: solid 1px rgba($color: #000000, $alpha: 0.1);
    overflow: hidden;

    @media (max-width: 1250px) {
    }
    @media (max-width: 800px) {
        padding: 0 1rem;
        margin-top: 1rem;
    }

    padding-bottom: 3rem;

    .header {
        padding: 0.5rem 2rem;
        width: 100%;
        display: flex;
        justify-content: space-between;

        background-color: white;

        border-bottom: none;

        span {
            display: inline-block;
        }

        .title {
            width: 20%;
        }

        .description {
            width: 45%;
            text-align: left;
        }

        .category {
            width: 5%;
            text-align: center;
        }

        .tags-container {
            width: 20%;
            text-align: center;
        }

        .empty-container {
            width: 10%;
        }
    }
}
</style>
