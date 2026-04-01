<script setup>
import { chapters } from '../constants/chapters';

</script>

<template>
  <main>
    <div class="min-h-screen bg-[#fce7f3] flex items-center justify-center">
      <div class="flex gap-5 overflow-y-hidden px-8">
        <router-link
          v-for="(chapter, i) in chapters"
          :key="i"
          :to="`/chapters/${chapter.slug}`"
          class="group relative w-64 h-[530px] bg-white overflow-hidden flex flex-col justify-end p-6 hover:scale-[1.01] hover:shadow-xl transition cursor-pointer" 
        >

        <div
          class="absolute inset-0 bg-cover bg-center opacity-40
           transition duration-300
           group-hover:opacity-30 group-hover:scale-105"
          :style="{ backgroundImage: `url(${chapter.img})` }"
        >

        <div class="absolute inset-0 bg-white/10"></div>

        <!--content-->
        </div>
        <div class="relative z-10">
          <span class="text-xs tracking-wides text-neutral-500 mb-2 uppercase">
            {{  chapter.kicker  }}
          </span>
          <h2 class="text-xl font-bold">
            {{ chapter.title }}
          </h2>
        </div>
          
        </router-link>
      </div>
    </div>
  </main>      
</template>
