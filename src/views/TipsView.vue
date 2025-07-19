<!-- eslint-disable no-undef -->
<script setup>
import { ref } from "vue";
import TipsCard from "@/components/TipsCard.vue";

let tipsCardsDatas = ref(process.env.tipsCards);

// const baseUrl = ref(process.env.baseUrl);
</script>

<template>
    <main>
        <p class="page-description">
            Une simple collection d’astuces et d’outils utiles à la création de jeux faits
            maison.
            <br />Pour le moment Unity3d principalement, bientôt Godot 🙈
        </p>

        <div class="table">
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
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    max-width: 1280px;
    margin: auto;
    margin-top: 2rem;
    width: 100%;
    padding: 0 2rem;

    @media (max-width: 1250px) {
    }

    @media (max-width: 600px) {
        padding: 0%;

        .page-description {
            padding: 2rem;
        }
    }

    .table {
        display: flex;
        flex-wrap: wrap;

        padding: 0;
        width: 100%;
        padding: 0 0rem;

        border-radius: 10px;
        // add a box shadow
        -webkit-box-shadow: 3px 0px 15px 4px rgba(0, 0, 0, 0.08);
        box-shadow: 3px 0px 15px 4px rgba(0, 0, 0, 0.08);
        background-color: white;
        border: solid 1px rgba($color: #000000, $alpha: 0.1);
        overflow: hidden;

        margin-bottom: 3rem;

        @media (max-width: 1250px) {
        }
        @media (max-width: 800px) {
            padding: 0 1rem;
            margin-top: 1rem;
        }

        @media (max-width: 600px) {
            padding: 0;
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
                opacity: 0.5;
            }

            .title {
                width: 20%;

                .description {
                    display: none;
                }

                @media (max-width: 600px) {
                    width: 80%;

                    .description {
                        display: initial;
                    }
                }
            }

            .description {
                width: 45%;
                text-align: left;
                @media (max-width: 820px) {
                    width: 55%;
                }
                @media (max-width: 600px) {
                    display: none;
                }
            }

            .category {
                width: 5%;
                text-align: center;

                @media (max-width: 1000px) {
                    display: none;
                }
            }

            .tags-container {
                width: 20%;
                text-align: center;
                @media (max-width: 820px) {
                    display: none;
                }
            }

            .empty-container {
                width: 10%;
                @media (max-width: 820px) {
                    // width: 20%;
                }
            }
        }
    }
}
</style>
