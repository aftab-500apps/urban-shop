<template>
  <div
    class="container flex items-center justify-start p-2 gap-3 bg-red-600 text-white font-bold w-48 rounded-md shadow-lg shadow-red-300 ml-10"
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
