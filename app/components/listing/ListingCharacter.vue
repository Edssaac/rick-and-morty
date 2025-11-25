<script setup lang="ts">

import { TopicHeader } from '~/components/ui'
import { CharacterCard } from '~/components/cards'

const {
    fetchSelection,
    items: characters,
    isLoading
} = useCharacters()

fetchSelection()

</script>

<template>
    <section class="flex flex-wrap justify-center xl:justify-start gap-4 py-4">
        <TopicHeader title="Personagens" action-url="/characters" />

        <div v-if="isLoading" class="w-full text-center animate-bounce">
            Carregando...
        </div>

        <div v-else-if="characters?.results.length > 0" class="flex flex-wrap justify-center xl:justify-start w-full gap-4">
            <CharacterCard 
                v-for="character of characters.results"
                :character="character" 
            />
        </div>

        <div v-else class="w-full text-center">
            Nenhum personagem encontrado.
        </div>
    </section>
</template>
