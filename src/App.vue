<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header>
        <div class="wrapper">
            <div class="first-part">
                <img class="avatar" src="./assets/avatar-icon-2.png" alt="" />
                <h1>Bibliothèque numérique - {{ $route.name }}</h1>
            </div>
            <nav>
                <RouterLink to="/Ludoth-que">Ludoth-que</RouterLink>
                <RouterLink to="/petites-fiches-techniques">TipsAndTricks</RouterLink>
                <a href="https://robinmoretti.eu">-> back home</a>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style scoped lang="scss">
.wrapper {
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 1rem 1rem;
    font-size: 1rem;
    width: 100%;

    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;

    align-items: center;

    .first-part {
        display: flex;
        width: 60%;
        align-items: center;
    }
    h1 {
        font-size: 1.5rem;
    }

    .avatar {
        margin-left: 11%;
        width: 3rem;
        margin-right: 1rem;
    }

    h1 {
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: bold;
        margin-right: 1rem;
    }

    nav {
        a {
            color: var(--color-text);
            font-weight: normal;
            text-decoration: none;
            margin-right: 1rem;

            &.router-link-active {
                font-weight: bold;
            }
        }

        margin-right: 11%;
    }
}
</style>
