<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header>
        <div class="wrapper">
            <img class="avatar" src="./assets/avatar-icon-2.png" alt="" />
            <h1>Bibliothèque</h1>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/Ludoth-que">Ludoth-que</RouterLink>
                <RouterLink to="/TipsAndTricks">TipsAndTricks</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style scoped lang="scss">
.wrapper {
    background-color: white;
    display: flex;
    padding: 1rem 1rem;
    font-size: 1rem;
    width: 100%;

    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;

    align-items: center;

    .avatar {
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
    }
}
</style>
