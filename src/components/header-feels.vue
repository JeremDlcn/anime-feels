<script>
  export default  {
    name: 'headerfeels'
  }
</script>

<template>
      <section class="head">
        <router-link to="/">
          <img src="../assets/logo.png" alt="logo" class="logo">
        </router-link>
        <h1>Feels</h1>
      </section>
</template>

<style scoped lang="stylus">
@import "../assets/stylus/var.styl";

.head
  height: 8rem
  padding-top: 2rem
  display: grid
  grid-template-columns: 30% 1fr 30%
  align-items: center
  justify-items: center

.logo
  width: 4rem
  height: 4rem
  margin-left: 1.5rem
  @media (min-width: tablet)
    width 6rem
    height: 6rem
  
h1
  color: var(--primary)
  font-size: 2.5rem
  font-weight: bold
  @media (min-width: tablet)
    font-size: 3.2rem

</style>