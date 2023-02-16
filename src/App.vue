<script lang="ts" setup></script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <Component :is="Component" />
    </transition>
  </router-view>
</template>
