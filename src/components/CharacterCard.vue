<template>
    <div class="character">  
        <h3 v-if="character == null"> - - - </h3>
        <h3 v-else>{{ characterData.name }}</h3>
    </div>

</template>

<script>
export default {
    name: 'CharacterCard',
    props: {
      charUrl: {
        type: String
      }
    },
    data() {
        return {
            characterData: null
        }
    },
    methods: {
        getCharacterDetails() {
            fetch(`${this.charUrl}`)
            .then(res => res.json())
            .then(data => {
                this.characterData = data;
            });
        }
    },
    computed: {
        character() {
            return this.characterData;
        }
    },
    mounted() {
        this.getCharacterDetails();
    },
}
</script>

<style>
.character {
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
    text-align: center;
    width: 250px;
}

p > span {
    font-weight: bold;
}
</style>