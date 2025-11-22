<script setup lang="ts">

import { ArrowCircleUp, Code } from '~/components/icons'
import { PageContainer } from '~/components/ui'

const scrollToTop = (): void => {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    })
}

</script>

<template>
    <footer>
        <PageContainer class="flex flex-col px-4">
            <div class="py-20 flex justify-between items-center ">
                <NuxtLink to="/">
                    <NuxtImg src="rick-and-morty-logo.svg" width="164" />
                </NuxtLink>

                <NuxtLink class="flex gap-2 items-center">
                    <p>Voltar ao topo</p>

                    <ArrowCircleUp @click="scrollToTop" class="cursor-pointer" />
                </NuxtLink>
            </div>

            <div class="border-t-2 flex justify-between py-6">
                <p>&copy; {{ new Date().getFullYear() }}</p>

                <span class="flex items-center gap-2">
                    <Code />

                    <p class="flex gap-1">
                        Desenvolvido por
                        <span class="text-[#11B0C8] font-bold">
                            <NuxtLink to="https://github.com/edssaac" class="flex gap-2 items-center">
                                Edssaac
                            </NuxtLink>
                        </span>
                    </p>
                </span>
            </div>
        </PageContainer>
    </footer>
</template>