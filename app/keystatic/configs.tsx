import { collection, config as configs, fields } from "@keystatic/core";

export const config = configs({
  storage: {
    kind: "github",
    repo: "trangcongthanh/remix-vite-cloudflare",
  },
  collections: {
    posts: collection({
      label: "Post",
      slugField: "title",
      schema: {
        title: fields.slug({
          name: { label: "Title" },
        }),
        content: fields.mdx({
          label: "Content",
        }),
      },
    }),
  },
});
