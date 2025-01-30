import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default {
  integrations: [react(), tailwind()],
  devToolbar: {
    enabled: false, // Desactiva la Astro Dev Toolbar
  },
};
