<template>
  <JavaScriptContainer>

    <SubNavbar :links="jsNavLinks" />
    
    <CommonSubHeading
    class="mt-4 underline text-center text-3xl font-bold leading-9 tracking-tight text-slate-500"
    >Fan Page</CommonSubHeading
    >
    <div class="p-4 flex flex-wrap items-center m-auto">
    <div class="flex flex-col m-auto">
      <CommonSubHeading class="text-xl m-4 font-500 text-slate-600 text-center"
      >Add your fav characters</CommonSubHeading
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
      
      <CommonButton
      @click="handleAddChar"
      class="flex w-full m-auto justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
      >Add Character</CommonButton
      >
    </div>
    <div class="flex flex-col m-auto">
      <CommonSubHeading class="text-xl m-4 font-500 text-slate-600 text-center"
      >Know the universe</CommonSubHeading
      >
      
      <input
      type="text"
      placeholder="Search"
      v-model="searchQuery"
      class="block w-full m-auto text-center text-grey-600 mt-3 mb-3 rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
      />
      
      <div class="m-4">
        <h2 class="text-xl m-4 font-500 text-slate-600 text-center">
          Characters
        </h2>
        <ul class="p-3 list-decimal">
          <li
          class="text-slate-600 text-center dark:text-slate-100"
          v-for="character in filteredCharacters"
          :key="character.name"
          >
          {{ character.name }} from {{ character.universe }}
        </li>
      </ul>
    </div>
  </div>
</div>
</JavaScriptContainer>
</template>

<script setup>
import { jsNavLinks } from "~/data/common.json";

definePageMeta({
  middleware: "auth",
  layout: "custom",
});

// class Person {
//   name = ""; // or name;

//   constructor(name) {
//     this.name = name;
//   }

//   introduceSelf() {
//     console.log(`Hi, I am ${this.name}`);
//   }
// }

// const sasuke = new Person("Sasuke");
// sasuke.introduceSelf()

// class Professor extends Person {
//   teaches = "";

//   constructor(name, teaches) {
//     super(name);
//     this.teaches = teaches;
//   }

//   introduceSelf() {
//     // return `My name is ${this.name} & i will be teaching ${this.teaches}`;
//     console.log(`My name is ${this.name} & i will be teaching ${this.teaches}`);
//   }

//   #experience() {
//     console.log(`Master of 1000 jutsu.`);
//   }

//   masterOf() {
//     this.#experience();
//   }
// }

// const kakashi = new Professor("kakashi", "jutsu");
// kakashi.introduceSelf();
// kakashi.masterOf();
// kakashi.#experience(); // not accesible

// Character Class
class Character {
  name;
  universe;

  constructor(name, universe) {
    this.name = name;
    this.universe = universe;
  }
  selfIntro() {
    console.log(`Orewa ${this.name} from ${this.universe}`);
  }
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
  // console.log(characterService.getCharacters());
  if (newCharName.value !== "" && newUniverseName.value !== "") {
    const newChar = new Character(newCharName.value, newUniverseName.value);
    // console.log(newChar);
    // Instances creation for character
    characterService.addCharacter(newChar);

    // console.log("NinjasDB :", characterService.getCharacters());
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
