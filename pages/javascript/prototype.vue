<template>
  <JavaScriptContainer>
    <SubNavbar :links="jsNavLinks" />

    <CommonSubHeading
      class="mt-4 underline text-center text-3xl font-bold leading-9 tracking-tight text-slate-500"
    >
      Prototype
    </CommonSubHeading>

    <h3
      class="mt-4 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-red-500"
    >
      Task Scheduler
    </h3>
    <div
      class="m-auto w-4/5 lg:w-1/2 md:w-1/2 sm:w-4/5 border-2 rounded-lg flex flex-col mb-3"
    >
      <div class="flex flex-col gap-2 justify-center items-center p-3">
        <div>
          <label for="taskName" class="text-slate-600 dark:text-slate-100"
            >Task Name:</label
          >
          <input
            v-model="taskName"
            type="text"
            id="taskName"
            class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
          />

          <label for="dueDate" class="text-slate-600 dark:text-slate-100"
            >Due Date:</label
          >
          <input
            v-model="dueDate"
            type="date"
            id="dueDate"
            class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
          />

          <CommonButton
            class="bg-red-400 rounded flex hover:bg-red-500 justify-center px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm m-auto mt-3 mb-3"
            @click="addTask"
            >Add Task</CommonButton
          >
        </div>
      </div>

      <div class="text-center p-3 w-full">
        <CommonSubHeading class="text-slate-600 dark:text-slate-100"
          >Task List</CommonSubHeading
        >
        <ul>
          <li
            v-for="task in tasks"
            :key="task.taskName"
            class="flex justify-between gap-2 items-center dark:text-slate-100"
          >
            <div>
              {{ task.taskName }}
            </div>

            <div>- Due Date: {{ formatDate(task.dueDate) }} -</div>
            <div>
              Completed:
              {{ task.completed ? "Yes" : "No" }}
            </div>
            <CommonButton
              class="border-2 py-1 px-3 rounded-md bg-red-400 text-white font-bold shadow-sm hover:bg-red-500"
              @click="markTaskAsCompleted(task.taskName)"
            >
              Mark as Completed
            </CommonButton>
          </li>
        </ul>
      </div>
    </div>
  </JavaScriptContainer>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
  layout: "custom",
});

import { ref } from "vue";
import { jsNavLinks } from "~/data/common.json";
// import { addDays } from "date-fns";

const tasks = ref([]);
const taskName = ref("");
const dueDate = ref("");

const addTask = () => {
  if (taskName.value && dueDate.value) {
    tasks.value.push({
      taskName: taskName.value,
      dueDate: new Date(dueDate.value),
      completed: false,
    });
    taskName.value = "";
    dueDate.value = "";
  }
};

const markTaskAsCompleted = (taskName) => {
  const task = tasks.value.find((task) => task.taskName === taskName);
  if (task) {
    task.completed = true;
  }
};

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US").format(date);
};
</script>
