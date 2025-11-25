<script setup lang="ts">

import { Heart, Play } from '~/components/icons'
import { Details } from '~/components/ui/buttons'
import { Card } from '~/components/ui'
import { EpisodeDetailing } from '~/components/detailing'

import type { Episode } from '~/composables/useEpisode'

defineProps<{
    episode: Episode
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
    <Card class="min-h-[150px]">
        <div class="flex flex-row gap-4">
            <Play class="flex-[0_0_24px]" /> {{ episode.name }} | {{ episode.episode }}
        </div>

        <div class="flex flex-row justify-between">
            <Details @click="openDetails(String(episode.id))" />

            <Heart 
                :size="32" 
                :is-filled="isFavorited('episodes', Number(episode.id))"
                @click="toggleFavorite('episodes', Number(episode.id))" 
            />
        </div>
    </Card>

    <EpisodeDetailing 
        v-if="selectedId"
        :id="selectedId"
        v-model="open"
    />
</template>