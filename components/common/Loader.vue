<template>
  <div class="loader-container">
    <div class="loader bg-white">
      <div class="inner-loader"></div>
    </div>
  </div>
</template>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loader {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 7px solid transparent; /* Border added for better visibility */
  border-top-color: red; /* You can adjust the color */
  animation: spin 1s linear infinite;
  background-color: white;
}

.inner-loader {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: white;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
