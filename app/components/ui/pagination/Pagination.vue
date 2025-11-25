<script setup lang="ts">

import { ArrowLeft, ArrowRight } from '~/components/ui/icons'

const props = defineProps({
    page: {
        type: Number,
        required: true
    }, 
    pages: {
        type: Number,
        required: true
    }, 
})

const url = useRequestURL()
const target = url.origin + url.pathname

const prevPage = Math.max(props.page - 1, 1)
const nextPage = Math.min(props.page + 1, props.pages)

const visiblePages = computed<number[]>(() => {
    const total = props.pages
    const current = props.page
    const delta = Math.max(1, 5 - current)

    if (total <= 7) {
        return Array.from({ length: total }, (_, i) => i + 1)
    }

    const pages = new Set<number>()

    pages.add(1)
    pages.add(total)

    for (let i = current - delta; i <= current + delta; i++) {
        if (i > 1 && i < total) pages.add(i)
    }

    return Array.from(pages).sort((a, b) => a - b)
})

</script>

<template>
    <div v-if="pages > 0" class="flex justify-center items-center w-full py-16 gap-3">
        <NuxtLink 
            :class="prevPage === 1 && page === 1 ? 'pointer-events-none opacity-50' : ''"
            :to="`${target}?page=${prevPage}`"
        >
            <ArrowLeft />
        </NuxtLink>

        <template v-for="(pageNumber, index) in visiblePages" :key="pageNumber">
            <span v-if="index > 0 && pageNumber - (visiblePages[index - 1] ?? 0) > 1">
                ...
            </span>

            <NuxtLink 
                class="border px-3 py-1 rounded-full border-black dark:border-white"
                :class="page === pageNumber ? 'pointer-events-none bg-[#11B0C8] border-none text-white' : ''"
                :to="`${target}?page=${pageNumber}`"
            >
                {{ pageNumber }}
            </NuxtLink>
        </template>

        <NuxtLink 
            :class="page >= pages ? 'pointer-events-none opacity-50' : ''"
            :to="`${target}?page=${nextPage}`"
        >
            <ArrowRight />
        </NuxtLink>
    </div>
</template>