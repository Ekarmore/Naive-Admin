<script setup lang="ts">
import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui'
const route = useRoute()
const router = useRouter()

const List = computed(() => {
  return route.matched.filter(item => !!item.meta?.title)
})

const handleBreadClick = (path: string) => {
  if (path === route.path)
    return
  router.push(path)
}
</script>

<template>
  <NBreadcrumb>
    <NBreadcrumbItem v-for="item in List" :key="item.path" @click="handleBreadClick(item.path)">
      {{ item.meta.title }}
    </NBreadcrumbItem>
  </NBreadcrumb>
</template>
