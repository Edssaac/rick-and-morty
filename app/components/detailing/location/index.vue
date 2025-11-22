<script setup lang="ts">

import { BaseModal } from '~/components/ui'
import { Heart, MapPin, Cube, Smiley } from '~/components/icons'

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

const { fetchOne, item: location, isLoading } = useLocations()

onMounted(async () => {
    await fetchOne(props.id)
})

</script>

<template>
    <BaseModal :model-value="modelValue" @update:modelValue="close">
        <div v-if="isLoading" class="text-center animate-bounce">Carregando...</div>

        <div v-else-if="location.id" class="flex flex-col gap-6">
            <div class="flex flex-wrap items-center gap-4">
                <p class="text-5xl leading-[55px] font-bold">{{ location.name }}</p>
                <Heart :size="56" class="flex-[0_0_56px]" />
            </div>

            <div class="flex gap-6">
                <div class="flex items-center gap-2">
                    <MapPin :size="32" />
                    {{ location.type }}
                </div>

                <div class="flex items-center gap-2">
                    <Cube />
                    {{ location.dimension }}
                </div>
            </div>

            <div class="flex items-center gap-2 mt-8">
                <Smiley />
                {{ location.residents?.length }} Personagens localizados aqui.
            </div>
        </div>

        <div v-else class="text-center">Não foi possível carregar as informações.</div>
    </BaseModal>
</template>
