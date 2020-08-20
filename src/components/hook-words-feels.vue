
<script>
  export default  {
    name: 'hook-words'
  }
</script>

<template>
  <section class="hook">
    <h1>Find an <span class="highlight">expression</span> or a <span class="highlight">situation</span> in anime</h1>
  </section>
</template>

<style lang="stylus">
@import "../assets/stylus/var.styl";

.hook
  margin-top: 5rem

h1
  font-size: 2.4rem
  @media (min-width: tablet)
    font-size: 4.2rem

.highlight
  color: var(--primary)
</style>
