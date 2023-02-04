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
    class: 'i-carbon-logo-github',
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
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="menuOptions"
  />
</template>
