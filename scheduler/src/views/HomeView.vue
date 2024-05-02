<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import taskService from '@/services/task-service';
import type ResponseData from '@/services/types';
import type Calendar from '@/models/calendar'
import CalendarMonth from '../components/Calendar/CalendarMonth.vue'

const FIRST_MONTH_INDEX = 0;
const LAST_MONTH_INDEX = 11;
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = new Date();

const react: Calendar = reactive({
  month: date.getMonth(),
  year: date.getFullYear(),
  tasks: [],
})

onMounted(() => {
  taskService.getAll().then((responseData: ResponseData) => {
    react.tasks.push(...responseData.data);
  });
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
  <main class="grow">
    <div class="grid grid-cols-[1fr_3fr_1fr] h-full">
      <div class="left-sidebar border border-gray-200 p-5">
        Left
      </div>
      <div class="content border border-gray-200 flex flex-col">
        <div class="flex justify-between p-5">
          <div @click="calculateMonth(react.month - 1)" class="cursor-pointer" data-cy="prev-month"> Prev
          </div>
          <div class="font-black">{{ months[react.month] }} {{ react.year }}</div>
          <div @click="calculateMonth(react.month + 1)" class="cursor-pointer" data-cy="next-month"> Next
          </div>
        </div>
        <CalendarMonth :year="react.year" :month="react.month" :weekDays="weekDays" :tasks="react.tasks" />
      </div>
      <div class="right-sidebar border border-grsay-200 p-5">
        Right
      </div>
    </div>
  </main>
</template>
