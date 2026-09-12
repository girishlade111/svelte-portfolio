import { a as posts } from "../../../chunks/data.js";
const prerender = true;
const load = async () => {
  return { posts: posts.map(({ slug, title, date, excerpt }) => ({ slug, title, date, excerpt })) };
};
export {
  load,
  prerender
};
