import { json, type MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/keystatic/reader";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix! Using Vite and Cloudflare!",
    },
  ];
};

export const loader = async () => {
  const posts = await getPosts();
  return json({
    posts,
  });
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix (with Vite and Cloudflare)</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>{post.entry.title}</li>
        ))}
      </ul>
    </div>
  );
}
