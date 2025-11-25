<script setup lang="ts">

import { TopicHeader } from '~/components/ui'
import LocationCard from '~/components/cards/cards/LocationCard.vue'

const { 
    fetchSelection, 
    items: locations, 
    isLoading
} = useLocations()

const {
    getFavorites
} = useFavorites()

onMounted(() => {
    fetchSelection(getFavorites('locations'))
})

</script>

<template>
    <section class="flex flex-wrap justify-center xl:justify-start gap-4 py-4">
        <TopicHeader title="Localizações" action-url="/locations" :see-all="false" />

        <div v-if="isLoading" class="w-full text-center animate-bounce">
            Carregando...
        </div>

        <div v-else-if="locations.results.length > 0" class="flex flex-wrap justify-center xl:justify-start w-full gap-4">
            <LocationCard 
                v-for="location of locations.results" 
                :location="location" 
            />
        </div>

        <div v-else class="w-full text-center">
            Nenhuma localização encontrada.
        </div>
    </section>
</template>
