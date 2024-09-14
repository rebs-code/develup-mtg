<template>
    <div class="h-full">
        <h1>Cards</h1>

        <div>
            <div v-for="card in cards" :key="card.id">
                <cards-image :card="card" />
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()

const query = route.query.q || 'jace'

const { data: response } = await useFetch('https://api.scryfall.com/cards/search?q=' + query)

const cards = response.value.data
</script>