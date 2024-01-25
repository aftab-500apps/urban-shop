<template>
  <SubNavbar />
  <Heading>Latest Topics</Heading>
  <div class="p-3">
    <table class="w-full m-auto rounded-lg shadow-lg shadow-red-100 mt-4">
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

            <span class="p-1 border-2 border-red-100">{{
              forumCategory(item.category_id)
            }}</span>
          </td>
          <td class="py-2 px-4 text-center">{{ item.posts_count - 1 }}</td>
          <td class="py-2 px-4 text-center">{{ viewCount(item.views) }}K</td>
          <td class="py-2 px-4 text-center">
            {{ timeAgo(item.bumped_at) }}
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-4 flex justify-center items-center">
      <Button
        @click="prevPage"
        :disabled="startIndexPage === 0"
        class="px-4 py-2 mx-2 mb-10 bg-red-400 text-white rounded hover:bg-red-500"
      >
        Prev Page
      </Button>
      <Button
        @click="nextPage"
        :disabled="endIndexPage === topics.length"
        class="px-4 py-2 mx-2 mb-10 bg-red-400 text-white rounded hover:bg-red-500"
      >
        Next Page
      </Button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
  middleware: "auth",
});

import { ref, onMounted } from "vue";

const forumLatest = "https://forum-proxy.freecodecamp.rocks/latest";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";

const topics = ref([]);
const users = ref([]);

onMounted(async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    topics.value = data.topic_list.topics;
    users.value = data.users;

    // console.log(topics.value);
  } catch (err) {
    console.error(err);
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
