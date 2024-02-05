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

// ! prototype simple example
// const animal = {
//   eats: true,
// };

// const rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal;

// for (const key in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(key);
//   if (isOwn) {
//     console.log(`Our : ${key}`);
//   } else {
//     console.log(`inherited : ${key}`);
//   }
// }
// console.log(rabbit);

// ! __proto__ chaining example

// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   __proto__: table,
//   sheet: 1,
//   pillow: 2,
// };

// let pockets = {
//   __proto__: bed,
//   money: 2000,
// };

// console.log(pockets);
// console.log(bed.pen);
</script>
