<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import { letters } from '../constants/letters.js'
import LetterDetails from '@/components/LetterDetails.vue'

const route = useRoute();

const letter = computed(() => {
  return letters.find(item => item.slug === route.params.slug)
})
</script>


<template>
  <div class="min-h-screen px-6 py-10 bg-[#f5f7fa]">
    <LetterDetails v-if="letter" :letter="letter" />

    <div v-else class="text-red-500 text-center">
      Letter not found
    </div>
  </div>
</template>
