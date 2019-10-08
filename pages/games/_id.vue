<template>
  <div>
    <div class="hero bg-gray-600" :style="`background:url(${bgImage});background-size:cover;`">
      <div class="container mx-auto flex flex-col md:flex-row items-end pb-8" style="height:450px;">
        <!-- ocula el espacio 1/4 para la imagen suba -m24 -->
        <div class="w-full md:w-1/4"></div>
        <div class="w-full md:w-3/4 md:ml-12 mt-24 md:mt-2">
          <div class="w-full md:w-2/3 bg-title py-2 px-4 rounded-lg">
            <h1 class="font-heading text-white text-2xl md:text-3xl">{{game.name}}</h1>
            <div class="text-white">{{game.involved_companies[0].company.name}}</div>
          </div>
          <div class="w-1/3"></div>
        </div>
      </div>
    </div>
    <div class="container mx-auto flex flex-col md:flex-row">
      <div class="w-full md:w-1/4 -mt-32">
        <img
          class="mb-4 shadow-md rounded-lg"
          :src="game.cover.url.replace('t_thumb', 't_cover_big')"
          alt="cover"
        />
        <div class="mb-4">
          <span class="font-semibold">Platforms:</span>
          <span v-for="platform in game.platforms" :key="platform.id">{{platform.name}},</span>
        </div>

        <div class="mb-4">
          <span class="font-semibold">Released:</span>
          <span>{{new Date(game.first_release_date*1000).toDateString()}}</span>
        </div>
        <div class="mb-4" v-if="getWebSiteUrl">
          <a target="_blank" :href="getWebSiteUrl">Official Website</a>
        </div>
        <div class="mb-6" v-if="game.total_rating">
          <div class="text-5xl font-semibold">{{Math.round(game.total_rating) }}%</div>
          <div class="font-semibold">Overall Rating</div>
        </div>
      </div>
      <div class="w-full md:w-3/4 md:ml-12 py-8 leading-normal">
        <p class="mb-12">{{game.summary}}</p>
        <!-- flex flex-wrap, es como grid celda(table) -->
        <div class="flex flex-wrap -mx-4">
          <a
            href="#"
            v-for="(screenshot, index) in game.screenshots"
            :key="index"
            class="w-full md:w-1/4 px-4 mb-12 no-underline pic"
            @click="showImg($event, index)"
          >
            <img :src="screenshot.url.replace('t_thumb', 't_cover_big')" alt="screenshot" />
          </a>
        </div>
      </div>
    </div>
    <client-only>
      <vue-easy-lightbox :visible="visible" :index="index" :imgs="imgs" @hide="handleHide"></vue-easy-lightbox>
    </client-only>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // si se pasa el peyload, payload = cargautil, payload esta establecido en nuxt.config.js, en la seccion de generate:{...}.
  asyncData({ params, error, payload }) {
    if (payload) {
      const game = payload;
      const imgs = game.screenshots.map(screenshot => {
        return screenshot.url.replace("t_thumb", "t_1080p");
      });
      return { game, imgs, visible: false, index: 0 };
    }
    // si no  esta en generate:{..}, se obtiene de la api(dinamicamente).
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"; //cuando no deja acceder delsde localhost... a una api se soluciona mediante un prpoxy.
    return axios
      .get(
        `${proxyUrl}https://api-v3.igdb.com/games/${params.id}/?fields=name,cover.url,summary,platforms.name,first_release_date,screenshots.url,websites.url,websites.category,total_rating,involved_companies.company.name`
      )
      .then(res => {
        const game = res.data[0];
        const imgs = game.screenshots.map(screenshot => {
          return screenshot.url.replace("t_thumb", "t_1080p");
        });
        // console.log(imgs);

        return { game, imgs, visible: false, index: 0 };
      })
      .catch(e => {
        console.log(e);
      });
  },
  head() {
    return {
      title: this.game.name + " | Video Games"
    };
  },
  computed: {
    getWebSiteUrl() {
      if (this.game.websites && this.game.websites.length > 0) {
        let item = this.game.websites.filter(website => website.category === 1);
        if (item.length) return item[0].url;
        item = this.game.websites.filter(website => website.category === 2);
        if (item.length) return item[0].url;
      }
      return false;
    },
    bgImage() {
      return this.game.screenshots[
        Math.floor(Math.random() * (this.game.screenshots.length - 1))
      ].url.replace("t_thumb", "t_1080p");
    }
  },
  methods: {
    showImg(event, index) {
      event.preventDefault();
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      event.preventDefault();
      this.visible = false;
    }
  }
};
</script>
<style>
.bg-title {
  background: rgba(0, 0, 0, 0.5);
}
</style>