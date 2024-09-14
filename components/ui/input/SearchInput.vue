<template>
    <div class="relative w-full">
        <Input id="search" type="text" placeholder="Search..." class="pl-10" :autocomplete="false" v-model="query"
            @change="onSearch" />

        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
            <Search class="size-6 text-muted-foreground" />
        </span>
    </div>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'

const route = useRoute()

const query = ref(route.query.q as string || '')

const onSearch = () => {
    navigateTo(
        { path: '/cards', query: { q: query.value } }
    )
};
</script>