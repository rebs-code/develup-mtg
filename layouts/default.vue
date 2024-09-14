<template>
    <div class="flex w-full">
        <div class="group flex flex-1 flex-col min-h-screen">
            <div class="sticky top-0 z-10">
                <div class="mx-8 py-4">
                    Heading
                </div>
            </div>

            <div class="flex flex-col p-4">
                <slot />
            </div>
        </div>
    </div>
</template>