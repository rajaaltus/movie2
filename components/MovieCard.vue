<template>
  <div class="w-full rounded-lg overflow-hidden shadow-lg bg-gray-600 relative">
    <nuxt-link :to="`/movie/${movie_id}`">
      <nuxt-img fit="cover" class="w-full" :src="image" :alt="title" loading="lazy" />
    </nuxt-link>
    <div class="px-2 py-4">
      <div>
        <span class="text-sm font-light tracking-wide">{{ year }}</span>
        <div class="font-bold text-lg mb-2 truncate">{{ title }}</div>
        <ul class="app-genres">
          <li v-for="(item, index) in genres" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="p-2 pb-4">
      <a class="app-download" :href="download.url" v-for="(download, index) in downloads" :key="index">{{ download.quality }}</a>
    </div>
    <div class="app-rating">{{ rating }}</div>
  </div>
</template>

<script>
export default {
  props: {
    year: {
      type: Number,
    },
    movie_id: {
      type: Number,
      required: true,
    },
    genres: {
      type: Array,
    },
    downloads: {
      type: Array,
      required: true,
    },
    rating: {
      type: Number,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
};
</script>
