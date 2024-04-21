<script setup lang="ts">
import { computed } from 'vue';
import type Task from '@/models/task';
import moment from 'moment'

const props = defineProps<{
  year: number;
  month: number;
  weekDays: string[];
  tasks?: Task[];
}>()

const SUNDAY_INDEX = 0;
const SATURDAY_INDEX = 6;
const ROWS_PER_MONTH = 5;
const DAYS_IN_WEEK = 7;

const today = new Date().getDate();
const currentMonth = new Date().getMonth();
const columnNumber = DAYS_IN_WEEK;
const firstDayOfMonthIndex = computed(() => new Date(props.year, props.month, 1).getDay());
const currentMonthDaysCount = computed(() => new Date(props.year, props.month + 1, 0).getDate());

const lastMonthDaysCount = computed(() =>
  firstDayOfMonthIndex.value === SUNDAY_INDEX ? DAYS_IN_WEEK - 1 : firstDayOfMonthIndex.value - 1);

function* genLastMonthDays(lastDayOfPrevMonth: number) {
  for (var i = lastMonthDaysCount.value - 1; i >= 0; i--) {
    yield lastDayOfPrevMonth - i;
  }
}
const lastMonthDaysArray = computed(() => {
  const lastDayOfPrevMonth = new Date(props.year, props.month, 0).getDate();
  return genLastMonthDays(lastDayOfPrevMonth);
});

const nextMonthDaysCount = computed(() => {
  const isExtraWeekNeeded =
    (firstDayOfMonthIndex.value === SUNDAY_INDEX &&
      (currentMonthDaysCount.value === 31 || currentMonthDaysCount.value === 30)
    ) ||
    (firstDayOfMonthIndex.value === SATURDAY_INDEX && currentMonthDaysCount.value === 31);
  const rowNumber = isExtraWeekNeeded ? ROWS_PER_MONTH + 1 : ROWS_PER_MONTH;
  return rowNumber * columnNumber - currentMonthDaysCount.value - lastMonthDaysCount.value
});

const getTasksByDay = (day: number) => {
  if(!props.tasks) return;
  const month = props.month < 10 ? `0${props.month + 1}` : props.month + 1;
  return props.tasks.filter((task) => {
    if (!task.startTime) return;
    const startDate = moment(task.startTime).format('YYYY-MM-DD'); //TODO: to settings
    return startDate === `${props.year}-${month}-${day}`;
  });
}

</script>

<template>
  <div class="grid grid-cols-7 gap-4">
    <div v-for="(day, index) in weekDays" :key="index" class="text-green-300 text-center">
      {{ day }}
    </div>
    <div v-for="day in lastMonthDaysArray" :key="day" class="text-gray-300 text-center lastMonthDays">
      {{ day }}
    </div>
    <div v-for="day in currentMonthDaysCount" :key="day" class="text-center currentMonthDays">
      <span :class="[{ 'bg-green-200': day === today && month === currentMonth }, 'p-2 rounded-full']">{{ day }}</span>
      <div v-for="(task, index) in getTasksByDay(day)" :key="index"> 
        {{ task.title }} 
      </div>
    </div>
    <div v-for="day in nextMonthDaysCount" :key="day" class="text-gray-300 text-center nextMonthDays">
      {{ day }}
    </div>
  </div>
</template>
