<script setup lang="ts">

import { ArrowCircleUp } from '~/components/icons'

const props = defineProps({
    modelValue: { type: Boolean, required: true }
})

const emit = defineEmits(["update:modelValue"])
const close = () => {
    blockScroll(false)

    emit("update:modelValue", false)
}

const open = computed(() => props.modelValue)

const blockScroll = (block: boolean = false) => {
    if (block) {
        document.documentElement.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
    } else {
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''
    }
}

blockScroll(true)

</script>

<template>
    <Teleport to="body">
        <transition name="fade">
            <div 
                v-if="open" 
                class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                @click.self="close"
            >
                <div class="bg-[#FFF] text-black dark:bg-[#1E1E1E] dark:text-white rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto w-full max-w-2xl">
                    <div class="flex justify-end mb-5">
                        <ArrowCircleUp class="-rotate-90 cursor-pointer" @click="close" />
                    </div>
                    <slot />
                </div>
            </div>
        </transition>
    </Teleport>
</template>
