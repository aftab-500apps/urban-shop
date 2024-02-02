<template>
  <section>
    <CommonHeading class="text-slate-600 text-center text-xl"
      >ENTER ANIME SAGA</CommonHeading
    >

    <div class="w-72 m-auto flex flex-col gap-2">
      <input
        placeholder="Search for Anime"
        v-model="searchQuery"
        @input="onSearchInput"
        type="text"
        class="block bg-white text-center text-slate-600 w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
      />

      <CommonButton
        class="flex w-full justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
        @click="handleSearchAnime"
        >Search</CommonButton
      >
    </div>
    <CommonLoader v-if="loading" />

    <section
      class="m-auto grid grid-cols-5 justify-center items-center gap-7 p-1"
      v-if="animeData?.data"
    >
      <ShowCard v-for="item in animeData.data" :item="item" />
    </section>
  </section>

  <CommonRuleComponent />

  <div
    v-if="!searchActive"
    class="pagination flex justify-center gap-2 mb-16 items-center"
  >
    <!-- <button class="border-2" @click="goToPage(animeStore.currentPage - 1)"> -->
    <CommonButton
      class="flex w-24 justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
    >
      Previous
    </CommonButton>
    <span class="p-2 font-bold border-4 border-red-300 rounded-xl"
      >{{ currentPage }} / {{ totalPages }}</span
    >
    <CommonButton
      class="flex w-24 justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage >= totalPages"
    >
      Next
    </CommonButton>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
  layout: "custom",
});

import { toRefs, onMounted } from "vue";
import { useAnimeStore } from "~/stores/useAnimeStore";
import useDebounce from "~/composables/useDebounce";

const { animeData, currentPage, totalPages, loading } = toRefs(useAnimeStore());
const searchQuery = ref("");
const searchActive = ref(false);
const onSearchInput = () => (searchActive.value = true);
useDebounce(() => {
  handleSearchAnime();
}, 500);

const handleSearchAnime = async () => {
  searchActive.value = true;
  if (searchQuery.value.trim() !== "") {
    await useAnimeStore().searchAnime(searchQuery.value.trim());
  } else {
    await useAnimeStore().fetchData();
  }
  searchQuery.value.trim() === "";
};

onMounted(() => {
  useAnimeStore().fetchData();
});

const goToPage = async (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    await useAnimeStore().fetchData();
  }
};
</script>
