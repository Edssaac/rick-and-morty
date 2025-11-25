<script setup lang="ts">

import { Pagination } from '~/components/ui'
import { EpisodeCard } from '~/components/cards'

useHead({
    title: 'Episódios'
})

const { 
    fetchAll, 
    items: episodes, 
    isLoading
} = useEpisodes()

const route = useRoute()
const currentPage = Number(route.query.page ?? 1)

fetchAll({
    page: currentPage
})

</script>

<template>
    <section class="flex flex-col gap-8 justify-center py-4">
        <div v-if="isLoading" class="w-full text-center animate-bounce">
            Carregando...
        </div>

        <div v-else-if="episodes?.results.length > 0" class="flex flex-wrap justify-center gap-4">
            <Pagination 
                :page="currentPage"
                :pages="episodes.info.pages"
            />

            <EpisodeCard 
                v-for="episode of episodes.results"
                :episode="episode" 
            />

            <Pagination 
                :page="currentPage"
                :pages="episodes.info.pages"
            />
        </div>

        <div v-else class="w-full text-center">
            Nenhum episódio encontrado.
        </div>
    </section>
</template>