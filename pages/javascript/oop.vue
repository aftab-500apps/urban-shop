<template>
  <SubNavbar :links="jsNavLinks" />

  <SubHeading class="text-xl m-4 font-600 text-slate-600 text-center"
    >Fan Page</SubHeading
  >
  <div class="p-4 flex items-center m-auto">
    <div class="flex flex-col m-auto">
      <SubHeading class="text-xl m-4 font-500 text-slate-600 text-center"
        >Add your fav characters</SubHeading
      >

      <input
        type="text"
        placeholder="Enter Character Name"
        v-model="newCharName"
        class="block w-full m-auto text-center text-grey-600 mt-3 mb-3 rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
      />

      <input
        type="text"
        placeholder="Enter Universe Name"
        v-model="newUniverseName"
        class="block w-full m-auto text-center text-grey-600 mt-3 mb-3 rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
      />

      <Button
        @click="handleAddChar"
        class="flex w-full m-auto justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
        >Add Character</Button
      >
    </div>
    <div class="flex flex-col m-auto">
      <SubHeading class="text-xl m-4 font-500 text-slate-600 text-center"
        >Know the universe</SubHeading
      >

      <input
        type="text"
        placeholder="Search"
        v-model="searchQuery"
        class="block w-full m-auto text-center text-grey-600 mt-3 mb-3 rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
      />

      <div class="m-4">
        <h2 class="text-xl font-semibold mb-2">Characters</h2>
        <ul class="p-3">
          <li v-for="character in filteredCharacters" :key="character.name">
            {{ character.name }} from {{ character.universe }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
  layout: "custom",
});

import { jsNavLinks } from "~/data/common.json";

// Character Class
class Character {
  name;
  universe;

  constructor(name, universe) {
    this.name = name;
    this.universe = universe;
  }
  // selfIntro() {
  //   console.log(`Orewa ${this.name} from ${this.universe}`);
  // }
}

// ! CharacterService Class
class CharacterService {
  characters;

  constructor() {
    if (process.client) {
      this.characters = JSON.parse(localStorage.getItem("NinjasDB")) || [];
    } else {
      this.characters = [];
    }
  }

  getCharacters() {
    return this.characters;
  }

  addCharacter(character) {
    this.characters.push(character);
    localStorage.setItem("NinjasDB", JSON.stringify(this.characters));
  }
}

const characterService = new CharacterService();

const newCharName = ref("");
const newUniverseName = ref("");
const searchQuery = ref("");

// ! add new character
const handleAddChar = () => {
  console.log(characterService.getCharacters());
  if (newCharName.value !== "" && newUniverseName.value !== "") {
    const newChar = new Character(newCharName.value, newUniverseName.value);
    console.log(newChar);
    // Instances creation for character
    characterService.addCharacter(newChar);
   

    console.log("NinjasDB :", characterService.getCharacters());
  }

  newCharName.value = "";
  newUniverseName.value = "";
};

onMounted(() => {
  // console.log(`NinjasDB on mount :`, characterService.getCharacters());
  updateFilteredCharacters();
});

const filteredCharacters = ref([]);

const updateFilteredCharacters = () => {
  const characters = characterService.getCharacters();
  filteredCharacters.value = characters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
};

watch(searchQuery, () => {
  updateFilteredCharacters();
});
</script>
