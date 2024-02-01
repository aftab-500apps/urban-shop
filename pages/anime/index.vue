<template>
  <section>
    <CommonHeading class="text-slate-600 text-center text-xl"
      >ENTER ANIME SAGA</CommonHeading
    >

    <section
      class="m-auto grid justify-center items-center grid-cols-4 gap-5 p-4"
      v-if="animeStore.animeData?.data"
    >
      <ShowCard v-for="item in animeStore.animeData.data" :item="item" />
    </section>
  </section>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
  layout: "custom",
});
import { useAnimeStore } from "~/stores/useAnimeStore";

const animeStore = useAnimeStore();

onMounted(async () => {
  await animeStore.fetchData();
});
</script>
