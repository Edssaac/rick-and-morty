<script setup lang="ts">

import { Info } from '~/components/icons'

const props = defineProps({
    actionUrl: String
})

</script>

<template>
    <button 
        type="button"
        class="flex items-center self-end gap-2 py-1 px-2 mt-auto rounded-[32px] text-sm cursor-pointer bg-[#11B0C8] text-white"
    >
        <Info /> Saiba mais
    </button>
</template>