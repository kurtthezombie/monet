<script setup>

defineProps({
  letter: {
    type: Object,
    required: true,
  }
}) 

</script>

<template>
    <router-link
      to="/chapters"
      class="inline-block mb-6 text-sm text-gray-500 hover:text-black transition"
    >
      ← Back to Chapters
    </router-link>
  <section class="max-w-3xl mx-auto bg-white rounded-2xl p-8">
    

    <h1 class="text-3xl font-bold mb-6">
      {{ letter.title }}
    </h1>

    <div class="space-y-4">
      <p
        class="text-gray-700 leading-7"
      >
        {{ letter.content }}
      </p>
    </div>
  </section>
</template>
