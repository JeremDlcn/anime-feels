<script>
  export default {
    name: 'Searchbar',
    data() {
      return {
        desktop: false,
        mobile: true,
        keywords: ''
      }
    },
    computed: {
      keyTags() {
         return this.keywords.replace(/ /g,'-');
      }
    }
  }
</script>

<template>
  <section class="search">
    <div>
      <input type="text" v-model="keywords"  name="search-bar" class="search-bar" placeholder="Ex:running exhaust" aria-label="champ de recherche">
      <p class="hide-tablet hide-mobile">Entrez le nom de l'anime ici</p>
    </div>
    <button class="search-button" aria-label="bouton de recherche" @click="()=>$router.push(`result?keywords=${keyTags}`)">
      <p class="hide-desktop">Rechercher</p>
      <img src="@/assets/search.webp" class="search-icon" alt="recherche">
    </button>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import "../assets/stylus/var.styl";
  .search
    display: flex
    width: 100%
    margin-top: 4rem
    @media (max-width: tablet)
      flex-direction: column
      align-items: flex-start
    div
      width: 100%
      height: 100%
      margin-bottom: 1.5rem

  .search-bar
    border: none
    background-color: var(--dark)
    width: 100%
    height: 3rem
    border-radius: 7px
    padding: 0 .7rem
    font-size: 1.2rem
    color: var(--primary)
    outline: none
    & + p
      margin-top: 1rem
      opacity: .5
      font-size: .9rem

  .search-bar:focus
    box-shadow: 0px 0px 1px 1px var(--prim-opac)

  .search-button 
    background-color: var(--primary)
    border: none
    height: 3rem
    display: flex
    align-items: center
    padding: .6rem 1rem
    border-radius: 7px
    outline: none
    transition-duration: 50ms
    @media (min-width: tablet)
      margin-left: 2rem
    p
      font-size: 1.1rem;
      font-weight: bold;
      margin-right: .5rem;

  .search-icon
    width: 1.4rem

</style>
