<script setup lang="ts">

import { Footer, Header } from '~/components/ui'

</script>

<template>
    <div class="min-h-[100vh] bg-[#FFF] text-black dark:bg-[#1E1E1E] dark:text-white">
        <Header />
        <slot />
        <Footer />
    </div>
</template>