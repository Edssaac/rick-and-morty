<script setup lang="ts">

import { TopicHeader } from '~/components/ui'
import { EpisodeCard } from '~/components/cards'

const { 
    fetchSelection, 
    items: episodes, 
    isLoading
} = useEpisodes()

fetchSelection()

</script>

<template>
    <section class="flex flex-wrap justify-center xl:justify-start gap-4 py-4">
        <TopicHeader title="Episodios" action-url="/episodes" />

        <div v-if="isLoading" class="w-full text-center animate-bounce">
            Carregando...
        </div>

        <div v-else-if="episodes?.results.length > 0" class="flex flex-wrap justify-center xl:justify-start w-full gap-4">
            <EpisodeCard 
                v-for="episode of episodes.results"
                :episode="episode" 
            />
        </div>

        <div v-else class="w-full text-center">
            Nenhum episódio encontrado.
        </div>
    </section>
</template>
