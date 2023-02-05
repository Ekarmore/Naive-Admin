<template>
  <main class="h-screen p-10">
    <span class="text-3xl font-bold font-sans">
      如果你需要，路由是可以嵌套的
    </span>

    <RouterView />
  </main>
</template>

<route lang="yaml">
meta:
  {title: nested}
</route>
