<script setup lang="ts">
import {
  NButton,
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
const collapsed = ref(false)
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
</script>

<template>
  <main ref="main" class="h-screen relative">
    <NConfigProvider :theme="theme">
      <NLayout has-sider position="absolute">
        <NLayoutSider
          collapse-mode="width"
          :collapsed-width="80"
          :width="240"
          :collapsed="collapsed"
          bordered
          embedded
        >
          <Sider />
        </NLayoutSider>
        <NLayout>
          <NLayoutHeader bordered style="height:64px">
            <nav class="pr-3 pl-3 h-full grid grid-cols-12 place-content-center">
              <div class="flex  items-center">
                <div class="p-2">
                  <NButton v-show="collapsed" quaternary class="p-2" @click="collapsed = false">
                    <i class="i-grommet-icons-next" />
                  </NButton>
                  <NButton v-show="!collapsed" quaternary class="p-2" @click="collapsed = true">
                    <i class="i-grommet-icons-previous" />
                  </NButton>
                </div>
                <BreadCrumb class="col-start-1" />
              </div>
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
              <RouterView />
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

</style>
