<template>
  <h1
    class="special text-slate-100 text-center text-5xl uppercase font-bold"
  >
    <slot />
  </h1>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap");

.special {
  font-family: "Protest Revolution", sans-serif;
  text-shadow: 2px 2px 8px #ff0000;
}
</style>
