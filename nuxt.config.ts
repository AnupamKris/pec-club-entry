// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ["nuxt-icon", "nuxt-vuefire"],
  vuefire: {
    config: {
      apiKey: "AIzaSyAFwipPKdJgWwgsAb9mRWPs0UClw70zuII",
      authDomain: "prathyusha-clubs.firebaseapp.com",
      projectId: "prathyusha-clubs",
      storageBucket: "prathyusha-clubs.appspot.com",
      messagingSenderId: "270917876326",
      appId: "1:270917876326:web:c7ae2a6e8b41414b698ba7",
    },
  },
});