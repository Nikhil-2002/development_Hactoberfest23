<template>
    <NavPage/>
    <router-view></router-view>
    <FooterPage/>
</template>

<script>

import NavPage from './components/NavPage.vue';
import FooterPage from './components/FooterPage.vue';
export default {
    name: 'App',
    components: {
    NavPage,
    FooterPage

}
}

</script>

<style>
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

body {
  overflow-y: scroll;
  background-color: #f8f9fa;
}


body::-webkit-scrollbar {
    display: none;
}


body {
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}

</style>
