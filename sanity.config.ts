import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { Logo, StudioNavbar, } from "./components";
import { myTheme } from "./theme";
import { getDefaultDocumentNode } from "./structure";

export default defineConfig({
  basePath: "/studio",
  name: "default",
  title: "myresume studio",

  projectId: "54o3nk6f",
  dataset: "production",

  plugins: [deskTool({ defaultDocumentNode: getDefaultDocumentNode }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
