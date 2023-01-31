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
  <NButton secondary>
    {{ screenState }}
  </NButton>
</template>
