<template>
  <div class="flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <CommonHeading class="uppercase text-slate-500  font-bold">Enter Anime Saga</CommonHeading>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <CommonSubHeading class="mt-10 text-center text-2xl font-bold text-slate-500">
        Log in
      </CommonSubHeading>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <AuthForm :formFields="loginFormFields" />
      <p class="text-slate-400 py-3 font-bold">Not a member? <router-link to="/signup" class="underline text-red-400"> Create a free account </router-link></p>
    </div>
  </div>
</template>

<script setup>
import { loginFormFields } from "~/data/formData.json";

</script>
