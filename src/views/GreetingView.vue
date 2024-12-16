<script setup>
import confetti from "canvas-confetti";
import { onMounted, ref } from "vue";
import router from "@/router";

const showThen = ref(false);

var count = 200;
var defaults = {
    origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
    confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
    });
}

fire(0.25, {
    spread: 26,
    startVelocity: 55,
});
fire(0.2, {
    spread: 60,
});
fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
});
fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
});
fire(0.1, {
    spread: 120,
    startVelocity: 45,
});

onMounted(() => {
    setTimeout(() => {
        showThen.value = true;
    }, 3000)
})

const next = () => {
    router.push({ name: 'letter' });
}

</script>

<template>
    <div class="flex flex-col justify-center items-center h-screen">
        <p class="text-5xl">Happy Birthday, Monet!</p>
        <div class="inline-flex mt-10" v-if="showThen">
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded" @click="next">
                Thank you
            </button>
        </div>
    </div>
</template>