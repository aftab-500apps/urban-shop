

export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedInStr = localStorage.getItem("isLoggedIn");
  const isLoggedIn = isLoggedInStr === "true";
  if (isLoggedIn) {
    return ;
  }

  return {
    path: "/login",
    replace: true,
  };
});
