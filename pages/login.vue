<template>
  <div class="flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <Heading class="uppercase font-bold">Enter Anime Saga</Heading>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <SubHeading
        class="mt-10 text-center text-2xl font-500 leading-9 tracking-tight text-slate-600"
      >
        Log in
      </SubHeading>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <AuthForm :formFields="loginFormFields" />
    </div>
  </div>
</template>

<script setup>
import { loginFormFields } from "~/data/formData.json";
</script>
