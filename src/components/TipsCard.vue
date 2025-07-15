<script setup>
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

const marked = new Marked(
    markedHighlight({
        emptyLangClass: "hljs",
        langPrefix: "hljs language-",
        highlight(code, lang, info) {
            const language = hljs.getLanguage(lang) ? lang : "plaintext";
            return hljs.highlight(code, { language }).value;
        },
    })
);

import { ref, computed } from "vue";

let props = defineProps(["card", "baseUrl"]);

// a computed ref
const description = computed(() => {
    if (!props.card) return null;
    if (!props.card.Description) return null;

    return marked.parse(props.card.Description.replace(/<\/?p>/g, ""));

    // return props.card.Description.replace(/<\/?p>/g, "");
});

let visible = ref(true);
</script>

<template>
    <div class="tip-item" v-if="card">
        <header>
            <span v-html="card.Title" class="title"></span>
            <span v-html="card['Short_description']" class="description"></span>
            <span class="category">
                <div
                    class="tag"
                    v-html="card['Category']"
                    :class="card['Category']"
                ></div>
            </span>
            <span class="tags-container">
                <span
                    class="tag"
                    v-for="(tag, key) in card['resources_tags']"
                    v-bind:key="'tag-' + key"
                >
                    {{ tag.resources_game_dev_tags_id.name }}
                </span>
            </span>
            <div class="displayer-button">
                <button class="detail-button" v-on:click="visible = !visible">
                    {{ visible ? "plus d'infos" : "cacher" }}
                </button>
            </div>
        </header>
        <div class="content" :class="{ hide: visible }">
            <img
                v-lazy="
                    'https://directus.robinmoretti.eu/assets/' + card['header_image'].id
                "
                alt=""
                v-if="card['header_image']"
            />
            <div class="text-content">
                <p>Source : <a href="">Link</a></p>
                <p v-if="description" v-html="description" class="markdown-body"></p>
            </div>

            <!-- <vue-markdown v-if="description" :source="description" class="text-content" /> -->
        </div>
    </div>
</template>
<style src="github-markdown-css/github-markdown.css"></style>
<style src="highlight.js/styles/a11y-light.min.css"></style>

<style src=""></style>
<style scoped lang="scss">
.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
}

@media (max-width: 767px) {
    .markdown-body {
        padding: 15px;
    }
}

.tip-item {
    width: 100%;
    padding: 1rem 0;
    // border-top: 1px solid black;
    background-color: white;

    border-top: solid 1px rgba($color: #000000, $alpha: 0.1);
    // border-left: none;
    // border-right: none;
    padding-left: 2rem;
    padding-right: 2rem;

    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        span {
            display: inline-block;
        }

        .title {
            width: 20%;
            font-size: 1.1rem;
            font-weight: 500;
            padding-right: 20px;
        }

        .description {
            width: 45%;
            text-align: left;
            padding-right: 20px;
        }

        .category,
        .tags-container {
            .tag {
                border-radius: 40px;
                background-color: rgba(128, 128, 128, 0.842);
                color: white;
                font-weight: 500;
                padding: 0.2rem 0.6rem;
                margin-left: 1rem;
                text-transform: uppercase;
            }
        }
        .category {
            width: 5%;
            text-align: center;
            .tag {
                margin-left: 0rem;
                display: inline;
            }

            .tools {
                background-color: rgb(22, 194, 194);
            }
            .tips {
                background-color: rgb(230, 205, 15);
            }
        }

        .tags-container {
            width: 20%;
            text-align: center;
        }

        .displayer-button {
            width: 10%;
            position: relative;

            .detail-button {
                cursor: pointer;
                border: #000000;
                border-radius: 0px;
                border-end-start-radius: 5px;
                border-end-end-radius: 5px;
                padding: 5px 10px;
                position: absolute;
                right: 30px;
                left: 0px;
                top: -37px;
                transform: translate(50%);
            }
        }
    }

    .content {
        display: flex;
        margin: 1rem 0;

        overflow: hidden;
        max-height: 100rem;
        align-items: start;

        transition: all 0.3s;

        &.hide {
            max-height: 0;
            margin: 0;
        }

        img {
            width: 300px;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
        }

        .text-content {
            width: 70%;
            padding-left: 1rem;
            * {
                max-width: 100%;
            }

            code {
                display: inline-block;
                max-width: 100%;
            }
        }
    }
}

@media screen and (max-width: 1100px) {
}
@media screen and (max-width: 710px) {
}
</style>
