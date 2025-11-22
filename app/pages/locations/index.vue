<script setup lang="ts">

import { Pagination } from '~/components/ui'
import LocationCard from '~/components/cards/cards/LocationCard.vue'

const { 
    fetchAll, 
    items: locations, 
    isLoading
} = useLocations()

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

        <div v-else-if="locations.results.length > 0" class="flex flex-wrap justify-center gap-4">
            <Pagination 
                :page="currentPage"
                :pages="locations.info.pages"
            />

            <LocationCard 
                v-for="location of locations.results" 
                :location="location" 
            />

            <Pagination 
                :page="currentPage"
                :pages="locations.info.pages"
            />
        </div>

        <div v-else class="w-full text-center">
            Nenhuma localização encontrada.
        </div>
    </section>
</template>
