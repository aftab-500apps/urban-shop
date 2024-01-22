<template>
  <div
    :key="item.mal_id"
    class="m-auto text-center rounded-lg p-4 w-34 shadow-lg shadow-red-100"
  >
    <NuxtLink :to="`/anime/${item.mal_id}`">
      <img
        :src="item.images.jpg.image_url"
        :alt="`${item.title}`"
        class="rounded-lg w-30 cursor-pointer shadow-red-400"
      />
    </NuxtLink>
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
    <Icon
      name="uil:heart"
      class="cursor-pointer text-slate-500"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

</script>
