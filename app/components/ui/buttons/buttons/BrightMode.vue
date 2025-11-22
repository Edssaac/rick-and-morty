<script setup lang="ts">

import { Sun } from '~/components/icons'

const colorMode = useColorMode()

const setLight = () => {
    colorMode.preference = 'light'
}

</script>

<template>
    <NuxtLink 
        @click="setLight"
        class="flex items-center self-end gap-2 py-1 px-2 mt-auto rounded-[32px] text-sm cursor-pointer bg-[#11B0C8] dark:bg-[#313234]"
    >
        <Sun /> Claro
    </NuxtLink>
</template>