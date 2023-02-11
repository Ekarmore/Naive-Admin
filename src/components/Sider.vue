<script lang="ts" setup>
import { NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'WorkBench',
          },
        },
        { default: () => '工作台' },
      ),
    key: 'work-table',
    icon: useRenderIcon('i-carbon-dashboard'),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Components',
          },
        },
        { default: () => '组件' },
      ),
    key: 'components',
    icon: useRenderIcon('i-carbon-logo-github'),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Link',
          },
        },
        { default: () => '链接' },
      ),
    key: 'link',
    icon: useRenderIcon('i-carbon-logo-github'),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/nested',
        },
        { default: () => '嵌套菜单' },
      ),
    icon: useRenderIcon('i-carbon-logo-github'),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: '/nested/one',

            },
            { default: () => 'One' },
          ),
        key: 'n-1',
        icon: useRenderIcon('i-carbon-logo-github'),
        children: [
          {
            label: () =>
              h(
                RouterLink,
                {
                  to: '/nested/one/two',
                },
                { default: () => 'Two' },
              ),
            key: 'n-2',
            icon: useRenderIcon('i-carbon-logo-github'),
          },
        ],
      },
    ],
    key: 'nesting-route',

  },
  {
    label: '页面',
    key: 'base',
    disabled: false,
    children: [
      {
        label: 'Unocss',
        key: 'uno-css',
      },
    ],
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/404',
        },
        { default: () => '404' },
      ),
    key: '404',
  },
]
const activeKey = ref<string | null>(null)
</script>

<template>
  <div class="h-64px flex justify-center items-center text-3xl ">
    <i class="i-grommet-icons-stack-overflow" />
  </div>
  <NMenu
    v-model:value="activeKey"
    class="mt-10"
    :collapsed-width="48"
    :icon-size="22"
    :collapsed-icon-size="28"
    :options="menuOptions"
    :indent="18"
  />
</template>

<style>

</style>
