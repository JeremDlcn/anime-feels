<script>
  export default {
    name: 'Searchbar',
    props: {
      msg: String
    }
  }
</script>

<template>
  <section class="search">
    <div>
      <input type="text" name="search-bar" class="search-bar" aria-label="champ de recherche">
      <p v-if="first">Entrez le nom de l'anime ici</p>
    </div>
    <button class="search-button" aria-label="bouton de recherche">
      <p v-if="first">Rechercher</p>
      <img src="@/assets/search.webp" class="search-icon" alt="recherche">
    </button>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import "../assets/stylus/var.styl";
  .search
    height: 3rem
    display: flex
    width: 100%
    margin-top: 4rem
    div
      width: 100%
      height: 100%

  .search-bar
    border: none
    background-color: var(--dark)
    width: 100%
    height: 100%
    border-radius: 7px
    padding: 0 .7rem
    font-size: 1.2rem
    color: var(--primary)
    outline: none


  .search-bar:focus
    box-shadow: 0px 0px 1px 1px var(--prim-opac)

  .search-button 
    background-color: var(--primary)
    border: none
    height: 100%
    display: flex
    align-items: center
    padding: .6rem 1rem
    border-radius: 7px
    outline: none
    margin-left: 2rem
    transition-duration: 50ms

  .search-icon
    width: 1.4rem

</style>
