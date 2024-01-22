export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.getPun = async () => {
    const res = await fetch("https://www.punapi.rest/api/pun");
    const data = await res.json();
    return data;
  };
});









