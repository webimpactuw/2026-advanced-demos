"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { projectId, dataset } from "./sanity/env";
import product from "./sanity/schemas/product";

// Sanity Studio lives inside our site at /studio
export default defineConfig({
  title: "Shop",
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: [product] },
  plugins: [structureTool(), visionTool()],
});
