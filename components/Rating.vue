<template>
  <div class="container flex items-center p-2 gap-3">
    <h2>Your Rating : {{ rating }}</h2>
    <Button class="shadow-md shadow-red-200 p-1 rounded-md">
      <Icon name="uil:heart" class="cursor-pointer" @click="increaseRating" />
    </Button>
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
