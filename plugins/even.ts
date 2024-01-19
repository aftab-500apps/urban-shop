export default defineNuxtPlugin((nuxtApp) => {
  let evenArr: number[] = [];
  nuxtApp.even = (maxNum: number) => {
    evenArr = [];
    for (let i = 1; i <= maxNum; i++) {
      if (i % 2 === 0) {
        evenArr.push(i);
      }
    }
    return evenArr;
  };
});
