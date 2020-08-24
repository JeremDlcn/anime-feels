<template>
  <section class="details-root">
    <div class="close" @click="close">❌</div>
    <span class="backdrop" @click="close"></span>
    <dialog class="details" open>
      <section class="details-main">
        <img :src="src" alt="" loading="lazy">
        <p class="details-name">{{ name }}</p>
        <b class="details-episode" v-if="episode !== ''"><span class="no-bold">Episode(s): </span>{{ episode }}</b>
        <p class="details-actions-taglabel">Tags:</p>
        <div class="details-actions-tags" v-if="tags !== ''">
          <li v-for="tag in tags" :key="tag.id"  class="tag" @click="()=>$router.push(`result?keywords=${tag}`)" :style="{ backgroundColor: colors[colors.length * Math.random() | 0]}">{{ tag }}</li>
        </div>
      </section>
      <section class="details-actions">
        <a :href="src" :download="name">
          <button class="details-actions-download">
            <img :src="require('@/assets/download.svg')" alt="" class="download"> Download
          </button>
        </a>
      </section>
    </dialog>
  </section>
</template>

<style lang="stylus">
@import "../assets/stylus/var.styl";

  .details-root,
  .backdrop
    position: fixed
    top: 0
    left: 0px
    right: 0px
    bottom: 0

  .details-root
    width: 100%
    height: 100vh
    display: flex
    align-items: center
    justify-content: center
    color var(--main-font)!important

  .backdrop
    background-color: rgba(0,0,0,0.6)
    cursor: pointer

  .details
    background-color: transparent
    border: none
    position: relative
    left: 4rem
    z-index: 1
    width: 57vw
    max-width: 800px
    border-radius 10px
    color inherit
    display: flex
    @media (max-width: tablet)
      flex-direction: column
      left: 0
    &-name
      font-size: 1.5rem
      font-weight: bold
      margin: 0.5rem 0 .3rem 0
    &-episode
      color: var(--second-font)
    & img
      max-width 100%
      height: auto
      border-radius 10px
    &-actions
      margin-top: 1rem
      width: 280px
      @media (min-width: tablet)
        margin-left: 2rem
      &-download
        background-color: var(--primary)
        color: var(--main-font)
        font-weight: bold
        font-size: 1.1rem
        padding: 0.7rem 1rem  
        border: none
        border-radius: 5px
        cursor: pointer
      &-taglabel
        margin: 0.5rem 0
      &-tags
        display: flex
        flex-wrap: wrap
  .tag
    background-color: gray
    list-style-type: none
    display: inline
    padding: 0.5rem 0.7rem
    margin-right: 0.5rem
    margin-bottom: 0.5rem
    border-radius: 5px
    font-size: 0.8rem
    font-weight: 600

  .download
    width 1.2rem
    position: relative
    top: 2px
    right: 2px

  .no-bold
    font-weight: normal

  .close
    filter: contrast(2%) grayscale(1) brightness(3)
    font-size: 1.5rem
    z-index: 5
    position: fixed
    top: 2rem
    right: 2rem
    cursor: pointer
</style>

<script>
import { mapState } from 'vuex';

  export default  {
    name: 'DetailsView',
    props: ['name','src','episode','tags'],
    mounted () {

    },
    data () {
      return {

      }
    },
    computed: {
      ...mapState(['colors'])
    },
    methods: {
      close() {
        this.$emit('close')
      }
    }
}
</script>