import { handleLoader } from "@keystatic/remix/api";
import { config } from "~/keystatic/configs";
import { LoaderFunction, ActionFunction } from "@remix-run/cloudflare";

const options = {
  clientId: "Iv1.8e88f17cce5b3066",
  clientSecret: "1cd18811a6ae4ff88c9cdbf16c4cd345de56fc5c",
  secret: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
};

export const loader: LoaderFunction = (args) =>
  handleLoader({ config, ...options }, args);
export const action: ActionFunction = (args) =>
  handleLoader({ config, ...options }, args);
