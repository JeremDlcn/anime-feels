<template>
  <section class="predefined">
    <div v-for="category of categories" :key="category.id" :style="{ backgroundImage: 'url(' + require(`../assets/img/${category.src}`) + ')'}">
      <p class="predefined-title">
        {{ category.name }}
      </p>
    </div>
  </section>
</template>

<style scoped lang="stylus">
  .predefined 
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr))
    gap: 2rem
    margin-top: 4rem
    div
      display: flex
      align-items: center
      justify-content: center
      background-color: rgb(162,162,162)
      height: 10rem
      cursor: pointer
      background-position: center center
      background-size: cover
      border-radius: 10px
      position: relative
      &::after 
        content: '';
        position: absolute
        top: 0px
        left: 0px
        right: 0px
        bottom: 0px
        border-radius: 10px
        background-color: rgba(0,0,0,0.5)
        z-index: 0
        
    &-title
      font-weight: bold
      font-size: 1.3rem
      z-index: 1
</style>

<script>
import { mapState } from 'vuex';
  export default  {
    name: 'predefined',
    props: [],
    mounted () {
      
      },
    data() {
      return {

      }
    },
    methods: {
      
      },
    computed: {
      ...mapState(['categories'])
    }
  }
</script>