const useDebounce = (func: Function, delay: number) => {
  let timeoutID: any;
  return (...args: any[]) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default useDebounce;
