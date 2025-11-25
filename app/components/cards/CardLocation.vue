<script setup lang="ts">

import { Heart, MapPin } from '~/components/ui/icons'
import { Details } from '~/components/ui/buttons'
import { Card } from '~/components/ui'
import { LocationDetailing } from '~/components/detailing'

import type { Location } from '~/composables/useLocation'

defineProps<{
    location: Location
}>()

const selectedId = ref<string|null>(null)
const open = ref(false)

const openDetails = (id: string) => {
    selectedId.value = id
    open.value = true
}

const {
    isFavorited,
    toggleFavorite
} = useFavorites()

</script>

<template>
    <Card class="flex flex-col items-center">
        <div class="flex flex-col items-center gap-3">
            <p class="flex flex-row items-center gap-2">
                <MapPin :size="20" class="flex-[0_0_20px]" /> {{ location.type }}
            </p>

            <p class="text-[#11B0C8]">{{ location.name }}</p>
        </div>

        <div class="flex flex-col items-center gap-4">
            <div>
                <Details @click="openDetails(String(location.id))" />
            </div>

            <Heart 
                :size="32" 
                :is-filled="isFavorited('locations', Number(location.id))"
                @click="toggleFavorite('locations', Number(location.id))" 
            />
        </div>
    </Card>

    <LocationDetailing 
        v-if="selectedId"
        :id="selectedId"
        v-model="open"
    />
</template>