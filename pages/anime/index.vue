<template>
  <section>
    <CommonHeading class="text-slate-600 text-center text-xl">ENTER ANIME SAGA</CommonHeading>

    <div class="w-72 m-auto flex flex-col gap-2">
      <input placeholder="Search for Anime" v-model="searchQuery" @input="onSearchInput" type="text"
        class="block bg-white text-center text-slate-600 w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-red-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6" />

      <CommonButton class="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm"
        :disabled="searchQuery.trim() === ''" :class="{
          'bg-gray-300': searchQuery.trim() === '',
          'cursor-not-allowed': searchQuery.trim() === '',
          'bg-red-400': searchQuery.trim() !== '',
          'hover:bg-red-500': searchQuery.trim() !== '',
          'text-white': searchQuery.trim() !== '',
          'text-gray-500': searchQuery.trim() === ''
        }" @click="handleSearchAnime">Search</CommonButton>
    </div>
    <CommonLoader v-if="loading" />

    <div v-if="!searchActive" class="pagination flex justify-center gap-2 my-8 items-center">
      <CommonButton class="flex w-24 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm"
        :class="{
          'bg-gray-300': currentPage === 1,
          'bg-red-400': currentPage !== 1,
          'text-gray-500': currentPage === 1,
          'text-white': currentPage !== 1,
          'hover:bg-red-600': currentPage !== 1,
          'cursor-not-allowed': currentPage === 1
        }
          " @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
        Previous
      </CommonButton>

      <span class="p-2 font-bold border-4 border-red-300 rounded-xl">{{ currentPage }} / {{ totalPages }}</span>

      <CommonButton class="flex w-24 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm"
        :class="{
          'bg-gray-300': currentPage >= totalPages,
          'bg-red-400': currentPage < totalPages,
          'text-gray-500': currentPage >= totalPages,
          'text-white': currentPage < totalPages,
          'hover:bg-red-600': currentPage < totalPages,
          'cursor-not-allowed': currentPage >= totalPages
        }
          " @click="goToPage(currentPage + 1)" :disabled="currentPage >= totalPages">
        Next
      </CommonButton>

    </div>

    <section class="m-auto mb-12 flex flex-wrap justify-center items-center gap-7 p-1" v-if="animeData?.data">
      <ShowCard v-for=" item  in  animeData.data " :item="item" />
    </section>
  </section>

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
