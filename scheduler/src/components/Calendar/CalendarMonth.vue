<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  year: number;
  month: number;
  weekDays: string[];
}>()

const SUNDAY_INDEX = 0;
const SATURDAY_INDEX = 6;
const ROWS_PER_MONTH = 5;
const DAYS_IN_WEEK = 7;

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

</script>

<template>
  <div class="grid grid-cols-7 gap-4">
    <div v-for="(day, index) in weekDays" :key="index" class="text-green-300 text-center">
      {{ day }}
    </div>
    <div v-for="day in lastMonthDaysArray" :key="day" class="text-gray-300 text-center">
      {{ day }}
    </div>
    <div v-for="day in currentMonthDaysCount" :key="day" class="text-center">
      {{ day }}
    </div>
    <div v-for="day in nextMonthDaysCount" :key="day" class="text-gray-300 text-center">
      {{ day }}
    </div>
  </div>
</template>
