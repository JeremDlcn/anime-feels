<script>
  export default  {
    name: 'DetailsView',
    props: ['name','src'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    }
}
</script>

<template>
  <dialog class="details-view" open>
    <p>{{ name }} - {{ src }}</p>
  </dialog>
</template>

<style scoped lang="stylus">
  .details-view
    background-color: purple
    width: 100vw
    height: 100vh
    position: fixed
    top: 0
</style>
