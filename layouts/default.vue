<template>
  <header>
    <nav class="m-6">
      <ul
        class="flex rounded-lg justify-around items-center px-4 py-4 border-2 border-b-200 shadow-md"
      >
        <li
          v-for="link in linksObj"
          class="cursor-pointer border border-red-300 w-20 h-10 flex justify-center items-center rounded-md text-slate-600 hover:bg-red-600 hover:text-white hover:font-bold hover:border-none hover:shadow-lg hover:uppercase"
        >
          <NuxtLink :to="`${link.to}`">{{ link.title }}</NuxtLink>
        </li>
        <li
          class="cursor-pointer border border-red-300 w-20 h-10 flex justify-center items-center rounded-md text-slate-600 hover:bg-red-600 hover:text-white hover:font-bold hover:border-none hover:shadow-lg hover:uppercase"
        >
          <NuxtLink to="#" @click="handleLogout">Logout</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

  <slot />

  <footer>
    <li class="list-none flex justify-center text-slate-400 border-t-2 py-2">
      Copyright &copy; 2024 AnimeSaga
    </li>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";

const linksObj = [
  {
    id: 1,
    title: "Home",
    to: "/",
  },
  {
    id: 2,
    title: "Plugin",
    to: "/plugin",
  },
  {
    id: 3,
    title: "Anime",
    to: "/anime",
  },
  {
    id: 4,
    title: "Sign up",
    to: "/signup",
  },
  {
    id: 5,
    title: "Login",
    to: "/login",
  },
];

const isLoggedIn = ref(false);

const handleLogout = () => {
  localStorage.setItem("isLoggedIn", "false");
  isLoggedIn.value = false;
  alert("Logged out succesfully");
  navigateTo("/login");
};

onMounted(() => {
  isLoggedIn.value = localStorage.getItem("isLoggedIn") === "true";
});

watch(
  () => localStorage.getItem("isLoggedIn"),
  (newValue) => {
    isLoggedIn.value = newValue === "true";
  }
);
</script>
