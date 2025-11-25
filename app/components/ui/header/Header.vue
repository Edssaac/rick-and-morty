<script setup lang="ts">

import { Heart } from '~/components/ui/icons'
import { PageContainer } from '~/components/ui'

const router = useRouter()

const showFavoritesButton = computed(() => {
    return router.currentRoute.value.path !== '/favorites'
})

</script>

<template>
    <header>
        <PageContainer class="flex flex-col px-4">
            <div class="py-10 flex justify-between items-center ">
                <NuxtLink to="/">
                    <img src="/assets/images/rick-and-morty-logo.svg" width="190" />
                </NuxtLink>

                <NuxtLink 
                    v-if="showFavoritesButton"
                    to="/favorites"
                    class="flex items-center gap-2 py-1 px-2 rounded-[32px] text-sm bg-[#11B0C8] text-white"
                >
                    <Heart :size="24" color="#FFF" class="pointer-events-none" /> Favoritos
                </NuxtLink>
            </div>
        </PageContainer>
    </header>
</template>