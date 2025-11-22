<script setup lang="ts">

import { PageContainer } from '~/components/ui'
import { DarkMode, BrightMode } from '~/components/ui/buttons'

</script>

<template>
    <header class="bg-white dark:bg-black pt-16">
        <PageContainer class="flex flex-col gap-5">
            <div class="flex justify-center px-5 lg:justify-between xl:px-0">
                <div class="flex flex-col gap-6 h-[435px] self-center">
                    <h1 class="font-bold text-5xl leading-[55px]">
                        Saiba tudo em <br>
                        um só <span class="text-[#11B0C8]">lugar.</span>
                    </h1>

                    <p>Personagens, localizações, episódios e muito mais.</p>

                    <div class="flex gap-4 mt-10">
                        <DarkMode />
                        <BrightMode />
                    </div>

                    <p class="text-[#11B0C8] hidden dark:block">Ai sim, Porr#@%&*</p>
                    <p class="text-[#11B0C8] block dark:hidden">Wubba Lubba Dub Dub! Cuidado com os olhos.</p>
                </div>

                <NuxtImg src="rick-and-morty.png" class="hidden lg:block w-[435px] dark:lg:hidden" />
            </div>
        </PageContainer>

        <hr class="bg-[#11B0C8] h-1 dark:hidden">
    </header>
</template>