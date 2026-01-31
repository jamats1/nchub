/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/

import { config } from "dotenv";
import { defineCliConfig } from "sanity/cli";

// Load .env.local for Sanity CLI
config({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const organizationId = process.env.NEXT_PUBLIC_SANITY_ORG_ID;

if (!organizationId || !projectId || !dataset) {
  throw new Error(
    "NEXT_PUBLIC_SANITY_ORG_ID, NEXT_PUBLIC_SANITY_PROJECT_ID, or NEXT_PUBLIC_SANITY_DATASET is not set",
  );
}

export default defineCliConfig({
  app: {
    organizationId,
    entry: "./app/(admin)/admin/page.tsx",
  },
  api: { projectId, dataset },
  typegen: {
    path: ["./lib/sanity/queries/**/*.ts", "./lib/actions/**/*.ts", "./lib/hooks/**/*.ts", "./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    schema: "./schema.json",
    generates: "./sanity.types.ts",
    overloadClientMethods: false,
  },
});
