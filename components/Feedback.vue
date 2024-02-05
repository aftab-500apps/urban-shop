<template>
  <div>
    <h3 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-slate-500 dark:text-slate-100">
      Provide Feedback
    </h3>
    <div class="flex justify-center m-auto mt-4 items-center gap-2">
      <input v-model="feedback" class="border-2 rounded-lg p-2 font-inherit"/>
      <CommonButton
        class="flex justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
        @click="sendFeedback">
        Send Feedback
      </CommonButton>
    </div>

    <div class="mt-4">
      <ul class="px-4 overflow-auto w-1/2 m-auto shadow-md shadow-red-500 rounded-lg">
        <li v-for="(feedback, index) in getFeedbacks()" :key="index" class="feedback-item">
          <div class="flex justify-between items-center">
            <span class="text-xl text-slate-500 capitalize">{{ feedback.msg }}</span>
            <button @click="removeFeedback(index)" class="text-red-500 hover:text-red-700">Remove</button>
          </div>
          <small class="text-gray-500">{{ feedback.timestamp }}</small>
        </li>
      </ul>
    </div>

    <div class="mt-2 text-center text-sm text-gray-600 dark:text-slate-100">
      Total Feedbacks: {{ getFeedbacks().length }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const feedbackGenerator = () => {
  const feedback = ref("");
  let feedbacks = ref([]);

  const sendFeedback = () => {
    if (feedback.value.trim() !== "") {
      feedbacks.value.push({
        msg: feedback.value,
        timestamp: new Date().toLocaleString(),
      });
      feedback.value = "";
    }
  };

  const removeFeedback = (index) => {
    feedbacks.value.splice(index, 1);
  };

  const getFeedbacks = () => {
    return feedbacks.value;
  };

  return { feedback, sendFeedback, removeFeedback, getFeedbacks };
};

const { feedback, sendFeedback, removeFeedback, getFeedbacks } = feedbackGenerator();
</script>

<style scoped>
.feedback-item {
  padding: 10px;
  /* border-bottom: 1px solid #e2e2e2; */
}

.feedback-item button {
  cursor: pointer;
}
</style>
