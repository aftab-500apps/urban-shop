<!-- components/ModalAlert.vue -->

<template>
  <div
    class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center hidden"
    id="alertModal"
  >
    <div
      class="modal-overlay absolute w-full h-full bg-gray-800 opacity-50"
    ></div>

    <div
      class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <div
        class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
      >
        <svg
          class="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        ></svg>
      </div>

      <div class="p-4">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Alert</h2>
        <p>{{ alertMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped></style>
