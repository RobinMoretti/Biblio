<script setup>
import { ref } from "vue";

let props = defineProps(["game", "baseUrl"]);

let date = ref(props.game["created"]);

// Correction : utiliser ref() pour rendre la variable réactive
const visible = ref(true);

if (date.value) {
    const dateOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };

    date.value = new Date(date.value).toLocaleDateString(undefined, dateOptions);
}

let duration = ref(props.game["duration"]);
if (duration.value < 1) {
    // convert duration into minutes
    duration.value = Math.round(duration.value * 60);
    duration.value += " minute" + (duration.value > 0.01 ? "s" : "");
} else if (duration.value > 1) {
    duration.value += " heure" + (duration.value > 1 ? "s" : "");
}
</script>

<template>
    <div class="game-item">
        <img
            v-if="game.image"
            v-lazy="baseUrl + '/assets/' + game.image + '?width=1500&quality=98'"
        />

        <header>
            <h2 :class="{ 'small-text': game.name.length > 20 }">{{ game.name }}</h2>
            <p class="created-date">{{ game.created }}</p>
            <p class="author">{{ game["author"] }}</p>
            <button class="detail-button" v-on:click="visible = !visible">
                {{ visible ? "plus d'infos" : "cacher" }}
            </button>
        </header>

        <div class="content" :class="{ hide: visible }">
            <p class="details row" v-if="game.specificity">
                {{ game["specificity"] }}
            </p>
            <p class="time row" v-if="duration">
                <span class="left-column title">Durée :</span>
                <span class="right-column">
                    {{ duration }}
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

            <div class="styles-container row last" v-if="game.style && game.style.length">
                <span class="left-column title">Styles :</span>

                <span class="text-right">
                    <span
                        class="right-column"
                        v-for="(style, key) in game.style"
                        v-bind:key="'style-' + key"
                    >
                        {{ style }}{{ key < game.style.length - 1 ? ", " : "" }}
                    </span>
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.game-item {
    width: 30%;
    border-radius: 10px;
    background-color: #fefefe;
    overflow: hidden;

    border: solid 1px rgba($color: #000000, $alpha: 0.1);
    margin-bottom: 3rem;

    // add a box shadow
    -webkit-box-shadow: 3px 0px 15px 4px rgba(0, 0, 0, 0.08);
    box-shadow: 3px 0px 15px 4px rgba(0, 0, 0, 0.08);

    img {
        width: 100%;
    }

    .types {
        margin-left: 10px;
    }

    header {
        position: relative;
        h2 {
            max-width: 70%;
        }

        .detail-button {
            cursor: pointer;
            border: #000000;
            border-radius: 0px;
            border-end-start-radius: 5px;
            border-end-end-radius: 5px;
            padding: 5px 10px;
            position: absolute;
            right: 70px;
            top: -7px;
            transform: translate(50%);
        }
    }

    .content {
        padding: 0.5rem 1.2rem 1rem 1.2rem;
        max-height: 200rem;
        transition: all 0.2s;

        .row {
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;
            border-bottom: solid 1px rgba($color: #000000, $alpha: 0.1);
            padding-bottom: 0.5rem;
            margin-bottom: 0.5rem;

            .left-column {
                min-width: 70px;
            }
            .right-column {
                text-align: right;
            }
        }

        .last {
            border-bottom: unset !important;
        }

        &.hide {
            max-height: 0;
            padding: 0;
        }
    }

    header {
        padding: 0.5rem 1.2rem 1rem 1.2rem;
    }

    .content {
        margin-top: 0;
    }

    h2 {
        text-transform: uppercase;
        font-weight: bolder !important;
    }

    .created-date {
        float: right;
    }

    img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        border-bottom: solid 1px rgba($color: #000000, $alpha: 0.1);
    }

    .tags-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;

        .title {
            margin-right: 1rem;
        }
    }

    .tag {
        margin: 0.3rem 0;
        padding: 0.05rem 0.7rem;
        margin-right: 0.5rem;
        border-radius: 35px;
        background-color: rgb(155, 155, 155);
        color: white;
        font-weight: bold;
    }

    .small-text {
        font-size: 1rem;
    }
}

@media screen and (max-width: 1100px) {
    .game-item {
        width: 48%;
    }
}
@media screen and (max-width: 710px) {
    .game-item {
        width: 100%;
        margin-bottom: 1rem;
    }
}
</style>
