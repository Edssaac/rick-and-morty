<script setup lang="ts">

import { BaseModal } from '~/components/ui'
import { GenderFemale, GenderMale, Play, Pulse, Specie } from '~/components/icons'

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

const emit = defineEmits(["update:modelValue"])
const close = () => {
    emit("update:modelValue", false)
}

const { fetchOne, item: character, isLoading } = useCharacters()

onMounted(async () => {
    await fetchOne(props.id)
})

</script>

<template>
    <BaseModal :model-value="modelValue" @update:modelValue="close">
        <div v-if="isLoading" class="text-center animate-bounce">Carregando...</div>

        <div v-else-if="character.id" class="flex flex-col md:flex-row items-center gap-10">
            <NuxtImg :src="character.image" width="369" height="461" class="rounded-2xl" />

            <div class="flex flex-col gap-12">
                <h1 class="text-5xl font-bold">{{ character.name }}</h1>

                <p class="flex items-center gap-2">
                    <Play class="flex-[0_0_24px]" />
                    Participou de {{ character.episode?.length }} episódios
                </p>

                <div class="flex gap-6">
                    <p class="flex items-center gap-2">
                        <Pulse class="flex-[0_0_16px]" /> {{ character.status }}
                    </p>
                    <p class="flex items-center gap-2">
                        <Specie class="flex-[0_0_16px]" /> {{ character.species }}
                    </p>
                    <p v-if="character.gender === 'Male'" class="flex items-center gap-2">
                        <GenderMale class="flex-[0_0_16px]" /> {{ character.gender }}
                    </p>
                    <p v-else class="flex items-center gap-2">
                        <GenderFemale class="flex-[0_0_16px]" /> {{ character.gender }}
                    </p>
                </div>
            </div>
        </div>

        <div v-else class="text-center">Não foi possível carregar as informações.</div>
    </BaseModal>
</template>
