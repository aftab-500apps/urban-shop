<template>
  <div class="dark:bg-slate-900 dark:text-slate-100 pb-12">
    <CommonHeading> Welcome to AnimeSaga </CommonHeading>

    <!-- <CommonRuleComponent /> -->
    <div class="flex justify-evenly items-center flex-wrap gap-4 p-4 mt-4" >
      <HomePageRating />
      <h3
        class="flex w-80 uppercase dark:text-slate-100 justify-center m-auto text-center text-1xl font-bold leading-9 tracking-tight text-slate-600 shadow-sm shadow-red-500 rounded"
      >
        Top Characters
      </h3>

      <div class="w-80"></div>
    </div>

    <br />

    <CommonLoader v-if="animeStore.loading" />

    <HomePageTopTen
      v-for="(item, index) in animeStore.animeTop?.data?.slice(0, 10)"
      :item="item"
      :index="index"
    >
    </HomePageTopTen>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
  layout: "custom",
});
import { useAnimeStore } from "~/stores/useAnimeStore";
const animeStore = useAnimeStore();

onMounted(async () => {
  await animeStore.fetchTopAnime();
});
</script>
