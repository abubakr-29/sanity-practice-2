import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "e3v1h0oj",
  dataset: "production",
  apiVersion: "2025-07-21",
  useCdn: false,
});
