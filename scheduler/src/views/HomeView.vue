<script setup lang="ts">
import { reactive } from 'vue';
import CalendarMonth from '../components/Calendar/CalendarMonth.vue'

const FIRST_MONTH_INDEX = 0;
const LAST_MONTH_INDEX = 11;
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = new Date();
const react = reactive({
  month: date.getMonth(),
  year: date.getFullYear()
})

const calculateMonth = (newMonthIndex: number) => {
  if (newMonthIndex < FIRST_MONTH_INDEX) {
    react.month = LAST_MONTH_INDEX;
    react.year--;
    return;
  }
  if (newMonthIndex > LAST_MONTH_INDEX) {
    react.month = FIRST_MONTH_INDEX;
    react.year++;
    return;
  }
  react.month = newMonthIndex;
}
</script>

<template>
  <main>
    <div class="grid gap-4 grid-cols-[1fr_3fr_1fr]">
      <div class="left-sidebar border border-indigo-600 p-5">
        Left
      </div>
      <div class="content border border-indigo-600 p-5">
        <div class="flex justify-between">
          <div @click="calculateMonth(react.month - 1)" class="text-pink-300 cursor-pointer" data-cy="prev-month"> Prev
          </div>
          <div class="text-pink-600">{{ months[react.month] }} {{ react.year }}</div>
          <div @click="calculateMonth(react.month + 1)" class="text-pink-300 cursor-pointer" data-cy="next-month"> Next
          </div>
        </div>
        <CalendarMonth :year="react.year" :month="react.month" :weekDays="weekDays" />
      </div>
      <div class="right-sidebar border border-indigo-600 p-5">
        Right
      </div>
    </div>
  </main>
</template>
