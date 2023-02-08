<script lang="ts" setup>
import { NCard, NSpace } from 'naive-ui'
</script>

<template>
  <main class="p-10">
    <div class="w-full flex justify-center">
      <NCard
        embedded
        :segmented="{
          content: true,
          footer: 'soft',
        }" size="large" vertical title="User"
      >
        <NSpace vertical>
          <NCard class="w-1/2" hoverable embedded>
            <i class="i-carbon-user-filled p-2" />
            <span class="ml-3 font-sans font-bold">
              EarthB0y@outlook.com
            </span>
          </NCard>
        </NSpace>
      </NCard>
    </div>
    <div class="w-full flex justify-center">
      <NCard
        embedded
        size="large" vertical title="Tool" :segmented="{
          content: true,
          footer: 'soft',
        }"
      >
        <NSpace vertical>
          <NCard class="w-1/2" hoverable embedded>
            Fast
          </NCard>
          <NCard class="w-1/2" hoverable embedded>
            Simple
          </NCard>
          <NCard class="w-1/2" hoverable embedded>
            New
          </NCard>
          <NCard class="w-1/2" hoverable embedded>
            Free
          </NCard>
        </NSpace>
      </NCard>
    </div>
  </main>
</template>
