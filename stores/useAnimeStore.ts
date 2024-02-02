import { defineStore } from "pinia";

export const useAnimeStore = defineStore("animeapi", () => {
  const animeData = ref(null);
  const animeDetails = ref(null);
  const animeTop = ref(null);
  const currentPage = ref(1);
  const itemsPerPage = 10;
  const totalPages = ref(1);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://api.jikan.moe/v4/anime?page=${
          currentPage.value
        }&limit=${itemsPerPage}`
      );
      const res = await data.json();

      // console.log("api response", res);
      // console.log(res.pagination.last_visible_page);
      totalPages.value = res.pagination.last_visible_page;
      animeData.value = res;
      return { res, totalPages };
    } catch (error) {
      console.log(error);
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
    currentPage,
    totalPages,
    itemsPerPage,
  };
});
