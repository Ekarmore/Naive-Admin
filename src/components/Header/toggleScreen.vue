<script lang="ts" setup>
import { NButton } from 'naive-ui'
// const props = defineProps({
//   isFullScreen: Boolean,
// })
const { isFullscreen, toggle } = useFullscreen()
const fullScreen = () => {
  toggle()
}
const screenState = computed(() => {
  return isFullscreen.value ? '窗口' : '全屏'
})
</script>

<template>
  <NButton quaternary @click="fullScreen">
    {{ screenState }}
  </NButton>
</template>
