<template>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

::-webkit-scrollbar {
  display: none;
}

</style>
