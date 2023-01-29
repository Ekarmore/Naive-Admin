<script setup lang="ts">
import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui'
const route = useRoute()
</script>

<template>
  <NBreadcrumb>
    <NBreadcrumbItem>
      {{ route.name }}
    </NBreadcrumbItem>
  </NBreadcrumb>
</template>
