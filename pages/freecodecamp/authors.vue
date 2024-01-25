<template>
  <SubNavbar />
  <Heading>News Authors Page</Heading>

  <div class="grid grid-cols-2 m-auto gap-4 ml-4 mr-4 mb-4">
    <div
      class="flex flex-col items-center border rounded-lg p-4 hover:bg-red-200"
      v-for="{ author, image, bio, url } in authorsArr.slice(0, visibleAuthors)"
      :key="author"
    >
      <h2 class="p-2">{{ author }}</h2>
      <img
        :src="image"
        alt="author"
        class="w-36 h-36 object-cover rounded-md"
      />
      <p class="p-2">
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
  <Button
    v-if="visibleAuthors < authorsArr.length"
    class="border-2 p-2 rounded-lg border-red-300 flex m-auto mt-4 mb-10 hover:bg-red-600 hover:border-transparent hover:text-white hover:font-bold"
    @click="loadMoreAuthors"
  >
    Load More Button
  </Button>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
  layout: "custom",
});

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
