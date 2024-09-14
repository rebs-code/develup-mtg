<template>
    <div>
        <nuxt-img :src="card.image_uris?.normal" :alt="card.name" class="rounded-xl" />
    </div>
</template>

<script setup>
const props = defineProps({
    card: {
        type: Object,
        required: true
    }
})
</script>