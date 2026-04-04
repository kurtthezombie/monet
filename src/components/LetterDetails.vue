<script setup>
defineProps({
  letter: {
    type: Object,
    required: true,
  }
}) 
</script>
<template>
  <div class="min-h-screen px-4 py-8 md:px-6 md:py-12">
    <router-link
      to="/chapters"
      class="mb-6 inline-flex items-center gap-2 rounded-full bg-white/50 px-4 py-2 text-sm text-gray-600 backdrop-blur-sm transition hover:bg-white/70 hover:text-gray-900"
    >
      <span>←</span>
      <span>Back to Chapters</span>
    </router-link>

    <div class="mx-auto max-w-5xl">
      <section
        class="mx-auto max-w-3xl rounded-[20px] md:rounded-[28px] border border-white/40 bg-white/45 p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)] md:p-12"
      >
        <div class="mb-6 md:mb-8 h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent"></div>

        <h1
          class="mb-6 md:mb-8 text-center text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-800"
        >
          {{ letter.title }}
        </h1>

        <div class="mx-auto max-w-2xl text-[15px] md:text-[17px] leading-8 md:leading-9 text-gray-700">
          <p class="whitespace-pre-line first-letter:float-left first-letter:mr-2 first-letter:text-4xl md:first-letter:text-5xl first-letter:font-semibold first-letter:leading-none first-letter:text-violet-400">
            {{ letter.content }}
          </p>
        </div>

        <div class="mt-6 md:mt-8 h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent"></div>
      </section>
    </div>
  </div>
</template>
