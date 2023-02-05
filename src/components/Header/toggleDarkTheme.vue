<script lang="ts" setup>
import { NButton } from 'naive-ui'
import { storeToRefs } from 'pinia'
const store = useAppStore()
const {
  themeInfo,
} = storeToRefs(store)
</script>

<template>
  <NButton quaternary class="w-14" @click="store.toggleTheme">
    {{ themeInfo }}
  </NButton>
</template>
