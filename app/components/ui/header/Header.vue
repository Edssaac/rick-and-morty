<script setup lang="ts">

import { Heart } from '~/components/icons'
import { PageContainer } from '~/components/ui'

</script>

<template>
    <header>
        <PageContainer class="flex flex-col px-4">
            <div class="py-10 flex justify-between items-center ">
                <NuxtLink to="/">
                    <NuxtImg src="rick-and-morty-logo.svg" width="190" />
                </NuxtLink>

                <NuxtLink 
                    to="/favorites"
                    class="flex items-center gap-2 py-1 px-2 rounded-[32px] text-sm bg-[#11B0C8] text-white"
                >
                    <Heart :size="24" color="#FFF" /> Favoritos
                </NuxtLink>
            </div>
        </PageContainer>
    </header>
</template>