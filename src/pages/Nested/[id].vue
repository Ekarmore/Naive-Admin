<script setup lang="ts">
const route = useRoute()
const id = route.params.id
</script>

<template>
  <section class="h-screen p-10">
    <span class="text-3xl font-bold font-sans">
      {{ id }}
    </span>
  </section>
</template>
