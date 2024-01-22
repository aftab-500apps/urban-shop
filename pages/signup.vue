<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-2xl font-500 leading-9 tracking-tight text-slate-600"
      >
        Sign up
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <AuthForm
        :formFields="signupFormFields"
        :submitButtonText="signupSubmitButtonText"
        :handleSubmit="handleSignup"
      />
    </div>
  </div>
</template>

<script setup>
import AuthForm from "~/components/AuthForm.vue";
import usePassValidato from "~/composables/usePassValidator";
const { validatePassword } = usePassValidato();

const signupFormFields = ref([
  {
    name: "name",
    label: "Name",
    type: "text",
    value: "",
    autocomplete: "name",
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    value: "",
    autocomplete: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    value: "",
    autocomplete: "new-password",
  },
]);

const signupSubmitButtonText = "Sign up";

const handleSignup = () => {
  if (signupFormFields.value.some((field) => field.value === "")) {
    alert("Please fill all the fields!");
  } else {
    //
    if (validatePassword(signupFormFields.value[2].value)) {
      const newUserData = {
        name: signupFormFields.value[0].value,
        email: signupFormFields.value[1].value,
        password: signupFormFields.value[2].value,
      };

      const existingData = JSON.parse(localStorage.getItem("signupData")) || [];
      existingData.push(newUserData);
      localStorage.setItem("signupData", JSON.stringify(existingData));

      signupFormFields.value = signupFormFields.value.map((field) => ({
        ...field,
        value: "",
      }));

      navigateTo("/login");
    } else {
      alert(
        "Password must be 8 characters with 1 capital , 1 small , 1 digit and 1 special character"
      );
    }
  }
};
</script>
