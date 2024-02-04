<template>
  <div class="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <CommonHeading class="uppercase font-bold">Enter Anime Saga</CommonHeading>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <CommonSubHeading class="mt-10 text-center text-2xl font-bold text-slate-500">
        Sign up
      </CommonSubHeading>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <AuthForm :formFields="signupFormFields" />
      <p class="text-slate-400 py-3 font-bold">Already a member? <router-link to="/login" class="underline text-red-400"> Login here </router-link></p>

    </div>
  </div>
</template>

<script setup>
import { signupFormFields } from "~/data/formData.json";
</script>
