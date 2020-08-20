<template>
  <div class="home">
    <header-bar/>
    <hook-words/>
    <search-bar/>
  </div>
</template>

<style lang="stylus">
  .home
    padding: 0 15vw
</style>

<script>
// @ is an alias to /src
import HeaderFeels from '@/components/header-feels.vue';
import Searchbar from '@/components/search-bar-feels.vue';
import HookWords from '@/components/hook-words-feels.vue';

export default {
  name: 'Home',
  components: {
    'header-bar': HeaderFeels,
    'search-bar': Searchbar,
    'hook-words': HookWords
  }
}
</script>
