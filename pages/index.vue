<template>
  <div class="bg-gray-800 text-white py-4 pb-4">
    <section class="mx-auto max-w-7xl px-4 md:px-0">
      <h1 class="text-4xl font-semibold mx-auto py-4">Recents</h1>
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <MovieCard v-for="movie in movies" :key="movie.id" :movie_id="movie.id" :title="movie.title" :genres="movie.genres" :description="movie.summary" :image="movie.medium_cover_image" :rating="movie.rating" :downloads="movie.torrents" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  head() {
    return {
      title: "Movie Browser",
    };
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      movies: (state) => state.movies.data.movies,
    }),
  },
  async fetch({ store }) {
    let queryString = "";
    await store.dispatch("setMovies", { qs: queryString });
  },
};
</script>
