<template>
  <section>
    <h1 class="text-slate-600 text-center text-xl">ENTER ANIME SAGA</h1>

    <section class="w-100 flex justify-center h-28">
      <input
        type="text"
        placeholder="enter anime name"
        class="border-2 border-red-200 rounded-md m-auto p-2 outline-none text-center shadow-md"
        v-model="searchQuery"
      />
    </section>

    <section
      class="m-auto grid justify-center items-center grid-cols-4 gap-5 p-4"
      v-if="filteredData"
    >
      <ShowCard :filteredData="filteredData" />
    </section>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
const { data } = await useFetch("https://api.jikan.moe/v4/anime");
const searchQuery = ref("");

const filteredData = computed(() => {
  if (!searchQuery.value) {
    return data.value.data;
  }

  return data.value.data.filter((item) =>
    item.title.includes(searchQuery.value)
  );
});
</script>
