<script setup lang="ts">
const emit = defineEmits(['getStarted'])
const getStartedTrigger = () => {
  emit('getStarted')
}
</script>

<template>
  <div class="h-screen flex flex-col md:flex-row justify-center items-center">
    <div class="mr-40">
      <p id="hero-text" class="text-56px font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800">
        Simple Admin
      </p>
      <p id="hero-text" class="text-56px w-128 font-bold text-dark-200">
        Simple fast
      </p>
      <div class=" grid grid-cols-10 w-96 mt-5">
        <div class="col-start-1 col-span-4  font-sans font-bold rounded bg-green-700 hover:bg-green-600 border transition-all cursor-pointer p-1  text-center text-white" @click="getStartedTrigger">
          Get Started
        </div>
        <div class="col-start-6 col-span-4 font-sans font-bold rounded bg-gray-100 hover:bg-gray-50 border transition-all cursor-pointer p-1 text-center text-black">
          Github
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center">
      <Grou class="scale-150" />
    </div>
  </div>
</template>

<style>
#hero-text{
font-weight: 900;
}
</style>
