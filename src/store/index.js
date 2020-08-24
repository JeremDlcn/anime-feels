import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    sources: [
      {
        name: 'Chika rap battle',
        anime: 'Kaguya-sama: Love is War',
        episode: '',
        src: 'https://media1.tenor.com/images/b924e35dc0eba4e34318e86481db69eb/tenor.gif?itemid=13410604',
        tags: ['Chika','Rap','Dance','Kaguya-sama','Love is War','Kaguya-sama Love is War']
      },
      {
        name: 'Lonely Tamako',
        anime: 'Tamako Love Story',
        episode: 'https://steamuserimages-a.akamaihd.net/ugc/766022833894880068/43ABF050CA14DD3C71C150CF06449DC567DB10E3/',
        src: '',
        tags: ['Alone','Tamako','Tamako Love Story','Quit']
      },
      {
        name: 'Jabami Yumeko pose',
        anime: 'Gambling School',
        episode: 'S1 - Opening',
        src: 'https://66.media.tumblr.com/5ac1b12638a87e1aacef583bca3ebf5c/tumblr_pl2gelAZej1qehrvso1_400.gif',
        tags: ['Charlotte','Yumeko', 'Gambling School', 'Pose', 'Dance']
      },
      {
        name: 'Violet Evergarden thinking',
        anime: 'Violet Evergarden',
        episode: '',
        src: 'https://78.media.tumblr.com/559cbdd5c94dc2bdb6ce5bc1d54cc2f2/tumblr_pafkl3xkSX1qkz08qo1_540.gif',
        tags: ['Violet','Evergarden','Violet Evergarden','Thinking','Wind','Hair']
      },
      {
        name: 'OK Makise Kurisu',
        anime: 'Steins;Gate',
        episode: '',
        src: 'https://media3.giphy.com/media/VBc6l3CqQonqo/giphy.gif',
        tags: ['Steins','Gate','Steins Gate','Steins;Gate','Makise','Kurisu','OK','Confirmation','Go']
      },
      {
        name: 'Bored Phos',
        anime: 'Land of the lustrous',
        episode: '',
        src: 'https://media1.tenor.com/images/da1bdc15dfdbbffd4857b135a6d72f8f/tenor.gif?itemid=11263012',
        tags: ['Land of the lustrous','Houseki no kuni','Sleep','Nap','Bored','Laid']
      },
      {
        name: 'Excited Eru Chitanda',
        anime: 'Hyouka',
        episode: 'https://thumbs.gfycat.com/ZigzagRepentantCrocodileskink-size_restricted.gif',
        src: '',
        tags: ['Hyouka','Hyoka','Eru','Chitanda','Exited','Hype','Overactive']
      },
      {
        name: 'Clapping Pak',
        anime: 'Re:Zero starting life in another world',
        episode: '4',
        src: 'https://i.pinimg.com/originals/27/11/6e/27116eca49842bc956ea43c3a37c9df2.gif',
        tags: ['Re:Zero','Rezero','Re Zero','Pak','Clap','Bravo']
      },
      {
        name: 'Wind in hair Nao',
        anime: 'Charlotte',
        episode: '',
        src: 'https://s-media-cache-ak0.pinimg.com/originals/bf/0f/91/bf0f916956077c4269787412115fe8a3.gif',
        tags: ['Charlotte','Nao','Tomori','Wind','Hair','Sunset']
      },
      {
        name: 'Shocked Subaru',
        anime: 'Re:Zero starting life in another world',
        episode: 'https://tenor.com/view/subaru-rem-re-zero-rezero-gif-5727666',
        src: '',
        tags: ['Subaru','Natsuki','Re:Zero','Rezero','Re Zero','Shock','Bed']
      },
      {
        name: 'Misa threat Yu with fire',
        anime: 'Charlotte',
        episode: '',
        src: 'https://thumbs.gfycat.com/UnitedGlitteringHarvestmen-size_restricted.gif',
        tags: ['Misa','Nishimori','Yu','Otosaka','Fire','Threat','Angry','Charlotte']
      }
    ],
    categories: [
      {
        name: 'Happy',
        src: 'https://i.makeagif.com/media/6-20-2016/khwmhl.gif'
      },
      {
        name: 'Irritated',
        src: 'https://media1.tenor.com/images/0003e50807bcf21bebd034d560c36a13/tenor.gif?itemid=14329351'
      },
      {
        name: 'Thinking',
        src: 'https://media1.tenor.com/images/a790e458eb86a4f191536ef9c174d122/tenor.gif?itemid=12396059'
      },
      {
        name: 'Chill',
        src: 'https://data.whicdn.com/images/312547930/original.gif'
      },
      {
        name: 'Shocked',
        src: 'https://giffiles.alphacoders.com/132/132786.gif'
      },
      {
        name: 'Love',
        src: 'https://media1.tenor.com/images/aecb71388c86293437d8836910e4323a/tenor.gif?itemid=15104660'
      },
      {
        name: 'Blushing',
        src: 'https://image.myanimelist.net/ui/pVSqRUSLAi5R6rTwzZ0_EBDuluml45XIu-pdZtKYSli_uhK6v9gJOYkC0JwTsgHnnPZenWzbwRGUqBpyLpYvipWtASaCmFj_tAf6WjV4GZi7y2rUmSVWXfUaMtvqu526'
      },
      {
        name: 'Concentrate',
        src: 'https://i.pinimg.com/originals/39/57/c9/3957c9bbd5576c0a9488d88b03745b20.gif'
      }
    ],
    colors: [
      '#CC7150',
      '#E8A766',
      '#1DA3A3',
      '#05274D',
      '#F05D23',
      '#003E1F',
      '#FFA400',
      '#009FFD',
      '#2A2A72',
      '#0B5D1E',
      '#F2C618',
      '#47A4AE',
      '#85B455',
      '#F49015',
      '#F4B915',
      '9ED1C8'
    ]
  },
  getters: {
    filterResults: (state) => (selector) => {
      let result = state.sources.reduce((acc, {tags, ...rest}) => {
        tags = tags.filter(s => s.toLowerCase().includes(selector));
        if(tags.length) acc.push({tags, ...rest});
        return acc;
       }, []);

      return result
    }
  },
  actions: {
  },
  modules: {
  }
})
