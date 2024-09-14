<template>
    <div class="max-w-[calc(100vw_-_2rem)] overflow-x-hidden">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead clas="text-left">Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Mana Cost</TableHead>
                    <TableHead>Power</TableHead>
                    <TableHead>Toughness</TableHead>
                    <TableHead>Loyalty</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                <TableRow v-for="card in cards" :key="card.id">
                    <TableCell class="max-w-72">
                        <Sheet>
                            <SheetTrigger class="flex items-center space-x-2">
                                <span>{{ card.name }}</span>

                                <Eye class="size-4" />
                            </SheetTrigger>

                            <SheetContent class="flex flex-col items-center justify-center">
                                <SheetTitle>
                                    {{ card.name }}
                                </SheetTitle>

                                <cards-image :card="card" />
                            </SheetContent>
                        </Sheet>
                    </TableCell>
                    <TableCell class="max-w-72">
                        {{ card.type_line }}
                    </TableCell>
                    <TableCell>
                        {{ card.mana_cost }}
                    </TableCell>
                    <TableCell>
                        {{ card.power }}
                    </TableCell>
                    <TableCell>
                        {{ card.toughness }}
                    </TableCell>
                    <TableCell>
                        {{ card.loyalty }}
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
</template>

<script setup>
import { Eye } from 'lucide-vue-next'

const props = defineProps({
    cards: {
        type: Array,
        default: [],
    }
})
</script>