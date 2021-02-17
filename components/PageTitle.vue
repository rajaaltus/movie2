<template>
  <div class="app-page-title">
    <div>
      <h1 class="text-4xl font-semibold py-4 capitalize">{{ title }}</h1>
    </div>
    <div class="flex items-center justify-start">
      <button class="bg-gray-500 w-12 h-12 rounded-l-lg flex items-center justify-center hover:bg-gray-600 duration-200 focus:outline-none" @click="handlePrevious">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-6 h-6">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button class="bg-gray-500 w-12 h-12 rounded-r-lg flex items-center justify-center hover:bg-gray-600 duration-200 focus:outline-none" @click="handleNext">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-6 h-6">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      page: 0,
    };
  },
  created() {
    this.page = 1;
  },
  methods: {
    handlePrevious() {
      if (this.page == 1) return this.page;
      else {
        this.page--;
        this.$router.push("/" + this.title + "/" + this.page);
      }
    },
    handleNext() {
      this.page++;
      this.$router.push("/" + this.title + "/" + this.page);
    },
  },
};
</script>
