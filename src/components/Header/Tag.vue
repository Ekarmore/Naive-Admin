<script setup lang="ts">
import { NTag, useMessage } from 'naive-ui'
const message = useMessage()
const route = useRoute()
const router = useRouter()
// const tagItem = computed(() => route.matched)
const listArr = reactive<any>([])
const tagItem = computed(() => {
  return route
})

const tagList = computed(() => {

})

const handleClick = (path: string) => {
  router.push(path)
}
const handleClose = () => {
  message.success(
    'Close',
  )
}
</script>

<template>
  <div class="flex items-center pl-5 pr-5">
    <NTag v-for="item in tagList" :key="item" size="small" :closable="tagList.length > 1" class="mr-2 ml-2" @close="handleClose" @click="handleClick(item[0].path)">
      {{ item[0].meta.title }}
    </NTag>
  </div>
</template>
