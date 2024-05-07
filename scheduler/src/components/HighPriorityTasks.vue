<script setup lang="ts">
import { TaskPriorities, Status } from '@/models/task';
import type Task from '@/models/task';
import { computed } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCircleOutline, mdiCheckCircle } from '@mdi/js';

const props = defineProps<{
  tasks?: Task[];
}>()

const tasks = props.tasks;

const highPriorityTasks = computed(() => 
  tasks?.filter(
      task => task.priority === TaskPriorities.High || task.priority === TaskPriorities.Critical)
  );

const notCompleted = computed(() => highPriorityTasks.value?.filter(task => task.status !== Status.Done));
const completed = computed(() => highPriorityTasks.value?.filter(task => task.status === Status.Done));

const completeTask = (taskId: number) => {
  const task = tasks?.find(task => task.id === taskId);
  if(!task) {
    console.error(`Cannot find task with id ${taskId}`);
    return;
  };
  task.status = Status.Done;
  //TODO: update state in db, add notification & undo
}
</script>

<template>
  <div class="actions">
    <p class="pb-3"> High priority tasks </p>
    <ul v-if="notCompleted">
      <li v-for="task in notCompleted" :key="task.id" class="flex items-center">
        <svg-icon type="mdi" :path="mdiCircleOutline" :size="18" @click="completeTask(task.id)" class="cursor-pointer pr-1" />
        <span>{{ task.title }}</span>
      </li>
    </ul>
    <ul v-if="completed" class="pt-2">
      <li v-for="task in completed" :key="task.id" class="flex items-center text-gray-300">
        <svg-icon type="mdi" :path="mdiCheckCircle" :size="18" class="pr-1" />
        <span>{{ task.title }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
