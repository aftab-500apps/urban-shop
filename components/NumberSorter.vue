<template>
  <SubNavbar :links="jsNavLinks" />

  <main
    class="container m-auto flex flex-col justify-center items-center gap-4 p-4"
  >
    <CommonSubHeading class="underline text-center text-3xl font-bold leading-9 tracking-tight text-slate-500"
      >Number Sorter</CommonSubHeading
    >
    <form class="flex flex-col justify-center items-center gap-6" @submit.prevent="">
      <h2>Input:</h2>
      <fieldset class="flex gap-2 items-center">
        <span class="bracket">[</span>
        <div v-for="(value, index) in values" :key="index">
          <select
            v-model="values[index]"
            name="values"
            class="values-dropdown p-2"
            :aria-label="`number ${index + 1}`"
          >
            <option
              v-for="option in options"
              class="p-2"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
          <span class="comma" v-if="index < values.length - 1">,</span>
        </div>
        <span class="bracket">]</span>
      </fieldset>
      <CommonButton
        class="flex w-full justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
        type="submit"
        @click="bubbleSort"
        :disabled="sorting"
        >Bubble Sort</CommonButton
      >
      <CommonButton
        class="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500"
        type="submit"
        :disabled="sorting"
        @click="selectionSort"
      >
        Selection Sort
      </CommonButton>
    </form>
    <div class="output-container text-center">
      <h2>Output:</h2>
      <div class="output-array flex gap-2 justify-center items-center">
        <span class="bracket">[</span>
        <div v-for="(num, index) in sortedValues" :key="index">
          <span class="output-value p-2" :id="`output-value-${index}`">{{
            num
          }}</span>
          <span class="comma" v-if="index < sortedValues.length - 1">,</span>
        </div>
        <span class="bracket">]</span>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { jsNavLinks } from "~/data/common.json";

const emit = defineEmits(["sorted"]);

const options = Array.from({ length: 10 }, (_, index) => index);
const values = ref([8, 2, 4, 10, 3]);
const sortedValues = ref([]);

const sorting = ref(false); // Add a ref to track sorting state

const bubbleSort = () => {
  sorting.value = true;
  const sortedArray = [...values.value]
  bubbleSorter(sortedArray);
  sortedValues.value = sortedArray;
  sorting.value = false;
  emit("sorted", sortedValues.value);
};

const selectionSort = () => {
  sorting.value = true;
  const sortedArray = [...values.value]
  selectionSorter(sortedArray);
  sortedValues.value = sortedArray;
  sorting.value = false;
  emit("sorted", sortedValues.value);
};

const bubbleSorter = (arr) => {
  //   console.log("from bubble sort", arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // console.log("from bubble sort", arr);
  //   return arr;
};

const selectionSorter = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  // console.log("from selection sort", arr);
};
</script>

<style scoped>
.bracket {
  font-size: 2rem;
}
</style>
