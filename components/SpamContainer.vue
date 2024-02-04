<template>
  <div class="w-60 h-60 shadow-sm shadow-red-300">
    <h3 class="mt-4 text-center text-1xl text-slate-500 font-bold leading-9 tracking-tight">
      {{ title }}
    </h3>
    <div>
      <List v-for="msg in data" :msg="msg" :key="msg" />
    </div>
  </div>
</template>

<script setup>
const { title, data } = defineProps(["title", "data"]);
</script>
