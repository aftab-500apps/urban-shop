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
  <div class=" dark:bg-slate-900 dark:text-slate-100 pb-8">
    <div
      class="flex min-h-full flex-1 flex-col items-center gap-3 justify-center px-6 py-2 lg:px-8"
    >
      <SpamFilter />
    </div>

    <CommonRuleComponent />

    <div>
      <h3
        class="flex w-80 justify-center m-auto mt-10 text-center text-1xl font-bold leading-9 tracking-tight text-slate-600 shadow-sm dark:text-slate-100 shadow-red-500 rounded"
      >
        Even Numbers : {{ even(10).join(", ") }}
      </h3>
    </div>

    <CommonRuleComponent />

    <div
      class="flex justify-center flex-col gap-4 w-1/2 items-center p-4 shadow-sm shadow-red-500 m-auto rounded sm:w-3/4 md:w-3/4"
    >
      <CommonButton
        class="flex justify-center items-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
        @click="fetchPun()"
      >
        Get Random Pun
      </CommonButton>
      <CommonHeading>
        {{ pun.pun }}
      </CommonHeading>
    </div>

  </div>
</template>
