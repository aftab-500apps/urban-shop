<template>
  <JavaScriptContainer>
    <SubNavbar :links="jsNavLinks" />

    <CommonSubHeading
      class="mt-4 underline text-center text-3xl font-bold leading-9 tracking-tight text-slate-500"
      >Memory management</CommonSubHeading
    >

    <CommonSubHeading
      class="mt-10 text-center text-2xl font-500 leading-9 tracking-tight text-slate-600"
    >
      Reference to heap object
    </CommonSubHeading>

    <div class="flex justify-center p-3 gap-3 dark:text-slate-100">
      <div
        :class="`box_1 w-${box_1.width} h-${box_1.width} bg-${box_1.color}-300 border-2 border-red-200 rounded flex flex-col gap-2 justify-center items-center`"
      >
        box 1
      </div>
      <div
        :class="`box_2 w-${box_2.width} h-${box_2.width} bg-${box_2.color}-300  border-2 border-red-200 rounded flex flex-col gap-2 justify-center items-center`"
      >
        box 2
        <input
          type="number"
          class="text-center w-12 border-2 text-black"
          placeholder="enter width"
          v-model="query_num"
        />
        <CommonButton
          class="flex w-24 justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
          @click="handleChange"
          >Change</CommonButton
        >
      </div>
    </div>

    <ol
      class="flex flex-col justify-center p-5 list-decimal gap-3 ml-5 dark:text-slate-100"
    >
      <li>box 2 is a reference to box 1 which is created with width.</li>
      <li>
        After assigning box 2 variable to box 1 it creates a reference for box 2
        with actual box 1 as an object in heap.
      </li>
    </ol>
  </JavaScriptContainer>
</template>

<script setup>
import { jsNavLinks } from "~/data/common.json";
const query_num = ref(32);

definePageMeta({
  middleware: "auth",
  layout: "custom",
});

let box_1 = {
  width: query_num.value,
  color: "red",
};

let box_2 = reactive(box_1);

const handleChange = () => {
  box_2.color = "blue";
  box_2.width = query_num.value;
};
</script>
