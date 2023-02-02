<script setup lang="ts">
import { NButton } from 'naive-ui'
const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <div h="screen" text="4xl" font="bold" class="flex flex-col items-center mt-20">
    <div class="h-12 flex items-center">
      {{ t('not-found') }}
    </div>
    <div class="mt-2">
      <NButton @click="router.back()">
        返回
      </NButton>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  title: 404
</route>
