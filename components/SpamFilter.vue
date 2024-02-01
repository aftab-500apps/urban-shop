<template>
  <CommonSubHeading
    class="mt-10 text-center text-2xl font-500 leading-9 tracking-tight text-slate-600"
  >
    Spam Filter
  </CommonSubHeading>

  <div class="flex flex-col items-center justify-center gap-4">
    <input
      type="text"
      v-model="msg"
      class="rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
    />
    <CommonButton
      class="flex w-half justify-center items-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
      @click="handleClick"
    >
      Check
    </CommonButton>
    <h3
      :class="`mt-4 underline text-center text-1xl font-bold leading-9 tracking-tight ${
        result ? 'text-red-600' : 'text-slate-600'
      } `"
    >
      this message is : {{ result ? "spam" : "not spam" }}
    </h3>
  </div>

  <div class="container flex justify-around items-center">
    <SpamContainer title="SPAM" :data="spamArr" />
    <SpamContainer title="Spam Words" :data="spamWords" />
    <SpamContainer title="WORK" :data="workArr" />
  </div>
</template>

<script setup>
const { filterSpam } = useNuxtApp();

const spamWords = [
  "guaranteed job",
  "earn money",
  "won a lottery",
  "free gift",
  "Free investment",
  "Free membership",
  "Free money",
];

const msg = ref("");
const result = ref(null);
const spamArr = ref([]);
const workArr = ref([]);

const handleClick = () => {
  const isSpam = filterSpam(msg.value);
  result.value = isSpam;

  if (isSpam) {
    spamArr.value.push(msg.value);
  } else {
    workArr.value.push(msg.value);
  }

  msg.value = ""
};
</script>
