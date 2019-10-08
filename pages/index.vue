<template>
  <div class="container flex flex-col items-center mx-auto py-24 md:block">
    <h1 class="font-heading uppercase text-4xl mb-8 border-b-4 border-blue-900">Popular Games</h1>
    <!-- flex-wrap: especifica si los elementos "hijos" son obligados a permanecer en una misma línea o pueden fluir en varias líneas.--> 
    <div class="game-container flex flex-col sm:flex-row  sm:flex-wrap sm:-mx-4">
      <!--Para arriba md:w-1/5, para abajo w-full--> 
      <nuxt-link
        :to="`/games/${game.id}`"
        v-for="game in games"
        :key="game.id"
        class="w-full sm:w-1/2 md:w-1/5 px-4 mb-12 no-underline"
      >
        <img
          class="shadow-lg rounded-lg h-64"
          :src="game.cover.url.replace('t_thumb', 't_cover_big')"
          alt="cover"
        />
        <div
          class="text-black font-semibold text-lg overflow-hidden whitespace-no-wrap overflow-dots"
        >{{game.name}}</div>
        <div
          class="text-gray-500 text-base overflow-hidden whitespace-no-wrap overflow-dots pb-1"
        >{{game.genres[0].name}}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  asyncData({ params, error }) {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    return axios
      .get(
        `${proxyUrl}https://api-v3.igdb.com/games/?fields=name,genres.name,cover.url,popularity&order=popularity:desc`
      )
      .then(res => {
        return { games: res.data };
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style>

</style>
