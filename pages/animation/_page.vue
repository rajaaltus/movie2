<template>
  <section class="max-w-7xl mx-auto text-white py-4 pb-4 min-h-screen">
    <PageTitle title="animation" />
    <div class="w-full grid grid-cols-5 gap-4">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie_id="movie.id" :title="movie.title" :genres="movie.genres" :description="movie.synopsis" :image="movie.medium_cover_image" :rating="movie.rating" :downloads="movie.torrents" />
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
      movies: (state) => state.movies.data.movies,
    }),
  },
  async fetch({ store, params }) {
    let queryString = "";
    queryString = `limit=10&genre=animation&page=${params.page}`;
    await store.dispatch("setMovies", { qs: queryString });
  },
};
</script>
