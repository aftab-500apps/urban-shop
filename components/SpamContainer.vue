<template>
  <div class="w-60 p-4 h-60 shadow-md shadow-red-300">
    <h3
      :class="`mt-4 text-center text-1xl font-bold leading-9 tracking-tight ${
        title === 'SPAM' ? 'text-red-700' : 'text-slate-700'
      }`"
    >
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
