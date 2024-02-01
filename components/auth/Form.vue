<script setup>
import usePassValidator from "~/composables/usePassValidator";
const { validatePassword } = usePassValidator();
const { formFields } = defineProps(["formFields"]);

// object which will contain keys from inputfields array and get initialized as empty string
const inputOBJ = {};
formFields.inputFields.forEach((ele) => {
  inputOBJ[ele.name] = ref("");
});

const handleSubmit = () => {
  // check for existing signup data in signup localstorage
  const existingSignupData =
    JSON.parse(localStorage.getItem("signupData")) || [];

  // check for existing login data in signup localstorage
  const existingLoginData = JSON.parse(localStorage.getItem("loginData")) || [];

  // final object combined with keys frominput obj and values entered by user
  const newUSR = {};

  // is user valid for login
  let isValidUser = false;

  // signup success
  let isSignupSuccess = false;

  // loop on input object to map entered values to keys
  for (const key in inputOBJ) {
    // check for empty values before clicking
    if (inputOBJ[key].value === "") {
      alert(`Kindly fill up all fields!`);

      // return for breaking the loop or else it will show 3 alerts consecutively
      return;
    } else {
      // chekup for formtype signup to perform actions
      if (formFields.formtype === "signup") {
        // password validation and mapping input fields
        if (validatePassword(inputOBJ["password"].value)) {
          newUSR[key] = inputOBJ[key].value;
        } else {
          // password validation
          alert(
            "Password must be 8 characters with 1 capital , 1 small , 1 digit and 1 special character"
          );
          return;
        }
        // login actions if form type is login
      } else {
        // authenticating user
        const isValid = existingSignupData.some((ele) => {
          return (
            ele.email === inputOBJ["email"].value &&
            ele.password === inputOBJ["password"].value
          );
        });

        if (isValid) {
          // flag for further process
          isValidUser = true;
          break;
        }
      }
    }
  }

  // conditional statement for checking signup outside the loop
  if (formFields.formtype === "signup" && !isValidUser) {
    isSignupSuccess = true;
  }

  // after signup
  if (isSignupSuccess) {
    navigateTo("/login");
    existingSignupData.push(newUSR);
    localStorage.setItem("signupData", JSON.stringify(existingSignupData));

    // after login
  } else if (isValidUser) {
    existingLoginData.push({
      email: inputOBJ["email"].value,
      password: inputOBJ["password"].value,
    });
    localStorage.setItem("loginData", JSON.stringify(existingLoginData));
    alert(`Welcome ${inputOBJ["email"].value}`);
    localStorage.setItem("isLoggedIn", "true");
    navigateTo("/anime");

    // if its not a valid user
  } else {
    alert(`Invalid credentials !`);
    return;
  }

  // cleanup after submission
  for (const key in inputOBJ) {
    inputOBJ[key].value = "";
  }
};
</script>

<template>
  <form class="space-y-6" @submit.prevent="handleSubmit">
    <div v-for="(field, index) in formFields.inputFields" :key="index">
      <label
        :for="field.name"
        class="block text-sm font-medium leading-6 text-slate-600"
      >
        Enter {{ field.name }}
      </label>
      <div class="mt-2">
        <input
          :id="field.name"
          :name="field.name"
          :placeholder="`Enter ${field.name}`"
          v-model="inputOBJ[field.name].value"
          :type="field.type"
          :autocomplete="field.name"
          class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div>
      <CommonButton
        type="submit"
        class="flex w-full justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
      >
        {{ formFields.btnText }}
      </CommonButton>
    </div>
  </form>
</template>
