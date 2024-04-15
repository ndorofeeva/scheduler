<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  year: number;
  month: number;
}>()

const columnNumber = 7;

const firstDayOfMonth = computed(() => new Date(props.year, props.month, 1).getDay());
const lastDayOfMonth = computed(() => new Date(props.year, props.month + 1, 0).getDate());
const lastDayOfPrevMonth = computed(() => new Date(props.year, props.month, 0).getDate());

const rowNumber = computed(() =>
  ((firstDayOfMonth.value === 0 && (lastDayOfMonth.value === 31 || lastDayOfMonth.value === 30)) ||
    (firstDayOfMonth.value === 6 && lastDayOfMonth.value === 31)) ? 6 : 5);

const allDaysCount = computed(() => rowNumber.value * columnNumber);

let lastMonthDaysCount = computed(() => firstDayOfMonth.value === 0 ? 6 : firstDayOfMonth.value - 1);
const daysLastMonth = computed(() => {
  let days = [];
  for (var i = lastMonthDaysCount.value - 1; i >= 0; i--) {
    days.push(lastDayOfPrevMonth.value - i);
  }
  return days;
});


const nextMonthDaysCount = computed(() => allDaysCount.value - lastDayOfMonth.value - lastMonthDaysCount.value);
</script>

<template>
  <div class="calendar">
    <div v-for="day in daysLastMonth" :key="day" class="text-gray-300 text-center">
      {{ day }}
    </div>
    <div v-for="day in lastDayOfMonth" :key="day" class="text-center">
      {{ day }}
    </div>
    <div v-for="day in nextMonthDaysCount" :key="day" class="text-gray-300 text-center">
      {{ day }}
    </div>
  </div>
</template>

<style scoped>
.calendar {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(7, 1fr);
}
</style>
