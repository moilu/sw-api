<template>
  <div class="main-container">

  <section v-if="movie.title == null">Loading...</section>
  <section v-else class="main-container__info">  
    <h1>{{ movie.title }}</h1>
    <p><span>Episode:</span> {{ movie.episode_id }}</p>
    <p><span>Release date:</span> {{ movie.release_date }}</p>
    <p><span>Director:</span> {{ movie.director }}</p>
    <p><span>Producer:</span> {{ movie.producer }}</p>
  </section> 

  <h2>Opening crawl</h2>
  <section class="main-container__opening-text">
      <p v-if="movie.opening_crawl == null">Loading...</p>
      <p v-else>{{ movie.opening_crawl }}</p>
  </section>

  <h2>Characters</h2>
  <section class="main-container__grid">
      <div >
      <router-link 
        :to="{ name: 'CharacterDetails', 
        params: { id: movie.episode_id }}" 
        v-for="(character, index) in movie.characters" 
        :key="index">
        <character-card :charUrl="character"/>
      </router-link>
      </div>
  </section>
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'

export default {
  name: 'MovieDetails',
  components: {
    CharacterCard
  },
  data() {
    return { 
      movie: [],
      characters: []
    }
  },
  methods: {
    getMovie() {
      fetch(`https://swapi.dev/api/films/${1}/`)
      .then(res => res.json())
      .then(data => {
          this.movie = data;
      });
    },
  },
  mounted() {
    this.getMovie();
  },
  computed: {

  }
}
</script>

<style scoped>

.main-container {
    color: black;
    padding: 175px 32px 0;
}

.main-container__opening-text {
    background-color: #1f1f1f;
    border: 5px solid gray;
    border-radius: 0.3rem;
    color: yellow;
    font-weight: bold;
    padding: 1rem;
}

.main-container__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 300px));
  justify-content: center;
  padding-bottom: 2rem;
  z-index: 0;
}

h2 {
  margin: 2rem 0 .5rem;
}

p > span {
    font-weight: bold;
}
</style>
