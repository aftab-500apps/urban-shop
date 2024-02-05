<template>
  <JavaScriptContainer>
    <SubNavbar :links="jsNavLinks"></SubNavbar>

    <RomanConverter @conversion-result="handleResult" />
  </JavaScriptContainer>
</template>

<script setup>
definePageMeta({
  layout: "custom",
  middleware: "auth",
});

import { jsNavLinks } from "~/data/common.json";

const handleResult = (res) => {
  console.log(res);
};
</script>
