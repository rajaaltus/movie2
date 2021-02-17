<template>
  <div class="max-w-7xl mx-auto text-white py-4 pb-4">
    <section>
      <PageTitle title="drama" />

      <div class="w-full grid grid-cols-5 gap-4">
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

  computed: {
    ...mapState({
      movies: (state) => state.movies.data.movies,
    }),
  },
  async asyncData({ store }) {
    let queryString = "limit=10&page=1";
    await store.dispatch("setMovies", { qs: queryString });
  },
};
</script>
