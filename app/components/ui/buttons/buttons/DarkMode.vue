<script setup lang="ts">

import { Moon } from '~/components/icons'

const colorMode = useColorMode()

const setDark = () => {
    colorMode.preference = 'dark'
}

</script>

<template>
    <NuxtLink 
        @click="setDark"
        class="flex items-center self-end gap-2 py-1 px-2 mt-auto rounded-[32px] text-sm cursor-pointer bg-[#FFF] border-[1px] border-solid border-[#313234] dark:bg-[#11B0C8]"
    >
        <Moon /> Escuro
    </NuxtLink>
</template>