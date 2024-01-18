<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-600"
      >
        Sign up
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        class="space-y-6"
        action="#"
        method="POST"
        @submit.prevent="handleSubmit"
      >
        <!-- ! name -->
        <div>
          <label
            for="name"
            class="block text-sm font-medium leading-6 text-slate-600"
            >Name</label
          >
          <div class="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              v-model="name"
              class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <!-- ! email -->
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-slate-600"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              v-model="email"
              class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <!-- ! password -->
        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-slate-600"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              v-model="password"
              class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const name = ref("");
const email = ref("");
const password = ref("");

const handleSubmit = () => {
  if (name.value === "" || email.value === "" || password.value === "") {
    alert("Please fill all the fields!");
  } else {
    const newUserData = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    const existingData = JSON.parse(localStorage.getItem("signupData")) || [];
    existingData.push(newUserData);
    localStorage.setItem("signupData", JSON.stringify(existingData));

    name.value = "";
    email.value = "";
    password.value = "";
  }
};
</script>
