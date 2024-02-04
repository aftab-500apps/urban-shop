<template>
  <nav>
    <ul
      class="m-auto w-1/2 flex rounded-lg justify-around items-center px-2 py-2 border-2 border-b-200 shadow-md shadow-red-100">
      <NuxtLink :to="`${path}`" v-for="{ title, path } in links">
        <li
          class="cursor-pointer  border border-red-600 w-auto px-2 h-10 flex justify-center items-center rounded-md hover:bg-red-600 hover:text-white  hover:shadow-lg">
          {{ title }}
        </li>
      </NuxtLink>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps(["links"]);
</script>

<style scoped>
.router-link-exact-active {
  /* Your styling for the active link goes here */
  background-color: #dc2626;
  color: white;
  border-radius: 4px;
  border: none;
  outline: none;
  /* Add any other styles you want for the active link */
}
</style>