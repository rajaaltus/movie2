<template>
  <v-container>
    <h2>Latest Movies</h2>
 <v-sheet
    class="mx-auto"
    elevation="8"
   
  >
    <v-slide-group
      v-model="model"
      show-arrows
    >
      <v-slide-item
        v-for="(movie, i) in movies"
        :key="i"
        class="ma-2"
      >
        <v-card
          height="400"
          width="275"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <nuxt-link :to="`/movie/${movie.id}`">
            <v-img
              :src="movie.medium_cover_image"
              lazy-src="/placeholder.png"
              class="white--text align-end mx-4 pa-2"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="400"
              width="275"
            >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
            <v-card-title v-text="movie.title"></v-card-title>
            </v-img>
            </nuxt-link>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
  <v-divider class="mb-12"></v-divider>
   <h2>Upcoming Movies</h2>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {

  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ]
      
    }
  },
  computed: {
    ...mapState({
      movies: state => state.movies.data.movies
    })
  },
  async fetch({store}) {
    let queryString = ''
    await store.dispatch('setMovies', {qs: queryString})
  }

}
</script>

