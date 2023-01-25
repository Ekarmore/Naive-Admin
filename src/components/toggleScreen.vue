<script lang="ts" setup>
import { NButton } from 'naive-ui'
const props = defineProps({
  isFullScreen: Boolean,
})
const screenState = computed(() => {
  return props.isFullScreen ? '窗口' : '全屏'
})
</script>

<template>
  <!-- <i class="i-carbon-fit-to-screen mr-2 text-lg opacity-80 hover:opacity-100 transition-all cursor-pointer duration-100" /> -->
  <NButton secondary>
    {{ screenState }}
  </NButton>
</template>
