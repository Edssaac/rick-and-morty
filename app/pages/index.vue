<script setup lang="ts">

import { CharacterListing, EpisodeListing, LocationListing } from '~/components/listing'
import { Hero, PageContainer } from '~/components/ui'

useHead({
    title: 'Home'
})

</script>

<template>
    <div class="flex flex-col gap-8">
        <Hero />

        <PageContainer>
            <CharacterListing />

            <EpisodeListing />

            <LocationListing />
        </PageContainer>
    </div>
</template>