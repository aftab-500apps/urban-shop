import { defineStore } from "pinia";

export const useAnimeStore = defineStore("animeapi", () => {
  const animeData = ref(null);
  const animeDetails = ref(null);
  const animeTop = ref(null);

  const fetchData = async () => {
    try {
      const data = await fetch("https://api.jikan.moe/v4/anime");
      const res = await data.json();
      animeData.value = res;
      return res;
    } catch (error) {
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
      throw error;
    }
  };

  const fetchTopAnime = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/top/characters`);
      const result = await response.json();
      animeTop.value = result;
    } catch (error) {
      throw error;
    }
  };

  return {
    animeData,
    animeDetails,
    fetchData,
    fetchDataById,
    fetchTopAnime,
    animeTop,
  };
});
