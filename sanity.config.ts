import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import Logo from "./app/components/Logo";
import StudioNavbar from './app/components/StudioNavbar'
export default defineConfig({
  basePath: "/studio",
  name: "default",
  title: "myresume studio",

  projectId: "54o3nk6f",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

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
