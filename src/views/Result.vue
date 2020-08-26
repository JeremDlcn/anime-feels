<template>
  <div class="result">
    <header-bar/>
    <search-bar class="limit"/>
    <wall-container @clicked="reqDetails"/>
    <details-view v-if="showDetails" v-scroll-lock="showDetails" @close="showDetails = false" :tags="detailsTags" :name="detailsName" :src="detailsSource" :episode="detailsEp"/>
    <div class="deco"></div>
  </div>
</template>

<style lang="stylus">
@import "../assets/stylus/var.styl";
  .result
    position:relative

  .deco
    background-color: var(--primary)
    height: 2rem
    width: 10rem
    position: absolute
    bottom 0
    right 0

  @media (max-width: tablet)
    .result
      padding: 0 15vw
</style>

<script>
import HeaderFeels from '@/components/header-feels.vue';
import Searchbar from '@/components/search-bar-feels.vue';
import Wall from '@/components/wall-feels.vue';
import DetailsView from '@/components/details-feels.vue';


export default {
  name: 'Result',
  data () {
    return {
      detailsName: '',
      detailsSource: '',
      detailsEp: '',
      detailsTags: [],
      showDetails: false
    }
  },
  components: {
    'header-bar': HeaderFeels,
    'search-bar': Searchbar,
    'wall-container': Wall,
    'details-view': DetailsView
  },
  computed: {
  },
  methods: {
    reqDetails(value)  {
      this.detailsName = value.name;
      this.detailsSource = value.src;
      this.detailsEp = value.episode;
      this.detailsTags = value.tags
      this.showDetails = true;
    }
  }
}
</script>