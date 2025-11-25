<script setup lang="ts">

import { BaseModal } from '~/components/ui'
import { Play, Heart, Calendar, Queue, Smiley } from '~/components/ui/icons'

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    modelValue: {
        type: Boolean,
        required: true
    }
})

const reload = ref(false)

const setReload = () => {
    reload.value = true
}

const emit = defineEmits(["update:modelValue"])
const close = () => {
    emit("update:modelValue", false)

    if (reload.value) {
        window.location.reload()
    }
}

const { fetchOne, item: episode, isLoading } = useEpisodes()

const episodeCreatedDate = ref('')

onMounted(async () => {
    await fetchOne(props.id)

    const date = new Date(episode.created || '')

    const usFormatter = new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
    })

    if (date) {
        episodeCreatedDate.value = usFormatter.format(date)
    }
})

const {
    isFavorited,
    toggleFavorite
} = useFavorites()

</script>

<template>
    <BaseModal :model-value="modelValue" @update:modelValue="close">
        <div v-if="isLoading" class="text-center animate-bounce">Carregando...</div>

        <div v-else-if="episode.id" class="flex flex-col gap-6">
            <Play :size="72" />

            <div class="flex flex-wrap items-center gap-4">
                <p class="text-5xl leading-[55px] font-bold">{{ episode.name }}</p>
                <Heart 
                    :size="56" 
                    :is-filled="isFavorited('episodes', Number(episode.id))"
                    @click="toggleFavorite('episodes', Number(episode.id)), setReload()" 
                    class="flex-[0_0_56px]" 
                />
            </div>

            <div class="flex gap-6">
                <div class="flex items-center gap-2">
                    <Calendar />
                    {{ episodeCreatedDate }}
                </div>

                <div class="flex items-center gap-2">
                    <Queue />
                    {{ episode.episode }}
                </div>
            </div>

            <div class="flex items-center gap-2 mt-8">
                <Smiley />
                {{ episode.characters?.length }} Personagens participaram deste episódio.
            </div>
        </div>

        <div v-else class="text-center">Não foi possível carregar as informações.</div>
    </BaseModal>
</template>
