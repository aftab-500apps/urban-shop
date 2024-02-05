<template>
  <li class="text-slate-600 text-sm m-1 dark:text-slate-100 pl-8">{{ msg }}</li>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>
