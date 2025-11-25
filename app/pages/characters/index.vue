<script setup lang="ts">

import { Pagination } from '~/components/ui'
import { CharacterCard } from '~/components/cards'

useHead({
    title: 'Personagens'
})

const {
    fetchAll,
    items: characters,
    isLoading
} = useCharacters()

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

        <div v-else-if="characters?.results.length > 0" class="flex flex-wrap justify-center gap-4">
            <Pagination 
                :page="currentPage"
                :pages="characters.info.pages"
            />

            <CharacterCard 
                v-for="character of characters.results"
                :character="character" 
            />

            <Pagination 
                :page="currentPage"
                :pages="characters.info.pages"
            />
        </div>

        <div v-else class="w-full text-center">
            Nenhum personagem encontrado.
        </div>
    </section>
</template>
