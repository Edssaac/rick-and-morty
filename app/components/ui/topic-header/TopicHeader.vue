<script setup lang="ts">

import { Square } from '~/components/ui/icons'

const props = defineProps({
    title: String,
    actionUrl: String,
    seeAll: {
        type: Boolean,
        default: true
    }
})

</script>

<template>
    <div class="flex justify-center xl:justify-start w-full gap-4">
        <h2 class="text-2xl font-bold">{{ props.title }}</h2>

        <NuxtLink 
            v-if="props.seeAll"
            :to="props.actionUrl"
            class="flex items-center gap-2 py-1 px-2 rounded-[32px] text-sm bg-[#11B0C8] dark:bg-[#313234] text-white"
        >
            <Square /> Ver todos
        </NuxtLink>
    </div>
</template>