<template>
  <div class="home">
    <header-bar/>
    <search-bar/>
    <router-link to="/result">Vers le résultat</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header-feels.vue';
import Searchbar from '@/components/search-bar-feels.vue';

export default {
  name: 'Home',
  components: {
    'header-bar': Header,
    'search-bar': Searchbar
  }
}
</script>
