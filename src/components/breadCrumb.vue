<script setup lang="ts">
import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui'
const route = useRoute()

const pathList = computed(() => {
  return route.path.slice(1).split('/')
})
const List = computed(() => {
  return route.matched
})
</script>

<template>
  <NBreadcrumb>
    <NBreadcrumbItem v-for="item in pathList">
      {{ item }}
    </NBreadcrumbItem>
  </NBreadcrumb>
</template>
