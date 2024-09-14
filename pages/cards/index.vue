<template>
    <div class="h-full">
        <div class="flex justify-end mb-4">
            <div class="flex space-x-2">
                <Button variant="outline" size="icon" @click="showGrid">
                    <LayoutGrid />
                </Button>

                <Button variant="outline" size="icon" @click="showTable">
                    <Table />
                </Button>
            </div>
        </div>

        <div>
            <cards-grid v-if="view === 'grid'" :cards="cards" />

            <cards-table v-if="view === 'table'" :cards="cards" />
        </div>
    </div>
</template>

<script setup>
import { LayoutGrid, Table } from 'lucide-vue-next';
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

const view = ref(null)

onMounted(() => {
    view.value = localStorage.getItem("view") || "grid";
})

const showGrid = () => {
    view.value = 'grid'

    localStorage.setItem("view", view.value)
}

const showTable = () => {
    view.value = 'table'

    localStorage.setItem("view", view.value)
}




</script>