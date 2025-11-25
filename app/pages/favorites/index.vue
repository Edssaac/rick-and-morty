<script setup lang="ts">

import { CharacterFavorites, EpisodeFavorites, LocationFavorites } from '~/components/favorites'
import { PageContainer } from '~/components/ui'

useHead({
    title: 'Home'
})

</script>

<template>
    <div class="flex flex-col gap-8">
        <PageContainer>
            <CharacterFavorites />

            <EpisodeFavorites />

            <LocationFavorites />
        </PageContainer>
    </div>
</template>