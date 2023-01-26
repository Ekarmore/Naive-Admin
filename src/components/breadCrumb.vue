<script setup lang="ts">
import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui'
const props = defineProps({
  routeInfo: String,
})
</script>

<template>
  <NBreadcrumb>
    <NBreadcrumbItem>
      {{ props.routeInfo }}
    </NBreadcrumbItem>
  </NBreadcrumb>
</template>
