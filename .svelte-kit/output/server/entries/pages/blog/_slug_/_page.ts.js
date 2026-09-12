import { a as posts } from "../../../../chunks/data.js";
import { error } from "@sveltejs/kit";
const prerender = true;
async function entries() {
  return posts.map((p) => ({ slug: p.slug }));
}
const load = async ({ params }) => {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) error(404, "Note not found");
  const current = post;
  const html = current.body.split("\n\n").map((block) => block.startsWith("## ") ? `<h2>${block.slice(3)}</h2>` : `<p>${block.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br/>")}</p>`).join("");
  return { post: { ...current, html } };
};
export {
  entries,
  load,
  prerender
};
