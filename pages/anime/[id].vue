<template>
  <div class="card">
    <section
      v-if="animeStore.animeDetails?.data"
      class="grid grid-cols-2 gap-2 text-slate-500"
    >
      <div class="p-7">
        <img
          :src="`${animeStore.animeDetails?.data?.images?.jpg?.large_image_url}`"
          :alt="`${animeStore.animeDetails?.data?.title}`"
          class="mx-auto my-7 rounded-lg"
        />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">
          {{ animeStore.animeDetails?.data?.title }}
        </h2>
        <h3 class="text-2xl my-7">
          {{ animeStore.animeDetails?.data?.rating }}
        </h3>
        <!-- <p class="text-xl my-7">Price: ${{ data.value.data.price }}</p> -->
        <h2 class="font-bold border-b-2 mb-4 pb-2">Synopsis</h2>
        <p class="mb-7">{{ animeStore.animeDetails?.data?.synopsis }}</p>
      </div>
    </section>
    <p v-else>Loading...</p>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});

import { useAnimeStore } from "~/stores/useAnimeStore";

const animeStore = useAnimeStore();
const route = useRoute();
const id = route.params.id;

onMounted(async () => {
  await animeStore.fetchDataById(id);
});

</script>
