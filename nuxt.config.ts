// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Dev Tools (experimental)
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // Head Tag
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Where in the world?",
    },
  },
  //Modules
  modules: ["@pinia/nuxt",],
  
});
