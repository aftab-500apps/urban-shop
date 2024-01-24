<script setup>
definePageMeta({
  middleware: "auth",
  layout: "custom",
});

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
  <SubHeading
    class="mt-10 text-center text-2xl font-500 leading-9 tracking-tight text-slate-600"
  >
    Plugins
  </SubHeading>

  <div
    class="flex min-h-full flex-1 flex-col items-center gap-3 justify-center px-6 py-2 lg:px-8"
  >
    <SpamFilter />
  </div>

  <RuleComponent />

  <div>
    <h3
      class="flex w-80 justify-center m-auto mt-10 text-center text-1xl font-bold leading-9 tracking-tight text-slate-600 shadow-md shadow-red-300 rounded"
    >
      Even Numbers : {{ even(10).join(", ") }}
    </h3>
  </div>

  <RuleComponent />

  <div
    class="flex w-full justify-center flex-col items-center p-4 shadow-md shadow-red-300 m-auto mt-10 rounded"
  >
    <Button
      class="flex w-half justify-center items-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
      @click="fetchPun()"
    >
      get random pun
    </Button>
    <Heading>
      {{ pun.pun }}
    </Heading>
  </div>

  <RuleComponent />
</template>
