<template>
    <div class="transition-all hover:scale-110 hover:z-20">
        <template v-if="card.card_faces">
            <div class="relative transition-transform duration-500 preserve-3d" :class="{ 'rotate-y-180': is_flipped }">
                <nuxt-img :src="card.card_faces[0].image_uris?.normal" :alt="card.card_faces[0].name"
                    class="absolute rounded-xl transition-all backface-hidden" />

                <nuxt-img :src="card.card_faces[1].image_uris?.normal" :alt="card.card_faces[1].name"
                    class="absolute rounded-xl transition-all backface-hidden rotate-y-180" />
            </div>

            <Button variant="outline" size="icon" class="absolute top-8 right-8 z-20" @click="flip">
                <RefreshCw />
            </Button>
        </template>

        <template v-else>
            <nuxt-img :src="card.image_uris?.normal" :alt="card.name" class="rounded-xl transition-all" />
        </template>
    </div>
</template>

<script setup>
import { RefreshCw } from "lucide-vue-next";

const props = defineProps({
    card: {
        type: Object,
        required: true
    }
})

const is_flipped = ref(false);

const flip = () => {
    is_flipped.value = !is_flipped.value;
};
</script>
