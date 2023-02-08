<script lang="ts" setup>
import { NButton, NPopover } from 'naive-ui'
const user = ref('User')
</script>

<template>
  <div class="m-1">
    <NPopover placement="bottom" trigger="hover" :show-arrow="false">
      <template #trigger>
        <NButton quaternary>
          <i class="i-carbon-user-avatar-filled" />
          <span class="ml-2">
            {{ user }}
          </span>
        </NButton>
      </template>
      <NButton quaternary>
        退出登录
      </NButton>
    </NPopover>
  </div>
</template>
