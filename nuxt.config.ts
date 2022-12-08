// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "nuxt-icon",
    "nuxt-headlessui",
  ],
  image: {
    strapi: {
      baseURL: "http://localhost:1337",
    },
  },
  headlessui: {
    prefix: "Headless",
  },
});
