<script setup lang="ts">

import { PageContainer } from '~/components/ui'
import { CharacterFavorites, EpisodeFavorites, LocationFavorites } from '~/components/favorites'

useHead({
    title: 'Favoritos'
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