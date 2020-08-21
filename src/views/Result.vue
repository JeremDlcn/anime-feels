<template>
  <div class="result">
    <header-bar/>
    <search-bar class="limit"/>
    <wall-container/>
  </div>
</template>

<style lang="stylus">
@import "../assets/stylus/var.styl";
  @media (max-width: tablet)
    .result
      padding: 0 15vw
</style>

<script>
import HeaderFeels from '@/components/header-feels.vue';
import Searchbar from '@/components/search-bar-feels.vue';
import Wall from '@/components/wall-feels.vue';


export default {
  name: 'Result',
  components: {
    'header-bar': HeaderFeels,
    'search-bar': Searchbar,
    'wall-container': Wall
  }
}
</script>