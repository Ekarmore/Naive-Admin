<script setup lang="ts">
import { NButton, NCard, NSpace } from 'naive-ui'
</script>

<template>
  <div class="h-screen">
    <NCard class="w-1/2">
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
    <NCard class="w-1/2">
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
</template>

<route lang="yaml">
meta:
  layout: default
</route>
