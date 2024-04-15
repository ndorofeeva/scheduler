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
    <div class="grid gap-4 grid-cols-[1fr_3fr_1fr]">
      <div class="left-sidebar border border-indigo-600 p-5">
        Left
      </div>
      <div class="content border border-indigo-600 p-5">
        <div class="flex justify-between">
          <div @click="react.month = react.month - 1" class="text-pink-300 cursor-pointer"> Prev </div>
          <div class="text-pink-600">{{ months[react.month] }}</div>
          <div @click="react.month = react.month + 1" class="text-pink-300 cursor-pointer"> Next </div>
        </div>
        <div class="grid grid-cols-7 gap-4">
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
