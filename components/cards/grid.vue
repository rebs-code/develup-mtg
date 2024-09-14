<template>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <div v-for="card in cards" :key="card.id">
            <cards-image :card="card" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    cards: {
        type: Array,
        default: [],
    }
})
</script>