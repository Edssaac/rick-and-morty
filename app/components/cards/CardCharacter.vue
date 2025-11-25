<script setup lang="ts">

import { Heart, Pulse, Specie, MapPin } from '~/components/ui/icons'
import { Details } from '~/components/ui/buttons'
import { Card } from '~/components/ui'
import { CharacterDetailing } from '~/components/detailing'

import type { Character } from '~/composables/useCharacter'

defineProps<{
    character: Character
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
    <Card>
        <NuxtImg :src="character.image" height="200" width="262" class="rounded-2xl" />

        <div class="flex flex-col gap-4">
            <div class="grid grid-cols-[1fr,48px]">
                <p class="tetx-base font-bold">{{ character.name }}</p>

                <span>
                    <Heart 
                        :is-filled="isFavorited('characters', Number(character.id))"
                        @click="toggleFavorite('characters', Number(character.id))" 
                    />
                </span>
            </div>

            <div class="flex flex-col gap-2">
                <p class="flex items-center gap-1">
                    <Pulse class="flex-[0_0_16px]" /> {{ character.status }}
                </p>
                <p class="flex items-center gap-1">
                    <Specie class="flex-[0_0_16px]" /> {{ character.species }}
                </p>
                <p class="flex items-center gap-1">
                    <MapPin class="flex-[0_0_16px]" /> {{ character.origin?.name }}
                </p>
            </div>
        </div>

        <Details @click="openDetails(String(character.id))" />
    </Card>

    <CharacterDetailing 
        v-if="selectedId"
        :id="selectedId"
        v-model="open"
    />
</template>