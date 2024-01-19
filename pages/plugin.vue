<script setup>
const { even, getPun } = useNuxtApp();
const pun = ref("");

const fetchPun = () => {
  getPun().then((res) => {
    pun.value = res;
  });
};

onMounted(() => {
  fetchPun();
});
</script>

<template>
  <h2
    class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-600"
  >
    Plugins
  </h2>

  <div>
    <h3
      class="mt-10 text-center text-1xl font-bold leading-9 tracking-tight text-slate-600"
    >
      Even Numbers : {{ even(10).join(", ") }}
    </h3>
  </div>
  <div class="flex justify-center flex-col items-center p-10">
    <button
      class="flex w-half justify-center items-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
      @click="fetchPun()"
    >
      get random pun
    </button>
    <h1
      class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-slate-600"
    >
      {{ pun.pun }}
    </h1>
  </div>
</template>
