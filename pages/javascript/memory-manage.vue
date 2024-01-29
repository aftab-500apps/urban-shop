<!-- <template>
  <SubNavbar :links="jsNavLinks" />

  <Heading>Memory management</Heading>

  <SubHeading
    class="mt-10 text-center text-2xl font-500 leading-9 tracking-tight text-slate-600"
  >
    Reference to heap object
  </SubHeading>

  <div class="flex justify-center p-3 gap-3">
    <div
      :class="`w-40 bg-${color_bg}-700 text-yellow font-bold h-40 border-2 border-red-200 rounded flex flex-col gap-2 justify-center items-center`"
    >
      box 1
    </div>
    <div
      :class="`w-40 bg-${color_bg}-700 text-yellow font-bold h-40 border-2 border-red-200 rounded flex flex-col gap-2 justify-center items-center`"
    >
      box 2
      <input
        type="text"
        class="text-center w-24 border-2 text-black"
        v-model="temp"
      />

      <button
        class="bg-red-200 text-black p-2 rounded border-2 border-black"
        @click="handleChange"
      >
        Change
      </button>
    </div>
  </div>
</template> -->

<!-- <script setup>
import { ref } from "vue";
import { jsNavLinks } from "~/data/common.json";
// const color_bg = ref("red");
// const temp = ref("blue");

definePageMeta({
  middleware: "auth",
  layout: "custom",
});

// const box_1 = ref({
// color: color_bg.value,
// });

// const box_3 = {

// }

// const box_1 = ref({ color: color_bg.value });

// const box_2 = box_1;

// const handleChange = () => {
//   // console.log("before", box_1.value.color, box_2.value.color);

//   // box_1.value.color = color_bg.value;
//   console.log(color_bg.value);
//   color_bg.value = temp.value;
//   console.log(color_bg.value);

//   // console.log("after", box_1.value.color, box_2.value.color);
// };
const color_bg = ref("red");
const temp = ref("blue");

// Define the function to handle the color change
const handleChange = () => {
  color_bg.value = temp.value; // Change the color_bg value to the value of 'temp'
};
</script> -->

<template>
  <SubNavbar :links="jsNavLinks" />

  <Heading>Memory management</Heading>

  <SubHeading
    class="mt-10 text-center text-2xl font-500 leading-9 tracking-tight text-slate-600"
  >
    Reference to heap object
  </SubHeading>

  <div class="flex justify-center p-3 gap-3">
    <div
      :class="`box_1 w-${box_1.width} h-${box_1.width} bg-${query}-700 border-2 border-red-200 rounded flex flex-col gap-2 justify-center items-center`"
    >
      <!-- bg-${box_1.color}-400 -->
      <!-- <input type="text" class="" /> -->
      box 1
    </div>
    <div
      :class="`box_2 w-${box_2.width} h-${box_2.width} bg-${query}-700  border-2 border-red-200 rounded flex flex-col gap-2 justify-center items-center`"
    >
      <!-- bg-${box_2.color}-400 -->
      box 2
      <input
        type="text"
        class="text-center w-12 border-2 text-black"
        v-model="query"
      />
      <!-- v-model="box_2.widt  h" -->
      <Button
        class="bg-red-200 text-black p-1 rounded border-2 border-black"
        @click="handleChange"
        >Change</Button
      >
    </div>
  </div>

  <ol class="flex flex-col justify-center p-5 list-decimal gap-3 ml-5">
    <li>
      box 2 is a reference to box 1 which is created with keys color and width.
    </li>
    <li>
      After assigning box 2 variable to box 1 it creates a reference for box 2
      with actual box 1 as an object in heap.
    </li>
  </ol>
</template>

<script setup>
import { jsNavLinks } from "~/data/common.json";
// const color_bg = ref("red");
const query = ref(null);

definePageMeta({
  middleware: "auth",
  layout: "custom",
});

let box_1 = {
  width: query.value || 40,
  color: query.value || null,
};

// let box_1 = reactive({
//   width: 32,
// });

// let box_2 = box_1;
let box_2 = reactive(box_1);

// console.log(box_2);
// console.log(box_1);

const handleChange = () => {
  console.log(box_1.width, box_2.width);
  if (typeof query.value === String) {
    box_2.color = query.value;
  } else {
    box_2.width = Number(query.value);
  }
  console.log(box_1.width, box_2.width);

  // console.log(box_1.value.color, box_2.value.color);
  // box_2.value.color = color_bg.value;
  // console.log(box_1.value.color, box_2.value.color);
};
// box_2.width = "200px";
// console.log(box_2);
// console.log(box_1);
</script>
