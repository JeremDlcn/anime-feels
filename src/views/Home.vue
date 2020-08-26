<template>
  <section class="home">
    <header-bar/>
    <section class="home-body">
      <div class="limit">
        <hook-words/>
        <search-bar/>
      </div>
      <predefined/>
    </section>
    <div class="deco--tall"></div>
  </section>
</template>

<style lang="stylus">
  .home
    position: relative
  .home-body
    padding: 0 15vw
    margin-bottom: 2rem

  .limit
      max-width: 800px
      margin: 0 auto
  .deco--tall
    background-color: var(--primary)
    height: 10rem
    width: 2rem
    position: absolute
    left: 0

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
