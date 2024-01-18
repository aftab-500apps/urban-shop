<template>
  <div class="card">
    <section class="grid grid-cols-2 gap-2 text-slate-500">
      <div class="p-7">
        <img
          :src="`${data.data.images.jpg.large_image_url}`"
          :alt="`${data.data.title}`"
          class="mx-auto my-7 rounded-lg"
        />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ data.data.title }}</h2>
        <h3 class="text-2xl my-7">{{ data.data.rating }}</h3>
        <!-- <p class="text-xl my-7">Price: ${{ data.value.data.price }}</p> -->
        <h2 class="font-bold border-b-2 mb-4 pb-2">Synopsis</h2>
        <p class="mb-7">{{ data.data.synopsis }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;

const { data } = await useFetch(`https://api.jikan.moe/v4/anime/${id}`);
console.log(data.value.data);
</script>
