<template>
  <section>
    <CommonHeading class="text-slate-600 text-center text-xl"
      >ENTER ANIME SAGA</CommonHeading
    >

    <section
      class="m-auto grid justify-center items-center grid-cols-4 gap-5 p-4"
      v-if="animeData?.data"
    >
      <ShowCard v-for="item in animeData.data" :item="item" />
    </section>
  </section>

  <CommonRuleComponent />

  <div class="pagination flex justify-center mb-4 items-center">
    <!-- <button class="border-2" @click="goToPage(animeStore.currentPage - 1)"> -->
    <CommonButton
      class="flex w-24 justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
    >
      Previous
    </CommonButton>
    <span class="p-2 font-bold">{{ currentPage }}</span>
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
// const animeStore = useAnimeStore();
// const currentPage = ref(animeStore.currentPage);
const { animeData, currentPage, totalPages } = toRefs(useAnimeStore());

onMounted(() => {
  useAnimeStore().fetchData();
});

const goToPage = async (page) => {
  // console.log("totalPages", totalPages.value);
  // console.log("current", currentPage.value);
  // console.log("going to", page);
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    await useAnimeStore().fetchData();
  }
};
// console.log(animeStore.currentPage);
// console.log(animeStore.itemsPerPage);
</script>
