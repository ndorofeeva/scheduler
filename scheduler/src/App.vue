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
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="48" height="48" />
    <div class="flex">
      <svg-icon v-if="react.darkMode" type="mdi" :path="mdiToggleSwitch" :size="48"
        @click="react.darkMode = !react.darkMode"></svg-icon>
      <svg-icon v-if="!react.darkMode" type="mdi" :path="mdiToggleSwitchOffOutline" :size="48"
        @click="react.darkMode = !react.darkMode"></svg-icon>
      <svg-icon type="mdi" :path="mdiAccountCircle" :size="48"></svg-icon>
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
