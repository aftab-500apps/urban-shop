<template>
  <form class="space-y-6" @submit.prevent="handleSubmit">
    <div v-for="(field, index) in formFields" :key="index">
      <label
        :for="field.name"
        class="block text-sm font-medium leading-6 text-slate-600"
      >
        {{ field.label }}
      </label>
      <div class="mt-2">
        <input
          :id="field.name"
          :name="field.name"
          v-model="field.value"
          :type="field.type"
          :autocomplete="field.autocomplete"
          class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="flex w-full justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
      >
        {{ submitButtonText }}
      </button>
    </div>
  </form>
</template>

<script setup>
const props = defineProps(["formFields", "submitButtonText", "handleSubmit"]);

const handleSubmit = () => {
  props.handleSubmit();
};
</script>
