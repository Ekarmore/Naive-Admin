<script setup lang="ts">
import { NTag } from 'naive-ui'
const route = useRoute()
const router = useRouter()
// const tagItem = computed(() => route.matched)
const listArr = reactive<any>([])
const tagItem = computed(() => {
  return route.matched.filter(item => !!item.meta?.title)
})

const tagList = computed(() => {
  if (!listArr.includes(tagItem.value))
    listArr.push(tagItem.value)
  return listArr
})

const handleClick = (path: string) => {
  router.push(path)
}
const handleClose = () => {
  console.log(tagList.value)
}
</script>

<template>
  <div class="flex items-center pl-5 pr-5">
    <NTag v-for="item in tagList" :key="item" size="small" :closable="tagList.length > 1" class="mr-2 ml-2" @close="handleClose" @click="handleClick(item)">
      {{ item[0].meta.title }}
    </NTag>
  </div>
</template>
