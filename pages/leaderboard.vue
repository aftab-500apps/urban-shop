<template>
  <Heading>Latest Topics</Heading>
  <div class="p-3">
    <table class="w-70% m-auto rounded-lg shadow-lg shadow-red-100 mt-4">
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
          v-for="item in topics"
          :key="item.id"
          class="border-b border-gray-300"
        >
          <td class="py-2 px-4">
            <a
              :href="`${forumTopicUrl}${item.slug}/${item.id}`"
              class="text-red-400 font-bold hover:underline"
            >
              {{ item.title }}
            </a>
            <br />
            <span class="m-2 p-1 border-2 border-red-100">{{
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
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
  middleware: "auth",
});

import { ref, onMounted } from "vue";

const forumLatest = "https://forum-proxy.freecodecamp.rocks/latest";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

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

const topics = ref([]);
const users = ref([]);

onMounted(async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    topics.value = data.topic_list.topics;
    users.value = data.users;
  } catch (err) {
    console.error(err);
  }
});
</script>
