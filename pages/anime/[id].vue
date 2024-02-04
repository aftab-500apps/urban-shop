<template>
  <div class="details-container pt-12">

    <router-link to="/anime" >
      <CommonButton class="w-32 px-4 py-2 ml-8 mb-10 text-white rounded bg-red-500 hover:bg-red-600">Back</CommonButton>
    </router-link>
    <CommonLoader v-if="animeStore.loading" />
    <section v-if="animeStore.animeDetails?.data" class="flex flex-wrap lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 2xl:grid 2xl:grid-cols-2 items-center justify-center text-slate-500">
      <div class="p-1">
        <img :src="`${animeStore.animeDetails?.data?.images?.jpg?.large_image_url}`"
          :alt="`${animeStore.animeDetails?.data?.title}`" class="m-auto w-80 h-full rounded-lg imgBanner" />
      </div>
      <div class="flex flex-col gap-6 justify-center p-12">
        <CommonSubHeading class="text-4xl">
          {{ animeStore.animeDetails?.data?.title }}
        </CommonSubHeading>
        <h3 class="text-2xl">
          {{ animeStore.animeDetails?.data?.rating }}
        </h3>
        <CommonSubHeading class="font-500 border-b-2">Synopsis</CommonSubHeading>
        <p class="mr-10 text-justify">
          {{ animeStore.animeDetails?.data?.synopsis }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
  layout: "custom",
});

import { useAnimeStore } from "~/stores/useAnimeStore";

const animeStore = useAnimeStore();
const route = useRoute();
const id = route.params.id;

onMounted(async () => {
  await animeStore.fetchDataById(id);
});
</script>

<style scoped>
.details-container {
  height: 100vh;
  margin: auto;
}

.imgBanner:hover {
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
    rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
    rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
}
</style>
