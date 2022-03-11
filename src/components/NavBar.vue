<template>
    <nav class="navbar">
        <router-link to="/">            
            <img class="navbar__icon" src="@/assets/r2d2.svg" alt="r2d2 icon">
        </router-link>
        <hr class="navbar__line">
    </nav>
</template>

<script>

export default {
  name: 'NavBar',
  props: {
    msg: String
  },

}
</script>

<style scoped>
.navbar {
    background-color: #101685;
    border-bottom: 5px solid gray;
    display: grid;
    align-items: center;
    height: 150px;
    padding: 0 1rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
}

.navbar__icon {
    margin-top: 0.5rem;
    justify-self: center;
    margin-left: 3.5rem;
}

.navbar__line {
    background-color: gray;
    border: none;
    border-radius: 5%;
    height: 5px;
    align-self: end;
    justify-self: center;
    margin-bottom: 20px;
    width: 100%;
}

hr {
    background-color: gray;
    height: 5px;
    width: 100%;
}

div a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}

a.router-link-exact-active {
    color: #42b983;
}

</style>