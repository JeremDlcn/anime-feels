<template>
  <section class="home">
    <header-bar/>
    <section class="home-body">
      <div class="home-body-top">
        <hook-words/>
        <search-bar/>
      </div>
      <predefined/>
    </section>
  </section>
</template>

<style lang="stylus">
  .home-body
    padding: 0 15vw
    &-top
      max-width: 800px
      margin: 0 auto

</style>

<script>
// @ is an alias to /src
import HeaderFeels from '@/components/header-feels.vue';
import Searchbar from '@/components/search-bar-feels.vue';
import HookWords from '@/components/hook-words-feels.vue';
import Predefined from '@/components/predefined-feels.vue';

export default {
  name: 'Home',
  components: {
    'header-bar': HeaderFeels,
    'search-bar': Searchbar,
    'hook-words': HookWords,
    'predefined': Predefined
  }
}
</script>
