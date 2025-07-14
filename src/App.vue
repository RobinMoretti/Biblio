<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header>
        <div class="wrapper">
            <h1>Ludoth-que</h1>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/Ludoth-que">Ludoth-que</RouterLink>
                <RouterLink to="/TipsAndTricks">TipsAndTricks</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style scoped>
.wrapper {
    background-color: white;
    display: flex;
    padding: 1rem 1rem;
    font-size: 1rem;
    width: 100%;
    
    border-bottom: solid 1px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;

    h1 {
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: bold;
        margin-right: 1rem;
    }
}
</style>
