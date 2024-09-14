# components/cards/filters.vue
<template>
    <div class="hidden md:block w-[300px] h-full bg-primary-foreground rounded-xl p-4 sticky top-16 space-y-4">
        <Autocomplete v-model="filters.set_id" :options="sets" label="name" search-field="name"
            placeholder="Search set..." @update:model-value="onChange" />
    </div>
</template>

<script setup>
const sets = ref([
    { id: 'INV', name: 'Invasion' },
    { id: 'ODY', name: 'Odyssey' },
    { id: 'M10', name: 'Magic 2010' },
])

const filters = ref({
    set_id: null,
})
</script>