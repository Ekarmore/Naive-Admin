<script setup lang="ts">
import { NButton, NCard, NSpace } from 'naive-ui'
</script>

<template>
  <div class="h-screen p-10 grid grid-cols-8 gap-10">
    <div class="col-start-1 col-span-3">
      <NCard embedded>
        <NSpace>
          <NButton native-focus-behavior strong secondary>
            Default
          </NButton>
          <NButton strong bordered secondary type="tertiary">
            Tertiary
          </NButton>
          <NButton strong secondary type="primary">
            Primary
          </NButton>
          <NButton strong secondary type="info">
            Info
          </NButton>
          <NButton strong secondary type="success">
            Success
          </NButton>
          <NButton strong secondary type="warning">
            Warning
          </NButton>
          <NButton strong secondary type="error">
            Error
          </NButton>
          <NButton strong secondary round>
            Default
          </NButton>
          <NButton strong secondary round type="primary">
            Primary
          </NButton>
          <NButton strong secondary round type="info">
            Info
          </NButton>
          <NButton strong secondary round type="success">
            Success
          </NButton>
          <NButton strong secondary round type="warning">
            Warning
          </NButton>
          <NButton strong secondary round type="error">
            Error
          </NButton>
          <NButton strong secondary circle>
            <template #icon>
              <n-icon><cash-icon /></n-icon>
            </template>
          </NButton>
          <NButton strong secondary circle type="primary">
            <template #icon>
              <n-icon><cash-icon /></n-icon>
            </template>
          </NButton>
          <NButton strong secondary circle type="info">
            <template #icon>
              <n-icon><cash-icon /></n-icon>
            </template>
          </NButton>
          <NButton strong secondary circle type="success">
            <template #icon>
              <n-icon><cash-icon /></n-icon>
            </template>
          </NButton>
          <NButton strong secondary circle type="warning">
            <template #icon>
              <n-icon><cash-icon /></n-icon>
            </template>
          </NButton>
          <NButton strong secondary circle type="error">
            <template #icon>
              <n-icon><cash-icon /></n-icon>
            </template>
          </NButton>
        </NSpace>
      </NCard>
    </div>
    <div class="col-start-4 col-span-2">
      <NCard embedded>
        <NSpace>
          <NButton class="">
            Default
          </NButton>
          <NButton type="tertiary">
            Tertiary
          </NButton>
          <NButton type="primary">
            Primary
          </NButton>
          <NButton type="info">
            Info
          </NButton>
          <NButton type="success">
            Success
          </NButton>
          <NButton type="warning">
            Warning
          </NButton>
          <NButton type="error">
            Error
          </NButton>
        </NSpace>
      </NCard>
    </div>
    <div class="col-start-6 col-span-2">
      <NCard embedded>
        <NSpace>
          <NButton class="">
            Default
          </NButton>
          <NButton type="tertiary">
            Tertiary
          </NButton>
          <NButton type="primary">
            Primary
          </NButton>
          <NButton type="info">
            Info
          </NButton>
          <NButton type="success">
            Success
          </NButton>
          <NButton type="warning">
            Warning
          </NButton>
          <NButton type="error">
            Error
          </NButton>
        </NSpace>
      </NCard>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  {title: 组件}
  </route>
