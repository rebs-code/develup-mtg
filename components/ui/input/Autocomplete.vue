# components/ui/autocomplete/Autocomplete.vue
<template>
    <div class="autocomplete-container relative group transition-all w-full" :key="componentKey">
        <div class="relative w-full">
            <Input v-model="search" id="search" type="text" :placeholder="current_placeholder" class="pl-10"
                :autocomplete="false" />

            <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                <Search class="size-6 text-muted-foreground" />
            </span>
        </div>

        <div v-if="current_value" class="absolute top-3 right-2 text-lg text-white cursor-pointer" @click="onClear">
            <X class="size-4 text-muted-foreground hover:text-foreground" />
        </div>

        <div v-if="results.length"
            class="my-autocomplete-results absolute top-full w-full z-50 border border-t-0 max-h-xs">
            <div v-for="result in results" :key="result[props.trackBy]"
                class="p-2 capitalize cursor-pointer transition-all bg-primary-foreground" @click="onSelect(result)">
                {{ result[props.label] }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { debounce } from "lodash-es";
import { Search, X } from "lucide-vue-next";

const props = defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },

    minSearchLength: {
        type: Number,
        default: 3,
    },

    modelValue: {
        type: String,
        required: false,
    },

    label: {
        type: String,
        default: "name",
    },

    options: {
        type: Array,
        default: [],
    },

    placeholder: {
        type: String,
        default: "Search...",
    },

    searchField: {
        type: String,
        default: "search",
    },

    trackBy: {
        type: String,
        default: "id",
    },
});

const emit = defineEmits(["update:modelValue"]);

const search = ref("");
const results = ref([]);

const current_value = ref(props.modelValue);
const current_option =
    props.options.find((result) => result.id === props.modelValue) || {};

const current_placeholder = ref(current_option.name || props.placeholder);

const componentKey = ref(0);

watch(
    search,
    debounce(function () {
        autocomplete();
    }, 400)
);

const autocomplete = () => {
    if (!search.value || search.value.length < props.minSearchLength) {
        results.value = [];

        return false;
    }

    if (props.options.length) {
        results.value = props.options.filter((option) =>
            option[props.searchField]
                .toLowerCase()
                .includes(search.value.toLowerCase().trim())
        );

        componentKey.value++;
        return true;
    }
};

const onSelect = async (result) => {
    current_value.value = result[props.trackBy];

    current_placeholder.value = result[props.label];

    emit("update:modelValue", current_value.value);

    search.value = "";
};

const onClear = () => {
    current_value.value = null;

    current_placeholder.value = props.placeholder;

    emit("update:modelValue", current_value.value);
};
</script>
