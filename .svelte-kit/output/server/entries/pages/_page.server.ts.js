import { t as timeline } from "../../chunks/data.js";
const load = async () => {
  const streamed = new Promise(
    (res) => setTimeout(() => res("SSR payload hydrated · streamed note arrived late, page stayed interactive"), 1200)
  );
  return { timeline, streamed };
};
const actions = {
  contact: async ({ request }) => {
    const { z } = await import("zod");
    const { fail } = await import("@sveltejs/kit");
    const schema = z.object({
      name: z.string().min(2, "Name needs 2+ chars"),
      email: z.string().email("Valid email required"),
      message: z.string().min(10, "Tell me a bit more (10+ chars)")
    });
    const fd = await request.formData();
    const raw = Object.fromEntries(fd);
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      return fail(400, { ok: false, errors: parsed.error.flatten().fieldErrors, values: raw });
    }
    return { ok: true, name: parsed.data.name };
  }
};
export {
  actions,
  load
};
