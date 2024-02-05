<template>
  <JavaScriptContainer
    style="
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url(https://r4.wallpaperflare.com/wallpaper/663/846/329/anime-naruto-naruto-uzumaki-sasuke-uchiha-wallpaper-028d33bbe80cd01d63a48c029089a6ac.jpg);
      background-size: cover;
      background-position: center;
    "
  >
    <div class="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <CommonDisplayHeading>Enter Anime Saga</CommonDisplayHeading>
      <div class="sm:mx-auto sm:w-full sm:max-w-sm mt-16">
        <CommonSubHeading
          class="mt-10 text-center text-2xl font-bold text-slate-100"
        >
          Sign up
        </CommonSubHeading>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <AuthForm :formFields="signupFormFields" />
        <p class="text-slate-400 py-3 font-bold">
          Already a member?
          <router-link to="/login" class="underline text-red-400">
            Login here
          </router-link>
        </p>
      </div>
    </div>
  </JavaScriptContainer>
</template>

<script setup>
import { signupFormFields } from "~/data/formData.json";
</script>
