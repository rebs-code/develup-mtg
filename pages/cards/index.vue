<template>
    <div class="h-full">
        <h1>Cards</h1>

        <cards-grid :cards="cards" />
    </div>
</template>

<script setup>
const route = useRoute()

const query = route.query.q || 'jace'

const { data: response } = await useFetch('https://api.scryfall.com/cards/search?q=' + query)

const cards = response.value.data
</script>