<template>
    <div class="container">
        <div class="mt-3">
      <b-pagination-nav  number-of-pages="10" :base-url="baseUrl" use-router align="center"></b-pagination-nav>
    </div>
    </div>
</template>

<script>
export default {
  props: ['base-url']
}
</script>