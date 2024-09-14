import { defineStore } from 'pinia'

export const useCardsFiltersStore = defineStore('cards_filters', () => {

    const route = useRoute()

    const filters = ref({
        q: route.query.q || 'jace',
    })

    return {
        filters,
    }
})