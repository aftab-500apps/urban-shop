<template>
  <div
    class="container flex items-center m-auto justify-center p-2 gap-3 bg-red-600 text-white font-bold text-center w-3/4 sm:w-full md:w-48 md:m-0 md:ml-12 lg:w-48  rounded-md shadow-lg shadow-red-300"
  >
    <CommonSubHeading>Your Rating : {{ rating }}</CommonSubHeading>
    <CommonButton class="p-1 rounded-md bg-white text-red-600">
      <Icon name="uil:heart" class="cursor-pointer" @click="increaseRating" />
    </CommonButton>
  </div>
</template>

<script setup>
const rating = useState(() => 0);

const increaseRating = () => {
  if (rating.value < 10) {
    rating.value++;
  } else {
    alert("max limit is 10");
  }
};
</script>
