<template>
  <li class="text-slate-600 text-sm m-1 pl-8">{{ msg }}</li>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>
