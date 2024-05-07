<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountCircle, mdiToggleSwitch, mdiToggleSwitchOffOutline } from '@mdi/js';
import { reactive } from 'vue';

const react = reactive(
  { darkMode: false }
);
</script>

<template>
  <header class="py-2">
    <img alt="Vue logo" class="logo rounded-full" src="/logo_temp.png" width="48" height="48" />
    <div class="flex">
      <svg-icon v-if="react.darkMode" type="mdi" :path="mdiToggleSwitch" :size="48"
        @click="react.darkMode = !react.darkMode" color="lightgray"></svg-icon>
      <svg-icon v-if="!react.darkMode" type="mdi" :path="mdiToggleSwitchOffOutline" :size="48"
        @click="react.darkMode = !react.darkMode" color="lightgray"></svg-icon>
      <svg-icon type="mdi" :path="mdiAccountCircle" :size="48" color="lightgray"></svg-icon>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
}
</style>
