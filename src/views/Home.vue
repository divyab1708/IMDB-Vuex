<template>
  <div class="home">
    <MovieGrid/>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieGrid from '@/components/movieGrid.vue'

export default {
  name: 'home',
  components: {
    MovieGrid
  }
}
</script>
