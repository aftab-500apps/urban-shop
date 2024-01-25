<template>
  <nav>
    <ul
      class="m-auto w-1/4 flex rounded-lg justify-around items-center px-2 py-2 border-2 border-b-200 shadow-md shadow-red-100"
    >
      <li
        class="cursor-pointer border border-red-300 w-28 h-10 flex justify-center items-center rounded-md text-slate-600 hover:bg-red-600 hover:text-white hover:font-bold hover:border-none hover:shadow-lg"
      >
        <NuxtLink to="/freecodecamp/leaderboard">Leaderboard</NuxtLink>
      </li>
      <li
        class="cursor-pointer border border-red-300 w-28 h-10 flex justify-center items-center rounded-md text-slate-600 hover:bg-red-600 hover:text-white hover:font-bold hover:border-none hover:shadow-lg"
      >
        <NuxtLink to="/freecodecamp/authors">Authors</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
