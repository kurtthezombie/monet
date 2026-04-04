<script setup>

import router from '@/router';
import { onMounted, ref } from 'vue'

const isWrong = ref(false);
const password = ref("");

const showAlert = () => {
  alert('Clue: Look around the page, beb. cl--');
}

const submitForm = () => {
  const correctPassword = password.value.toLowerCase() === 'clouds';

  if (!correctPassword){
    isWrong.value = true;
    return;
  }
  
  router.push({ name: 'chapters'});
}

</script>

<template>
  <main class="min-h-screen relative overflow-hidden grid place-items-center bg-gradient-to-b from-[#eaf6ff] to-white px-4">
    <!-- Clouds (background only) -->
    <div class="cloud c1"></div>
    <div class="cloud c2"></div>
    <div class="cloud c3"></div>

    <!-- Your existing form/card (unchanged) -->
    <div class="relative z-10 w-full max-w-sm rounded-2xl bg-white shadow-2xl p-6 border border-gray-200">
      <div class="flex flex-col gap-4">
        <h1 class="text-3xl text-center font-semibold text-gray-800">
          Enter the Gate
        </h1>

        <div class="flex flex-col">
          <label class="mb-1 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            class="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
          />
        </div>

        <div class="flex flex-col">
          <label class="mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Our secret word..."
            class="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
            v-model="password"
          />
        </div>

        <div class="flex justify-end text-sm text-yellow-600">
          <p @click="showAlert" class="text-yellow-600 underline cursor-pointer hover:text-yellow-500">Forgot password?</p>
        </div>

        <div class="text-red-500 text-sm text-center" v-if="isWrong">
          Password is incorrect.
        </div>

        <button
          class="w-full rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white shadow-md hover:bg-cyan-500 active:scale-[0.99] transition"
          @click="submitForm"
        >
          Enter
        </button>

        <p class="text-center text-sm text-gray-500">
          A small gate before something special.
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Cloud base style */
.cloud{
  position:absolute;
  background:#ffffff;
  border-radius:100px;
  box-shadow:0 8px 30px rgba(0,0,0,.08);
  pointer-events:none;
}

.cloud::before,
.cloud::after{
  content:"";
  position:absolute;
  background:#ffffff;
  border-radius:50%;
}

/* Different cloud shapes */
.c1{
  width:180px; height:60px;
  top:12%; left:10%;
}
.c1::before{ width:70px;height:70px;top:-35px;left:25px; }
.c1::after{ width:90px;height:90px;top:-45px;right:25px; }

.c2{
  width:220px;height:70px;
  bottom:15%; right:12%;
}
.c2::before{ width:90px;height:90px;top:-50px;left:35px; }
.c2::after{ width:80px;height:80px;top:-40px;right:40px; }

.c3{
  width:140px;height:50px;
  top:35%; right:20%;
  opacity:.9;
}
.c3::before{ width:60px;height:60px;top:-30px;left:20px; }
.c3::after{ width:60px;height:60px;top:-28px;right:20px; }
</style>