<template>
  <SubNavbar :links="fccNavLinks" />
  <CommonHeading class="dark:bg-slate-900 p-4">Latest Topics</CommonHeading>

  <!-- ! pagination -->
  <div class="pt-4 flex justify-center items-center dark:bg-slate-900">

    <CommonButton
      @click="prevPage"
      :disabled="startIndexPage === 0"
      :class="{
        'bg-gray-300': startIndexPage === 0,
        'bg-red-400': startIndexPage !== 0,
        'text-gray-500': startIndexPage === 0,
        'text-white': startIndexPage !== 0,
        'hover:bg-red-600': startIndexPage !== 0,
        'cursor-not-allowed': startIndexPage === 0,
      }"
      class="px-4 py-2 mx-2 mb-10 text-white rounded"
    >
      Prev Page
    </CommonButton>

    <CommonButton
      @click="nextPage"
      :disabled="endIndexPage === topics.length"
      :class="{
        'bg-gray-300': endIndexPage === topics.length,
        'bg-red-400': endIndexPage !== topics.length,
        'text-gray-500': endIndexPage === topics.length,
        'text-white': endIndexPage !== topics.length,
        'hover:bg-red-600': endIndexPage !== topics.length,
        'cursor-not-allowed': endIndexPage === topics.length,
      }"
      class="px-4 py-2 mx-2 mb-10 text-white rounded"
    >
      Next Page
    </CommonButton>
  </div>

  <div class="dark:bg-slate-900 pb-8">
    <CommonLoader v-if="fccLoader" />
    <table class="w-4/5 m-auto shadow-sm shadow-red-500">
      <thead class="bg-red-400 text-white">
        <tr>
          <th class="py-2 px-4">Topics</th>
          <th class="py-2 px-4">Replies</th>
          <th class="py-2 px-4">Views</th>
          <th class="py-2 px-4">Activity</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="item in topics.slice(startIndexPage, endIndexPage)"
          :key="item.id"
          class="border-b border-gray-300"
        >
          <td
            class="py-2 px-4 h-20 flex flex-col justify-center items-start gap-1"
          >
            <a
              :href="`${forumTopicUrl}${item.slug}/${item.id}`"
              target="_blank"
              class="text-red-400 font-bold rounded hover:underline"
            >
              {{ item.title }}
            </a>

            <span class="p-1 border-2 border-red-100 dark:text-slate-100">{{
              forumCategory(item.category_id)
            }}</span>
          </td>
          <td class="py-2 px-4 text-center dark:text-slate-100">
            {{ item.posts_count - 1 }}
          </td>
          <td class="py-2 px-4 text-center dark:text-slate-100">
            {{ viewCount(item.views) }}K
          </td>
          <td class="py-2 px-4 text-center dark:text-slate-100">
            {{ timeAgo(item.bumped_at) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
  middleware: "auth",
});

import { fccNavLinks } from "~/data/common.json";

import { ref, onMounted } from "vue";
const forumLatest = "https://forum-proxy.freecodecamp.rocks/latest";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";

const topics = ref([]);
const users = ref([]);
const fccLoader = ref(false);

onMounted(async () => {
  try {
    fccLoader.value = true;
    const res = await fetch(forumLatest);
    const data = await res.json();
    topics.value = data.topic_list.topics;
    users.value = data.users;

    // console.log(topics.value);
  } catch (err) {
    console.error(err);
  } finally {
    fccLoader.value = false;
  }
});

const allCategories = {
  299: { category: "Career Advice" },
  409: { category: "Project Feedback" },
  417: { category: "freeCodeCamp Support" },
  421: { category: "JavaScript" },
  423: { category: "HTML - CSS" },
  424: { category: "Python" },
  432: { category: "You Can Do This!" },
  560: { category: "Backend Development" },
};

const forumCategory = (id) => {
  const selectedCategory = allCategories[id] || { category: "General" };
  return selectedCategory.category;
};

const timeAgo = (time) => {
  const currentTime = new Date();
  const lastPost = new Date(time);

  const timeDifference = currentTime - lastPost;
  const msPerMinute = 1000 * 60;

  const minutesAgo = Math.floor(timeDifference / msPerMinute);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  }

  if (hoursAgo < 24) {
    return `${hoursAgo}h ago`;
  }

  return `${daysAgo}d ago`;
};

const viewCount = (views) => {
  const thousands = Math.floor(views / 1000);

  return views >= 1000 ? `${thousands}k` : views.toString();
};

const endIndexPage = ref(10);
const startIndexPage = ref(0);

const nextPage = () => {
  startIndexPage.value += 10;
  endIndexPage.value += 10;
};

const prevPage = () => {
  startIndexPage.value -= 10;
  endIndexPage.value -= 10;
};
</script>
