import { createReader } from "@keystatic/core/reader";
import { config } from "./configs";

const reader = createReader(process.cwd(), config);

export async function getPosts() {
  return reader.collections.posts.all({ resolveLinkedFiles: true });
}
