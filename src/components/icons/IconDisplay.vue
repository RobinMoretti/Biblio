<script setup>
import { ref } from "vue";
const emit = defineEmits(["clicked"]);

let isActive = ref(false);

function toggleState() {
    isActive.value = !isActive.value;
    emit("clicked");
}
</script>

<template>
    <svg
        :class="{ active: isActive }"
        @click="toggleState"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevron-down"
    >
        <path d="m6 9 6 6 6-6" />
    </svg>
</template>

<style scoped>
svg {
    transition: all 0.3s;
    height: 30px;
    width: 30px;
    transform: rotate(180deg);
}
.active {
    transform: rotate(0deg);
}
</style>
