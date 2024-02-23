<template>
  <div :key="item.mal_id" class="showCard m-auto mt-10 text-center rounded-lg shadow-md shadow-red-500">
    <NuxtLink :to="`/anime/${item.mal_id}`">
      <img :src="item.images.jpg.image_url" :alt="`${item.title}`"
        class="showcardImg rounded-t-lg cursor-pointer shadow-red-400" />
    </NuxtLink>
    <h4 class="m-auto text-slate-800 text-xs font-bold p-2 text-center w-46 dark:text-slate-100">
      {{ item.title }}
    </h4>
    <p class="m-auto text-slate-600 text-xs font-bold p-2 text-center w-32 hover:text-red-600 dark:text-slate-100">
      Episodes : {{ item.episodes }}
    </p>
    <p class="m-auto text-slate-600 text-xs font-bold p-2 text-center w-32 hover:text-red-600 dark:text-slate-100">
      {{ item.status }}
    </p>
    <Icon name="uil:heart" class="cursor-pointer text-red-500" @click="emitLike" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import EventBus from "~/eventbus"
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emitLike = () => {
  EventBus.emit('like-emit', { data: "some data" })
}

</script>

<style scoped>
.showCard {
  width: 240px;
  height: 380px;
  transition: transform 1s ease-in-out;
  /* Add this line for transition */
}

.showCard:hover {
  box-shadow: rgba(255, 99, 132, 0.4) -5px 5px,
    rgba(255, 99, 132, 0.3) -10px 10px, rgba(255, 99, 132, 0.2) -15px 15px,
    rgba(255, 99, 132, 0.1) -20px 20px, rgba(255, 99, 132, 0.05) -25px 25px;
  transform: translate(5px, -5px);
  /* Adjust the translation as needed */
}

.showcardImg {
  height: 250px;
  width: 250px;
  /* width: 300px; */
  object-fit: cover;
}
</style>
