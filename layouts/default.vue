<template>
    <div class="flex w-full">
        <div class="group flex flex-1 flex-col min-h-screen max-w-screen overflow-x-hidden">
            <div class="sticky top-0 z-10">
                <div class="mx-8 py-4">
                    <heading />
                </div>
            </div>

            <div class="flex flex-col p-4">
                <slot />
            </div>
        </div>
    </div>
</template>
