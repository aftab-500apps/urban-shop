<template>
  <h3
    class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-slate-500"
  >
    Provide Feedback
  </h3>
  <div class="flex justify-center m-auto mt-4 items-center gap-2">
    <textarea
      v-model="feedback"
      class="border-2 rounded-lg p-2 font-inherit"
    ></textarea>
    <Button
      class="flex justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500"
      @click="sendFeedback"
      >Send Feedback</Button
    >
  </div>

  <div>
    <ul
      class="h-44 border-2 overflow-auto w-1/2 m-auto mt-4 shadow-md shadow-red-100 rounded-lg "
    >
      <List
        v-for="feedback in getFeedbacks()"
        class="text-xl"
        :msg="feedback"
        :key="feedback"
      />
    </ul>
  </div>
</template>

<script setup>
const feedbackGenerator = () => {
  const feedback = ref("");
  let feedbacks = ref([]);

  const sendFeedback = () => {
    if (feedback.value.trim() !== "") {
      feedbacks.value.push(feedback.value);
      console.log(`feedback sent: ${feedback.value}`);
      feedback.value = "";
    }
  };

  const getFeedbacks = () => {
    return feedbacks.value;
  };

  return { feedback, sendFeedback, getFeedbacks };
};

const { feedback, sendFeedback, getFeedbacks } = feedbackGenerator();

// const outerFunction = () => {
//   let outerVariable = "I am outer variable";

//   const innerFunction = () => {
//     console.log(outerVariable);
//   };

//   return innerFunction;
// };

// const closure = outerFunction();
// closure();

// console.log("Running");
</script>
