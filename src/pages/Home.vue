<template>
  <div class="main-container">
    <h1>Hello there!</h1>
    <section class="main-container__grid">
      <router-link :to="{ name: 'MovieDetails', params: { id: movie.episode_id, url: movie.url }}" v-for="(movie, index) in movies" :key="index">
        <MovieCard :movie="movie"/>
      </router-link>
    </section>

  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'Home',
  components: {
    MovieCard
  },
  data() {
    return { 
      movies: []
    }
  },
  methods: {
    getMovies() {
      fetch(`https://swapi.dev/api/films/`)
      .then(res => res.json())
      .then(data => {
          this.movies = data.results;
      });
    },
  },
  mounted() {
    this.getMovies();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 300px));
  justify-content: center;
  margin-top: 150px;
  z-index: 0;
}

h1 {
  color: black;
}
</style>
