<template>
  <section>
    <h1 class="text-slate-600 text-center text-xl">ENTER ANIME SAGA</h1>

    <section class="w-100 flex justify-center h-28">
      <input
        type="text"
        placeholder="enter anime name"
        class="border-2 border-red-200 rounded-md m-auto p-2 outline-none text-center shadow-md"
      />
    </section>

    <section
      class="m-auto grid justify-center items-center grid-cols-4 gap-5 p-4"
      v-if="animeStore.animeData?.data"
    >
      <ShowCard :filteredData="animeStore.animeData.data" />
    </section>
  </section>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
import { useAnimeStore } from "~/stores/useAnimeStore";

const animeStore = useAnimeStore();

onMounted(async () => {
  await animeStore.fetchData();
});
</script>
