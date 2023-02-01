<script lang="ts" setup>
import { NCard, NForm, NFormItemRow, NInput } from 'naive-ui'
const scrollWrapper = ref<HTMLDivElement | null>(null)
const getStarted = () => {
  scrollWrapper.value?.scrollBy(0, 10)
}
</script>

<template>
  <div ref="scrollWrapper" class="overflow-scroll h-screen snap-y snap-mandatory scroll-smooth">
    <section class="h-screen p-10 flex justify-center items-center snap-center">
      <Hero class="col-start-3 col-span-2 row-start-2 row-span-2" @get-started="getStarted" />
    </section>
    <section class="h-screen p-10 flex justify-center items-center snap-center">
      <NCard class="w-1/3">
        <div class="text-2xl font-bold mb-5">
          登录
        </div>
        <NForm>
          <NFormItemRow label="用户名">
            <NInput />
          </NFormItemRow>
          <NFormItemRow label="密码">
            <NInput />
          </NFormItemRow>
        </NForm>
        <div class="bg-green-600 hover:bg-green-500 transition-all text-center p-1 border rounded text-white mt-2">
          登录
        </div>
      </NCard>
    </section>
  </div>
</template>

<route lang="yaml">
meta:
  layout: login
</route>
