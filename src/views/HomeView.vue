<script setup>

import router from '@/router';
import { onMounted, ref } from 'vue'

const showFirst = ref(false);
const showSecond = ref(false);

onMounted(() => {
  setTimeout(() => {
    showFirst.value = true;
    setTimeout(() => {
      showSecond.value = true;
      setTimeout(() => {
        showThird.value = true;
      }, 2000);
    }, 3000)
  }, 3000);
});

const nextPage = () => {
  router.push({ name: 'greetings'});
}

</script>

<template>
  <main>
    <div class="text-2xl flex flex-col justify-center items-center h-screen gap-x-4">
      <p>Hey you!</p>
      <Transition>
        <p v-if="showFirst">Yes, <span class="text-red-600">YOU</span>.</p>
      </Transition>
      <div>
        <Transition>
          <button @click="nextPage" v-if="showSecond"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-2xl text-sm px-3 py-2.5 me-2 mb-2 mt-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">What
            about me?</button>
        </Transition>
      </div>
    </div>
  </main>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
