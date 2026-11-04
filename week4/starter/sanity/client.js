import { createClient } from "next-sanity";
import { projectId, dataset } from "./env";

// The thing we use to ask Sanity for data
export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-10-01",
  useCdn: false, // always get the latest data, so Studio edits show up instantly
});
