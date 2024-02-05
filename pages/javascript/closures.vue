<template>
  <JavaScriptContainer class="min-h-screen">
    <SubNavbar :links="jsNavLinks" />
    <CommonSubHeading
    class="mt-4 underline p-4 text-center text-3xl font-bold leading-9 tracking-tight text-slate-500"
    >
    Closures
  </CommonSubHeading>
  <Feedback />
  </JavaScriptContainer>
</template>

<script setup>

definePageMeta({
  middleware: "auth",
  layout: "custom",
});

import { jsNavLinks } from "~/data/common.json";
</script>
