<script setup lang="ts">
import { NMessageProvider } from 'naive-ui'
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Ekar admin',
  meta: [
    { name: 'description', content: 'Simple Admin Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <NMessageProvider>
    <RouterView />
  </NMessageProvider>
</template>

<style>
::-webkit-scrollbar{
  display: none;
}
</style>
