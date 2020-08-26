<script>
import { mapGetters } from 'vuex';


  export default  {
    name: 'wall',
    props: [],
    data () {
      return {
        sources: [],
        isTwo: false,
        params: this.$route.query.keywords
      }
    },
    created() {
      this.sources = this.filterResults(this.params)
    },
    watch: {
      '$route.query.keywords': {
        handler: function(keyword) {
          this.params = keyword;
          this.sortKeywords().forEach(element => {
            this.sources = this.filterResults(element)  
          });
        },
        deep: true,
        immediate: true
      },
      'sources': {
        handler: function(s) {
          let hei;
          if (s.length == 2){
            this.isTwo = true;
            hei = (s.length / 3) * 350;
          } 
          if (s.length >= 8) {
            this.isTwo = false;
            hei = (s.length / 3) * 250;
          }
          else {
            this.isTwo = false;
            hei = (s.length / 3) * 350;
          }
          document.querySelector('.wall').style.height = hei + "px";
        }
      }
    },
    methods: {
      showDetails: function (source) {
        this.$emit('clicked', source)
      },
      sortKeywords: function () {
        return this.params.split('-');
      }
    },
    computed: {
      ...mapGetters(['filterResults'])
    }
  }
</script>

<template>
  <section :class="['wall', 'limit', { twocols: isTwo }]">
    <div v-for="source of sources" @click="showDetails(source)" :key="source.name" class="wall-container">
      <img :src="source.src" class="wall-images">
    </div>
  </section>
</template>

<style scoped lang="stylus">
@import "../assets/stylus/var.styl";
  .twocols
    display: block!important
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

  @media (min-width: mobile) and (max-width: tablet)
    .wall
      align-content: space-between
      height: 1800px
      &::before,
      &::after {
        content: "";
        flex-basis: 100%;
        width: 0;
        order: 2;
      }      
      &-container
        width: 46%
        margin-bottom: 2%
        &:nth-child(2n+1)
          order: 1
        &:nth-child(2n)
          order: 2

  @media (max-width: mobile) 
    .wall
      align-items: center
      &-container 
        width: 100%
        margin-bottom: 1rem
</style>
