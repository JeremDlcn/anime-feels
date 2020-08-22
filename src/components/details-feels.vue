<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <section class="details-root">
    <span class="backdrop" @click="close"></span>
    <dialog class="details" open>
      <section class="details-main">
        <img :src="require(`@/assets/img/${src}`)" alt="" loading="lazy">
        <p class="details-name">{{ name }}</p>
        <b class="details-episode" v-if="episode !== ''"><span class="no-bold">Episode(s): </span>{{ episode }}</b>
      </section>
      <section class="details-actions">
        <button class="details-actions-download">
          <img :src="require('@/assets/download.svg')" alt="" class="download"> Télécharger l'image
        </button>
        <div class="details-actions-tags">
          <li v-for="tag in tags" :key="tag.id" v-if="tags !== ''" class="tag"  :style="{ backgroundColor: colors[colors.length * Math.random() | 0]}">{{ tag }}</li>
        </div>
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

  .details
    background-color: transparent
    border: none
    position: relative
    left: 4rem
    z-index: 1
    width: 70vw
    max-width: 600px
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
      margin-top: 2rem
      @media (min-width: tablet)
        margin-left: 2rem
        width: 300px
      &-download
        background-color: var(--primary)
        color: var(--main-font)
        font-weight: bold
        font-size: 1.1rem
        padding: 0.7rem 1rem  
        border: none
        border-radius: 5px
        margin-bottom: 2rem
        cursor: pointer
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

  .download
    width 1.2rem
    position: relative
    top: 2px
    right: 2px

  .no-bold
    font-weight: normal
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