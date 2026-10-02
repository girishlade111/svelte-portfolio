import { t as timeline } from "../../chunks/data.js";
const load = async () => {
  const streamed = new Promise(
    (res) => setTimeout(() => res("SSR payload hydrated · streamed note arrived late, page stayed interactive"), 1200)
  );
  return { timeline, streamed };
};
export {
  load
};
