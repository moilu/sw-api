<template>
  <div class="main-container">

    <section v-if="character == null">Loading...</section>
    <section v-else class="main-container__info">  
        <h1>{{ character.name }}</h1>
        <p><span>Birth:</span> {{ character.birth_year }}</p>
        <p><span>Gender:</span> {{ character.gender }}</p>
        <p><span>Hair color:</span> {{ character.hair_color }}</p>
        <p><span>Eye color:</span> {{ character.eye_color }}</p>
    </section> 


    <h2>Homeworld</h2>
    <section v-if="homeworld == null">Loading...</section>
    <section v-else class="main-container__homeworld">
        <p><span>Name:</span> {{ homeworld.name }}</p>
        <p><span>Population:</span> {{ homeworld.population }}</p>
        <p><span>Climate:</span> {{ homeworld.climate }}</p>
        <p><span>Gravity:</span> {{ homeworld.gravity }}</p>
    </section>

    <h2>Related Movies</h2>
    <section class="main-container__grid">
        <div v-for="(movie, index) in films" :key="index">
            <MovieCard :movie="movie"/>
        </div>
    </section>
  
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';


export default {
  name: 'MovieDetails',
  components: {
      MovieCard
  },
  data() {
    return { 
      characterData: null,
      homeworld: null,
      films: []
    }
  },
  methods: {
    getCharacterDetails() {
      fetch(`https://swapi.dev/api/people/1/`)
      .then(res => res.json())
      .then(data => {
        this.characterData = data;
        this.getHomeWorld();
        this.getRelatedFilms();
      });
    },
    getHomeWorld() {
        fetch(`${this.character.homeworld}`)
        .then(res => res.json())
        .then(data => {
            this.homeworld = data;
        });
    },
    getRelatedFilms() {
        let films = this.character.films;

        films.forEach(film => {
            fetch(`${film}`)
            .then(res => res.json())
            .then(data => {
                this.films.push(data);
            });
        });
    }

  },
  mounted() {
    this.getCharacterDetails();    
  },
  computed: {
    character() {
        return this.characterData;
    }
  }
}
</script>

<style scoped>

.main-container {
    color: black;
    padding: 175px 32px 0;
}

.main-container__homeworld {
    background-color: #1f1f1f;
    border: 5px solid gray;
    border-radius: 0.3rem;
    color: #0effff;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 300px));
    font-family: monospace;
    font-size: 1.2rem;
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
