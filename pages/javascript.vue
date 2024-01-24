<template>
  <div>
    <SubHeading
      class="mt-4 underline text-center text-3xl font-bold leading-9 tracking-tight text-slate-500"
    >
      Closures
    </SubHeading>

    <Feedback />

    <RuleComponent />

    <SubHeading
      class="mt-4 underline text-center text-3xl font-bold leading-9 tracking-tight text-slate-500"
    >
      Prototype
    </SubHeading>

    <h3
      class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-slate-500"
    >
      Task Scheduler
    </h3>
    <div class="m-auto w-1/2 border-2 rounded-lg flex flex-col mb-3">
      <div class="flex flex-col gap-2 justify-center items-center p-3">
        <div>
          <label for="taskName" class="text-slate-600">Task Name:</label>
          <input
            v-model="taskName"
            type="text"
            id="taskName"
            class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
          />

          <label for="dueDate" class="text-slate-600">Due Date:</label>
          <input
            v-model="dueDate"
            type="date"
            id="dueDate"
            class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
          />

          <Button
            class="bg-red-400 rounded flex shadow-sm hover:bg-red-500 justify-center px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm m-auto mt-3 mb-3"
            @click="addTask"
            >Add Task</Button
          >
        </div>
      </div>

      <div class="text-center p-3">
        <SubHeading class="text-slate-600">Task List</SubHeading>
        <ul>
          <li
            v-for="task in tasks"
            :key="task.taskName"
            class="flex justify-around gap-2 items-center"
          >
            {{ task.taskName }} - Due Date: {{ formatDate(task.dueDate) }} -
            Completed: {{ task.completed ? "Yes" : "No" }}
            <Button
              class="border-2 py-1 px-3 rounded-md bg-red-400 text-white font-bold shadow-sm hover:bg-red-500"
              @click="markTaskAsCompleted(task.taskName)"
            >
              Mark as Completed
            </Button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
  layout: "custom",
});

// ! prototype simple example
const animal = {
  eats: true,
};

const rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;

for (const key in rabbit) {
  let isOwn = rabbit.hasOwnProperty(key);
  if (isOwn) {
    console.log(`Our : ${key}`);
  } else {
    console.log(`inherited : ${key}`);
  }
}
// console.log(rabbit);

// ! __proto__ chaining example

// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   __proto__: table,
//   sheet: 1,
//   pillow: 2,
// };

// let pockets = {
//   __proto__: bed,
//   money: 2000,
// };

// console.log(pockets);
// console.log(bed.pen);

import { ref } from "vue";
import { addDays } from "date-fns";

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
