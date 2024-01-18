<template>
  <header>
    <nav class="m-6">
      <ul
        class="flex rounded-lg justify-around items-center px-4 py-4 border-2 border-b-200 shadow-md"
      >
        <li
          class="cursor-pointer border border-red-300 w-20 h-10 flex justify-center items-center rounded-md text-slate-600 hover:bg-red-600 hover:text-white hover:font-bold hover:border-none hover:shadow-lg hover:uppercase"
        >
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li
          class="cursor-pointer border border-red-300 w-20 h-10 flex justify-center items-center rounded-md text-slate-600 hover:bg-red-600 hover:text-white hover:font-bold hover:border-none hover:shadow-lg hover:uppercase"
        >
          <NuxtLink to="/anime">Anime</NuxtLink>
        </li>
        <li
          class="cursor-pointer border border-red-300 w-20 h-10 flex justify-center items-center rounded-md text-slate-600 hover:bg-red-600 hover:text-white hover:font-bold hover:border-none hover:shadow-lg hover:uppercase"
        >
          <NuxtLink to="/signup">Sign up</NuxtLink>
        </li>
        <li
          class="cursor-pointer border border-red-300 w-20 h-10 flex justify-center items-center rounded-md text-slate-600 hover:bg-red-600 hover:text-white hover:font-bold hover:border-none hover:shadow-lg hover:uppercase"
        >
          <NuxtLink to="/login">Login</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

  <!-- <section> -->
  <slot />
  <!-- </section> -->

  <footer>
    <li class="list-none flex justify-center text-slate-400 border-t-2 py-2">
      Copyright &copy; 2024 Anime
    </li>
  </footer>
</template>

<script setup>
console.log("default");
</script>
