<template>
  <li>{{ msg }}</li>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>
