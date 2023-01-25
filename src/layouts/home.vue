<script setup lang="ts">
import {
  NConfigProvider,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider,
  darkTheme,
} from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
const theme = ref<GlobalTheme | null>(null)
theme.value = darkTheme
const collapsed = ref(false)
</script>

<template>
  <main class="h-screen relative">
    <NConfigProvider :theme="theme">
      <NLayout has-sider position="absolute">
        <NLayoutSider
          collapse-mode="width"
          :collapsed-width="80"
          :width="240"
          show-trigger
          bordered
          @collapse="collapsed = true"
          @expand="collapsed = false"
        >
          <MySider />
        </NLayoutSider>
        <NLayout>
          <NLayoutHeader bordered style="height:64px">
            <nav class="h-full flex items-center p-1">
              <Header />
            </nav>
          </NLayoutHeader>
          <NLayoutContent :native-scrollbar="false" position="absolute" style="top:64px">
            <div>
              <RouterView />
            </div>
            <NLayoutFooter class="h-128px">
              this is a footer
            </NLayoutFooter>
          </NLayoutContent>
        </NLayout>
      </NLayout>
    </NConfigProvider>
  </main>
</template>

<style>

</style>
