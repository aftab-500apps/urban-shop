<template>
  <JavaScriptContainer>
    <div>
      <NumberSorter @sorted="handleSorted" />
    </div>
  </JavaScriptContainer>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
  layout: "custom",
});

import { ref } from "vue";

const sortedValues = ref([]);

const handleSorted = (values) => {
  sortedValues.value = values;
  // console.log("Sorted Values:", sortedValues.value);
};
</script>
