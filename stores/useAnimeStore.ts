import { defineStore } from "pinia";

export const useAnimeStore = defineStore("animeapi", () => {
  const animeData = ref(null);
  const animeDetails = ref(null);

  const fetchData = async () => {
    // const data = await fetch("https://api.jikan.moe/v4/anime");
    // const res = await data.json();
    // animeData.value = res;
    // return res;

    try {
      const data = await fetch("https://api.jikan.moe/v4/anime");
      const res = await data.json();
      animeData.value = res;
      return res;
    } catch (error) {
      console.error("Error fetching anime data:", error);
      throw error;
    }
  };

  const fetchDataById = async (id: number) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const result = await response.json();
      animeDetails.value = result;
      return result;
    } catch (error) {
      console.error("Error fetching anime details:", error);
      throw error;
    }
    // const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    // const result = await response.json();
    // animeDetails.value = result;
    // return result;
  };

  return { animeData, animeDetails, fetchData, fetchDataById };
});
