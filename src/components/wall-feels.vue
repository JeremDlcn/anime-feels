<template>
  <section class="wall limit">
    <div v-for="source of sources" :key="source" class="wall-container">
      <img :src="require('../assets/' + source.src)" class="wall-images">
    </div>
  </section>
</template>

<style scoped lang="stylus">
@import "../assets/stylus/var.styl";
  .wall
      display: flex
      flex-flow: column wrap
      margin-top: 4rem
      &-images
        width 100%
        height: 100%
        border-radius: 10px

  @media (min-width: tablet)
    .wall
      align-content: space-between
      height: 1200px
      &::before,
      &::after {
        content: "";
        flex-basis: 100%;
        width: 0;
        order: 2;
      }      
      &-container
        width: 32%
        margin-bottom: 2%
        &:nth-child(3n+1)
          order: 1
        &:nth-child(3n+2)
          order: 2
        &:nth-child(3n)
          order: 3

  @media (max-width: tablet)
    .wall
      align-items: center
      &-container 
        width: 100%
        margin-bottom: 1rem
        


</style>

<script>
  export default  {
    name: 'wall',
    props: [],
    mounted () {

    },
    data () {
      return {
        sources: [
          {
            name: 'Happy',
            src: '1.gif'
          },
          {
            name: 'Irritated',
            src: '2.gif'
          },
          {
            name: 'Thinking',
            src: '3.gif'
          },
          {
            name: 'Chill',
            src: '1.gif'
          },
          {
            name: 'Shocked',
            src: '2.gif'
          },
          {
            name: 'Love',
            src: '3.gif'
          },
          {
            name: 'Blushing',
            src: '1.gif'
          },
          {
            name: 'Concentrate',
            src: '2.gif'
          }
        ]
      }
    },
    methods: {

    },
    computed: {

    }
  }
</script>