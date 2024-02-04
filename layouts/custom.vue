<template>
  <header class="dark:bg-slate-900 dark:text-slate-100 p-12">
    <nav>
      <ul class="flex flex-wrap justify-center gap-2 m-auto rounded-lg lg:justify-around items-center px-4 py-4 dark:shadow-red-500 border-b-200 shadow-lg lg:flex-row md:flex-wrap sm:flex-wrap">
        <NuxtLink v-for="link in linksObj" :to="`${link.to}`"
          :class="{ 'router-link-exact-active': isLinkActive(link.to) }">
          <li
            class="cursor-pointer border m-auto border-red-500 w-32 h-10 flex justify-center items-center rounded-md hover:bg-red-600 hover:text-white hover:font-bold hover:border-none hover:shadow-lg">
            {{ link.title }}
          </li>
        </NuxtLink>

        <NuxtLink @click="confirmLogout">
          <li
            class="cursor-pointer border border-red-500 w-20 dark:text-slate-100 h-10 flex justify-center items-center rounded-md text-slate-600 hover:bg-red-600 hover:text-white hover:font-bold hover:shadow-lg hover:uppercase">
            Logout
          </li>
        </NuxtLink>

        <button class="bg-slate-100 text-slate-900" @click="toggleTheme()">Theme</button>
      </ul>
    </nav>
  </header>




  <slot />

  <footer class="dark:bg-slate-900 dark:text-slate-100">
    <li class="list-none flex justify-center text-slate-400 border-t-2 py-2">
      Copyright &copy; 2024 AnimeSaga
    </li>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const isActive = ref(false);

const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};

const isLinkActive = (to) => {
  const route = useRoute();
  return route.path === to;
};

const linksObj = [
  {
    id: 1,
    title: "Home",
    to: "/",
  },
  {
    id: 2,
    title: "Anime",
    to: "/anime",
  },
  {
    id: 3,
    title: "Plugin",
    to: "/plugin",
  },
  {
    id: 4,
    title: "Freecodecamp",
    to: "/freecodecamp/leaderboard",
  },
  {
    id: 5,
    title: "JavaScript",
    to: "/javascript/closures",
  },
];

const isLoggedIn = ref(false);

const confirmLogout = () => {
  const isConfirm = window.confirm(`Are you sure you want to logout?`);
  if (isConfirm) {
    handleLogout();
  }
};

const handleLogout = () => {
  localStorage.setItem("isLoggedIn", "false");
  isLoggedIn.value = false;
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

<style scoped>
.router-link-exact-active {
  /* Your styling for the active link goes here */
  background-color: #dc2626;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  /* Add any other styles you want for the active link */
}
</style>