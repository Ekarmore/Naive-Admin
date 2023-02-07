<script lang="ts" setup>
import { NButton, NPopover } from 'naive-ui'
</script>

<template>
  <div>
    <NPopover trigger="hover" :show-arrow="false">
      <template #trigger>
        <NButton quaternary>
          菜单
        </NButton>
      </template>
      <toggleDarkTheme />
      <Github />
      <ToggleScreen />
    </NPopover>
  </div>
</template>
