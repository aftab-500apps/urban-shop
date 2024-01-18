// export default function ({ store, redirect }) {
//     console.log("auth executed");
//   if (!store.getters["auth/isAuthenticated"]) {
//     return redirect("/login");
//   }
// }

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("middleware start");
  const isLoggedInStr = localStorage.getItem("isLoggedIn");
  const isLoggedIn = isLoggedInStr === "true";
  if (isLoggedIn) {
    // console.log("check");
    return ;
  }
  // navigateTo("/login");

  return {
    path: "/login",
    replace: true,
  };
});
