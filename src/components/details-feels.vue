<template>
  <section class="details-root">
    <span class="backdrop" @click="close"></span>
    <dialog class="details" open>
      <img :src="require(`@/assets/img/${src}`)" alt="">
      <p class="details-name">{{ name }}</p>
      <b class="details-episode" v-if="episode !== ''">Episode(s): {{ episode }}</b>
    </dialog>
  </section>
</template>

<style scoped lang="stylus">
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
    position: initial
    z-index: 1
    width: 70vw
    max-width: 500px
    border-radius 10px
    color inherit
    &-name
      font-size: 1.5rem
      font-weight: bold

    & img
      width 100%
      border-radius 10px
    
</style>

<script>
  export default  {
    name: 'DetailsView',
    props: ['name','src','episode'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      close() {
        this.$emit('close')
      }
    }
}
</script>