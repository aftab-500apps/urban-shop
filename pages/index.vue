<template>
  <Heading> Welcome to AnimeSaga </Heading>

  <Hr />
  <Rating />
  <h3
    class="flex w-80 justify-center m-auto mt-10 text-center text-1xl font-bold leading-9 tracking-tight text-slate-600 shadow-md shadow-red-300 rounded"
  >
    Top 10 characters
  </h3>

  <TopTen
    v-for="(item, index) in animeStore.animeTop?.data?.slice(0, 10)"
    :item="item"
    :index="index"
  >
  </TopTen>
</template>

<script setup>
import { useAnimeStore } from "~/stores/useAnimeStore";
const animeStore = useAnimeStore();

onMounted(async () => {
  await animeStore.fetchTopAnime();
});
</script>
