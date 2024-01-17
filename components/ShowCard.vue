<template>
  <div
    v-for="item in filteredData"
    :key="item.id"
    class="m-auto text-center rounded-lg p-4 w-34 shadow-lg shadow-red-100"
  >
    <img
      :src="item.images.jpg.image_url"
      :alt="`${item.title}`"
      class="rounded-lg w-30 cursor-pointer"
    />
    <h4 class="m-auto text-slate-800 text-xs font-bold p-2 text-center w-32">
      {{ item.title }}
    </h4>
    <p
      class="m-auto text-slate-600 text-xs font-bold p-2 text-center w-32 hover:text-red-600"
    >
      Episodes : {{ item.episodes }}
    </p>
    <p
      class="m-auto text-slate-600 text-xs font-bold p-2 text-center w-32 hover:text-red-600"
    >
      {{ item.status }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  filteredData: {
    type: Array,
    required: true,
  },
});
</script>
