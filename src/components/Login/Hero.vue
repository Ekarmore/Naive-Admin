<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex items-center justify-center">
      <div class="">
        <p id="hero-text" class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800">
          Simple <br> Admin
        </p>
      </div>
      <Grou />
    </div>
    <div class=" grid grid-cols-10 w-96 mt-5">
      <div class="col-start-1 col-span-4  font-sans font-bold rounded bg-green-700 hover:bg-green-600 border transition-all cursor-pointer p-1  text-center text-white">
        Get Started
      </div>
      <div class="col-start-6 col-span-4 font-sans font-bold rounded bg-gray-100 hover:bg-gray-50 border transition-all cursor-pointer p-1 text-center text-black">
        Github
      </div>
    </div>
  </div>
</template>

<style>
#hero-text{
font-weight: 900;
}
</style>
