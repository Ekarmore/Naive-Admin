<script lang="ts" setup>
import { NButton } from 'naive-ui'
const props = defineProps({
  themeInfo: String,
})
</script>

<template>
  <NButton quaternary class="w-14">
    {{ props.themeInfo }}
  </NButton>
</template>
