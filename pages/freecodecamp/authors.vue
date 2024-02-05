<template>
  <SubNavbar :links="fccNavLinks" />
  <!-- <SubNavbar /> -->
  <CommonHeading class="dark:bg-slate-900 p-4">News Authors Page</CommonHeading>

  <div class="grid grid-cols-2 m-auto gap-4 p-4 dark:bg-slate-900">
    <div
      class="flex flex-col items-center border rounded-lg p-4 hover:bg-red-200 dark:hover:bg-slate-700"
      v-for="{ author, image, bio, url } in authorsArr.slice(0, visibleAuthors)"
      :key="author"
    >
      <h2 class="p-2 dark:text-slate-100">{{ author }}</h2>
      <img
        :src="image"
        alt="author"
        class="w-36 h-36 object-cover rounded-md"
      />
      <p class="p-2 dark:text-slate-100">
        {{ bio.length > 50 ? bio.slice(0, 50) + "..." : bio }}
      </p>
      <a
        :href="url"
        target="_blank"
        class="underline text-red-500 hover:text-red-700"
        >{{ author }} author page</a
      >
    </div>
  </div>
  <div class="p-6 dark:bg-slate-900">
    <CommonButton
      v-if="visibleAuthors < authorsArr.length"
      class="flex w-40 justify-center m-auto rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
      @click="loadMoreAuthors"
    >
      More
    </CommonButton>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
  layout: "custom",
});

import { fccNavLinks } from "~/data/common.json";
// console.log(fccNavLinks);

const authorsArr = ref([]);
const visibleAuthors = ref(8);

const authorURI =
  "https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json";

const fetchAuthors = async () => {
  const res = await fetch(authorURI);
  const data = await res.json();
  authorsArr.value = data;
};

fetchAuthors();

const loadMoreAuthors = () => {
  visibleAuthors.value += 8;
};
</script>
