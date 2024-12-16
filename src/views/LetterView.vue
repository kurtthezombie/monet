<script setup>
import Typed from "typed.js";
import { onMounted, onBeforeUnmount, ref } from "vue";
import birthdayImage from "@/assets/monet-img.jpg";
import musicFile from "@/assets/music2.mp3"; // Use this for assets folder
import { nextTick } from 'vue';
import router from "@/router";

const audio = ref();
const isMuted = ref(false);
const buttonClicked = ref(false);

const typedElement = ref(null); // Reference for the element to attach Typed.js
let typedInstance = null; // Store the Typed.js instance

const toggleMute = () => {
    isMuted.value = !isMuted.value;
    audio.value.muted = isMuted.value;
}

const playMusic = () => {
    if (audio.value) {
        audio.value.play();
    }
};

const pauseMusic = () => {
    if (audio.value) {
        audio.value.pause();
    }
}

const pictureView = () => {
    router.push({ name: 'picture' });
}

const startTypingAndMusic = () => {
    buttonClicked.value = true;

    audio.value.play().then(() => {
        isPlaying.value = true;
    }).catch(err => {
        console.error("Error playing audio:", err);
    });

    // Initialize Typed.js
    nextTick(() => {
        typedInstance = new Typed(typedElement.value, {
            strings: [
                `
      Happy birthday to my favorite human,<br>
      You have been doing <b>amazing</b> lately, and I couldn’t be prouder of you.<br>
      You remained strong despite the hurdles life threw your way,
      staying a caring sister, a good daughter, and the <i>best girlfriend</i> through it all.<br>

      Thank you for being strong and committing to your goal.<br>
      And I know I say this all the time, but thanks for being there when no one is.<br>

      I also want to simply thank you for being <b class="text-green-600">you</b>.<br>
      To me, you are already <span class="text-yellow-600">perfect</span>—just as you are.<br>

      I apologize for not having been at my best lately.<br>
      For times when I let my struggles cloud my behavior.<br>
      For moments when I’m mad or distant, I deeply apologize.<br>

      But today, let’s celebrate you–your strength, your kindness, and your beauty, inside and out.<br>
      I can’t wait to witness the <b>amazing things</b> you’ll be accomplishing in this new chapter.<br>
      You deserve every bit of happiness and success.<br>

      I love you.<br>
      <b>Happy birthday once again.</b>
      `
            ],
            typeSpeed: 0.5, // Typing speed (adjust as needed for realism)
            showCursor: false, // Hide the blinking cursor
            loop: false, // No looping
            startDelay: 500, // Optional: Delay before typing starts (in milliseconds)
        });
    })
}

onBeforeUnmount(() => {
    // Destroy the Typed.js instance to prevent memory leaks
    if (typedInstance) {
        typedInstance.destroy();
    }
});

</script>

<template>
    <div class="w-full mx-auto bg-green-100 min-h-screen flex flex-col">
        <!-- Music Control Section -->
        <div class="music-container flex justify-end py-4">
            <button @click="toggleMute" class="mute-button text-3xl">
                {{ isMuted ? "🔇" : "🔊" }}
            </button>
            <audio ref="audio" :src="musicFile" preload="auto"></audio>
        </div>

        <!-- Main Content Section -->
        <div class="flex-1 flex justify-center items-center w-3/4 mx-auto gap-x-20">
            <button
                v-if="!buttonClicked"
                @click="startTypingAndMusic"
                class="hover:bg-blue-900 bg-blue-700 py-2 px-3 rounded-md text-white"
            >
                ✉️ Open me
            </button>
            <div class="flex-1 text-container text-justify max-w-prose" v-if="buttonClicked">
                <span ref="typedElement" class="mr-4 text-sm"></span>
            </div>
            <div class="flex-1 image-container" v-if="buttonClicked">
                <span><img :src="birthdayImage" alt="Monette" class="fixed-image rounded-3xl"></span>
            </div>
        </div>

        <!-- Footer Section -->
        <div class="py-4 text-center" v-if="buttonClicked" @click="pictureView">
            <button class="hover:bg-gray-800 bg-gray-700 py-2 px-4 text-white rounded">See more...</button>
        </div>
    </div>
</template>


<style scoped>
.fixed-image {
    max-width: 60%;
    /* Set a fixed width or use a suitable size */
    height: 60%;
    /* Maintain aspect ratio */
}

/* Ensure Flexbox Layout */
.text-container,
.image-container {
    flex: 1;
    /* Ensure equal space for text and image */
    text-align: center;
    /* Center-align content */
}

.text-justify {
    text-align: justify;
}
</style>