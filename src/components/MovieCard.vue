<template>
    <div @click="getDetails" class="movie">  
        <h3>{{ movie.title }}</h3>
        <p><span>Episode:</span> {{ movie.episode_id }}</p>
        <p><span>Director:</span> {{ movie.director }}</p>
        <p><span>Release date:</span> {{ movie.release_date }}</p>
        <p><span>Producer:</span> {{ movie.producer }}</p>
    </div>

</template>

<script>
export default {
    name: 'MovieCard',
    props: {
      movie: {
        type: Object
      }
    },
    methods: {
        getDetails() {

        }
    },
}
</script>

<style>
.movie {
    background-color: #101685;
    box-shadow: 0 0.rem 0.5rem rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    border: 5px solid gray;
    color: white;
    display: grid;
    margin: 1.6rem;
    padding: 1rem;
    position: relative;
    overflow: hidden;
    height: 225px;
    width: 250px;
}

p > span {
    font-weight: bold;
}
</style>