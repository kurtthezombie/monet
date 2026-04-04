<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
const audio = ref(null)
onMounted(async() => {
  if (!audio.value) return;
  audio.value.volume = 0.6;
  try {
    await audio.value.play()
  } catch(err) {
    const start = async() => {
      await audio.value.play()
      window.removeEventListener('click', start)
    }
    window.addEventListener('click', start)
  }
}) // <-- closing the onMounted callback
</script>
<template>
  <audio ref="audio" loop>
    <source src="/src/assets/music3.mp3" type="audio/mpeg" />
  </audio>
  
  <header>
    <div class="wrapper">
        
    </div>
  </header>
  
  <RouterView />
</template>
<style scoped>
  
</style>
