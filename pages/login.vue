<template>
  <div
    class="flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <SubHeading
        class="mt-10 text-center text-2xl font-500 leading-9 tracking-tight text-slate-600"
      >
        Log in
      </SubHeading>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <AuthForm
        :formFields="loginFormFields"
        :submitButtonText="loginSubmitButtonText"
        :handleSubmit="handleLogin"
      />
    </div>
  </div>
</template>

<script setup>
import AuthForm from "~/components/AuthForm.vue";

const loginFormFields = ref([
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
    autocomplete: "current-password",
  },
]);

const loginSubmitButtonText = "Log in";

const handleLogin = () => {
  const [emailField, passwordField] = loginFormFields.value;
  const email = emailField.value;
  const password = passwordField.value;

  if (email === "" || password === "") {
    alert("Please fill all the fields!");
  } else {
    const signupData = JSON.parse(localStorage.getItem("signupData"));
    const isValid = signupData.some((ele) => {
      return ele.email === email && ele.password === password;
    });
    if (isValid) {
      // Clear the values in loginFormFields
      loginFormFields.value.forEach((field) => {
        field.value = "";
      });

      alert(`Login successful for ${email}`);
      localStorage.setItem("isLoggedIn", "true");
      navigateTo("/anime");
    } else {
      alert(`Invalid credentials`);
    }
  }
};
</script>
