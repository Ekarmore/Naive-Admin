<script setup lang="ts">
import { NButton } from 'naive-ui'
import { storeToRefs } from 'pinia'
const store = useAppStore()
const { switchCollapsed } = storeToRefs(store)
</script>

<template>
  <div class="flex  items-center">
    <div class="p-2">
      <NButton v-show="switchCollapsed" quaternary class="p-2" @click="store.toggleCollapsed">
        <i class="i-grommet-icons-next" />
      </NButton>
      <NButton v-show="!switchCollapsed" quaternary class="p-2" @click="store.toggleCollapsed">
        <i class="i-grommet-icons-previous" />
      </NButton>
    </div>
    <BreadCrumb class="col-start-1" />
  </div>
</template>
