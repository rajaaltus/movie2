<template>
  <section class="bg-gray-800 w-full h-full min-h-screen">
    <div class="app-movie">
      <!-- <pre>{{ movie }}</pre> -->
      <div class="app-flex-start flex-col md:flex-row md:space-x-4">
        <div class="app-movie-poster">
          <img :src="movie.large_cover_image" :alt="movie.title" />
        </div>
        <div class="app-movie-details">
          <div class="app-movie-header">
            <div class="app-movie-title">{{ movie.title }}</div>
            <span>{{ movie.rating }}</span>
          </div>
          <p class="app-movie-description">{{ movie.description_full }}</p>
          <div>
            <ul class="app-movie-genres">
              <li v-for="(item, index) in movie.genres" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div>
            <ul class="app-movie-downloads">
              <li v-for="(item, index) in movie.torrents" :key="index">
                <a :href="item.url">{{ item.quality }}</a>
              </li>
            </ul>
          </div>
          <div class="app-spacer" />
          <div class="mt-8">
            <youtube v-if="movie.yt_trailer_code" :video-id="movie.yt_trailer_code" player-width="100%"></youtube>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  head() {
    return {
      title: "Movie Browser",
    };
  },
  computed: {
    ...mapState({
      movie: (state) => state.movie.data.movie,
    }),
  },
  async fetch({ store, params }) {
    let queryString = "";
    queryString = params.id;
    await store.dispatch("setMovie", { qs: queryString });
  },
};
</script>
