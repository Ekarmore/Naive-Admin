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
import { storeToRefs } from 'pinia'
const theme = ref<GlobalTheme | null>(null)
const main = ref<HTMLDivElement | null>(null)
const themeInfo = ref('浅色')
const { isFullscreen, toggle } = useFullscreen(main)
const toggleTheme = () => {
  theme.value = (theme.value === null) ? darkTheme : null
  themeInfo.value = (theme.value === null) ? '浅色' : '深色'
}
const fullScreen = () => {
  toggle()
}
const store = useAppStore()
const { switchCollapsed } = storeToRefs(store)
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
          <NLayoutHeader bordered style="height:64px">
            <nav class="pr-3 pl-3 h-full grid grid-cols-12 place-content-center">
              <toggleCollapsed />
              <div class="flex justify-center items-center col-start-11">
                <Github class="m-1" />
                <ToggleScreen :is-full-screen="isFullscreen" class="m-1" @click="fullScreen" />
                <toggleDarkTheme class="m-1" :theme-info="themeInfo" @click="toggleTheme" />
                <userInfo class="m-1" />
              </div>
            </nav>
          </NLayoutHeader>
          <NLayoutContent :native-scrollbar="false" position="absolute" style="top:64px">
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
