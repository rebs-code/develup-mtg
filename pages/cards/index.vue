<template>
    <div class="h-full">
        <h1>Cards</h1>

        <cards-grid :cards="cards" />
    </div>
</template>

<script setup>
import { useCardsFiltersStore } from '~/stores/cardsFiltersStore'

const { filters } = useCardsFiltersStore()

const response = ref(null)

const getCards = async () => {
    const { data } = await $fetch('https://api.scryfall.com/cards/search?q=' + filters.q)

    response.value = data
}

getCards()

watch(
    () => filters,
    () => getCards(),
    { deep: true }
)

const cards = computed(() => response.value || [])
</script>