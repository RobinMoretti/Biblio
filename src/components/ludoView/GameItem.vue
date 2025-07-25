<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const props = defineProps(["game", "baseUrl"]);
const router = useRouter();
const route = useRoute();

const visible = ref(false);

onMounted(() => {
    if (
        route.params.gameId &&
        route.params.gameId == props.game.name.toLowerCase().replace(/\s+/g, "-")
    ) {
        visible.value = true;
    }
});

const toggleContent = () => {
    const gameId = props.game.name.toLowerCase().replace(/\s+/g, "-");

    visible.value = !visible.value;

    setTimeout(() => {
        if (visible.value) {
            router.push({ name: "Ludothèque", params: { gameId: gameId } });
        } else {
            router.push({ name: "Ludothèque" });
        }
    }, 300);
};
</script>

<template>
    <div class="game-item" :id="`game-${game.name.toLowerCase().replace(/\s+/g, '-')}`">
        <img
            v-if="game.image"
            :src="baseUrl + '/assets/' + game.image + '?width=1500&quality=98'"
        />

        <header>
            <h2 :class="{ 'small-text': game.name.length > 20 }">
                {{ game.name }}
                <span v-if="game.link">
                    <a target="_blank" :href="game.link">🔗</a>
                </span>
            </h2>
            <p class="created-date">{{ game.created }}</p>

            <p class="author">{{ game["author"] }}</p>
            <button class="detail-button" @click="toggleContent">
                {{ $t("message.visibility." + (!visible ? "more" : "less")) }}
            </button>
        </header>

        <div class="content" :class="{ hide: !visible }">
            <div class="content-inner">
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
                            {{ $t("message.types." + type)
                            }}{{ key < game.type.length - 1 ? ", " : "" }}
                        </span>
                    </span>
                </div>

                <p class="difficulty row" v-if="game.difficulty">
                    <span class="left-column title">Difficulté :</span>
                    <span class="right-column">
                        {{ $t("message.difficulties." + game.difficulty) }}
                    </span>
                </p>
                <p class="budget row" v-if="game.price >= 0">
                    <span class="left-column title">Budget :</span>
                    <span class="right-column">{{
                        game.price == 0 ? $t("message.price-free") : game.price + "€"
                    }}</span>
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
                            {{ $t("message.platforms." + platform) }}
                            {{ key < game.platform.length - 1 ? ", " : "" }}
                        </span>
                    </span>
                </div>

                <div
                    class="styles-container row last"
                    v-if="game.style && game.style.length"
                >
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
            padding: 0;
            max-height: 0;
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
