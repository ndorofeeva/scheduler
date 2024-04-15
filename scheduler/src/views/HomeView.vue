<script setup lang="ts">
import { reactive } from 'vue';
import CalendarMonth from '../components/Calendar/CalendarMonth.vue'
const date = new Date();
const currentMonth = date.getMonth();
const react = reactive({
  month: currentMonth
})
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
</script>

<template>
  <main>
    <div class="grid dark">
      <div class="left-sidebar border border-indigo-600 p-5">
        Left
      </div>
      <div class="content border border-indigo-600 p-5">
        <div class="flex justify-between">
          <div @click="react.month = react.month - 1" class="text-pink-300 cursor-pointer"> Prev </div>
          <div class="text-pink-600">{{ months[react.month] }}</div>
          <div @click="react.month = react.month + 1" class="text-pink-300 cursor-pointer"> Next </div>
        </div>
        <div class="week-days">
          <div v-for="(day, index) in weekDays" :key="index" class="text-green-300 text-center">
            {{ day }}
          </div>
        </div>
        <CalendarMonth :year="date.getFullYear()" :month="react.month" />
      </div>
      <div class="right-sidebar border border-indigo-600 p-5">
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
  }

  .right-sidebar {
    grid-area: right-sidebar;
  }
}

.week-days {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(7, 1fr);
}
</style>
