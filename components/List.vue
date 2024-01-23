<template>
  <li class="text-slate-600 text-sm m-1 text-center">{{ msg }}</li>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>
