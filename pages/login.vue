<template>
  <JavaScriptContainer
    style="
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url(https://r4.wallpaperflare.com/wallpaper/322/317/102/naruto-shippuuden-manga-anime-akatsuki-wallpaper-12ebbaf552def9c29d46b896a1965d6b.jpg);
      background-size: cover;
      background-position: center;
    "
  >
    <div class="flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <CommonDisplayHeading> Enter Anime Saga </CommonDisplayHeading>>
      <div class="sm:mx-auto sm:w-full sm:max-w-sm mt-16">
        <CommonSubHeading
          class="mt-10 text-center text-2xl font-bold text-slate-100"
        >
          Log in
        </CommonSubHeading>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <AuthForm :formFields="loginFormFields" />
        <p class="text-slate-400 py-3 font-bold">
          Not a member?
          <router-link to="/signup" class="underline text-red-400">
            Create a free account
          </router-link>
        </p>
      </div>
    </div>
  </JavaScriptContainer>
</template>

<script setup>
import { loginFormFields } from "~/data/formData.json";
</script>
