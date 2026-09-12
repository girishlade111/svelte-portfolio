import { a as posts } from "../../../chunks/data.js";
const prerender = true;
async function entries() {
  return posts.map((p) => ({ slug: p.slug }));
}
export {
  entries,
  prerender
};
