<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Paginate />
        <v-row align="left" justify="space-between">
          <v-col cols="12" lg="3" md="12" v-for="(movie, i) in movies.movies" :key="i">
            <v-card
              
              class="mx-auto ma-2"
              max-width="350"
              max-height="550"
            >
              <nuxt-link :to="`/movie/${movie.id}`">
              <v-card-title class="lightbox white--text">
                <span v-if="active"> {{movie.title}} </span>
              </v-card-title>
              <v-hover>
                 <template v-slot:default="{ hover }">
              <v-img
                :src="movie.medium_cover_image"
                height="400"
                width="350"
                cover
              >
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="#036358"
                  align="center"
                >
                 
                  <v-btn>View Details</v-btn>
                </v-overlay>
              </v-fade-transition>
              </v-img>
                 </template>
              </v-hover>
              </nuxt-link>
              

              <v-card-subtitle>
                {{movie.year}}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn text>Share</v-btn>

                <v-btn
                  color="purple"
                  text
                >
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        
        </v-row>
        <Paginate />
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Paginate from '@/components/Paginate'
export default {
  components: {
    Paginate
  },
  data: () => ({
    show: false,
    hover: false,
    page: 1
  }),
  computed: {
    ...mapState({
      movies: state => state.movies.data
    })
  },
  async fetch ({ store, params }) {
    let queryString = '';
    queryString = 'limit=12';
    await store.dispatch('setMovies', {qs: queryString})
  }
}
</script>

<style scoped>
.lightbox {
    box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }
</style>