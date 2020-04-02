<template>
   <v-card
    :loading="loading"
    class="d-inline-block mx-auto"
    max-width="90%"
  >
  <v-container>
    <v-row justify="space-between">
      <v-col cols="12" md="12" lg="4">
      <v-img
        height="750"
        :src="movie.large_cover_image"
        lazy-src="/placeholder.png"
        width="500"
        contain
      >
      <template v-slot:placeholder>
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
      </v-img>
    </v-col>
    <v-col cols="12" md="12" lg="8">
      <v-card-title>{{movie.title}}</v-card-title>
        <v-card-text>
          <v-row
            align="center"
            class="mx-0 fill-height"
            
          >
            <v-rating
              :value="movie.rating/2"
              color="amber"
              dense
              half-increments
              readonly
              size="24"
            ></v-rating>

            <div class="grey--text ml-4"><strong>{{movie.rating}}</strong></div>
          </v-row>

          <div class="my-1 subtitle-1">
            {{movie.year}}
          </div>
        </v-card-text>
      <v-card-text>
      <div class="subtitle-1">{{movie.description_intro}}</div>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>

      <v-card-title>Torrents</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="light-green black--text"
          column
        >
          <v-chip v-for="(torrent, i) in movie.torrents" :key="i">
           <a :href="torrent.url">{{torrent.quality}}</a>
          </v-chip>
        </v-chip-group>
        <youtube :video-id="movie.yt_trailer_code" player-width="100%"></youtube>
      </v-card-text>

      <v-card-actions>
        
      </v-card-actions>
    </v-col>
    </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  head() {
    return {
      title: "Movie Browser" 
    }
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),
  computed: {
    ...mapState({
      movie: state => state.movie.data.movie
    })
  },
  async fetch ({store, params}) {
    let queryString = '';
    queryString = params.id;
    await store.dispatch('setMovie', {qs: queryString})
  },
  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>
