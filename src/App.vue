<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
    <header>
        <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
        <div class="wrapper">
            <h1>Ludoth-que</h1>
            <!-- <nav>
                <RouterLink to="/">Home</RouterLink>
            </nav> -->
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

    h1 {
        font-size: 1rem;
        font-weight: bold;
        margin-right: 1rem;
    }
}
</style>
