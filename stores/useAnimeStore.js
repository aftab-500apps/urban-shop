import { defineStore } from "pinia";

export const useAnimeStore = defineStore("animeapi", () => {
  const animeData = ref(null);

  const fetchData = async () => {
    const data  = await fetch("https://api.jikan.moe/v4/anime");
    const res = await data.json()
    animeData.value = res;
    return res;
  };


  //   const fetchDataById = async (id) => {
  //     try {
  //       loading.value = true;
  //       const response = await fetch(`https://dummyjson.com/users/${id}`);
  //       const result = await response.json();
  //       data.value = result;
  //       return result;
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       loading.value = false;
  //     }
  //   };

  return { animeData, fetchData };
});
