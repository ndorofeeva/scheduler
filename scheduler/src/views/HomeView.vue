<script setup lang="ts">
</script>

<template>
  <main>
    <div class="grid dark">
      <div class="left-sidebar dark:bg-black">
        Left
      </div>
      <div class="content">
        Center
      </div>
      <div class="right-sidebar">
        Right
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 20% 60% 20%;
  grid-template-areas: "left-sidebar content right-sidebar";

  .left-sidebar {
    grid-area: left-sidebar;
    background-color: blueviolet;
  }

  .right-sidebar {
    grid-area: right-sidebar;
    background-color: aquamarine;
  }

  .content {
    background-color: aqua;
  }
}
</style>
