<script setup lang="ts">
import {
  NConfigProvider,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider,
} from 'naive-ui'
import { storeToRefs } from 'pinia'
const store = useAppStore()
const {
  switchCollapsed,
  theme,
} = storeToRefs(store)
</script>

<template>
  <main ref="main" class="h-screen relative">
    <NConfigProvider :theme="theme">
      <NLayout has-sider position="absolute">
        <NLayoutSider
          collapse-mode="width"
          :collapsed-width="80"
          :width="240"
          :collapsed="switchCollapsed"
          bordered
          embedded
        >
          <Sider />
        </NLayoutSider>
        <NLayout>
          <NLayoutHeader bordered style="height:90px">
            <nav class=" h-full flex flex-col relative">
              <div class="flex items-center h-45 border-b">
                <div class="flex items-center justify-center">
                  <toggleCollapsed />
                </div>
                <div class="md:flex h-full items-center justify-between absolute right-5 hidden">
                  <Github />
                  <ToggleScreen />
                  <toggleDarkTheme />
                  <userInfo />
                </div>
                <dragMenu class="md:hidden h-full items-center justify-between absolute right-5 flex" />
              </div>
              <div class=" h-45 flex items-center">
                <Tag />
              </div>
            </nav>
          </NLayoutHeader>
          <NLayoutContent :native-scrollbar="false" position="absolute" style="top:90px">
            <div>
              <router-view v-slot="{ Component }">
                <transition name="globalAnimate">
                  <component :is="Component" />
                </transition>
              </router-view>
            </div>
            <NLayoutFooter>
              <DefaultFooter />
            </NLayoutFooter>
          </NLayoutContent>
        </NLayout>
      </NLayout>
    </NConfigProvider>
  </main>
</template>

<style>
.globalAnimate-enter-active,
.globalAnimate-leave-active {
  @apply  opacity-100 translate-x-0 duration-700 ease-in-out;
}

.globalAnimate-enter-from,
.globalAnimate-leave-from {
  @apply  opacity-0 translate-x-5 duration-700 ease-in-out;
}
</style>
