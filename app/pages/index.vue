<script setup lang="ts">

import { Hero, PageContainer } from '~/components/ui'
import { CharacterListing, EpisodeListing, LocationListing } from '~/components/listing'

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