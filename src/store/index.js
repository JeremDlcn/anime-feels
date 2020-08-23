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
        src: '1.gif',
        tags: ['Chika','Rap','Dance','Kaguya-sama','Love is War','Kaguya-sama Love is War']
      },
      {
        name: 'Lonely Tamako',
        anime: 'Tamako Love Story',
        episode: '',
        src: '2.gif',
        tags: ['Alone','Tamako','Tamako Love Story','Quit']
      },
      {
        name: 'Jabami Yumeko pose',
        anime: 'Gambling School',
        episode: 'S1 - Opening',
        src: '3.gif',
        tags: ['Yumeko', 'Gambling School', 'Pose', 'Dance']
      },
      {
        name: 'Violet Evergarden thinking',
        anime: 'Violet Evergarden',
        episode: '',
        src: '4.gif',
        tags: ['Violet','Evergarden','Violet Evergarden','Thinking','Wind','Hair']
      },
      {
        name: 'OK Makise Kurisu',
        anime: 'Steins;Gate',
        episode: '',
        src: '5.gif',
        tags: ['Steins','Gate','Steins Gate','Steins;Gate','Makise','Kurisu','OK','Confirmation','Go']
      },
      {
        name: 'Clone urahara kisuke Bleach',
        anime: 'Bleach',
        episode: '',
        src: '16.gif',
        tags: ['Bleach','Kisuke','Urahara','Clone']
      },
      {
        name: 'Bored Phos',
        anime: 'Land of the lustrous',
        episode: '',
        src: '12.gif',
        tags: ['Land of the lustrous','Houseki no kuni','Sleep','Nap','Bored','Laid','Sleep in grass']
      },
      {
        name: 'Excited Eru Chitanda',
        anime: 'Hyouka',
        episode: '',
        src: '21.gif',
        tags: ['Hyouka','Hyoka','Eru','Chitanda','Exited','Hype','Overactive']
      },
      {
        name: 'Clapping Pak',
        anime: 'Re:Zero starting life in another world',
        episode: '4',
        src: '11.gif',
        tags: ['Re:Zero','Rezero','Re Zero','Pak','Clap','Bravo']
      },
      {
        name: 'Wind in hair Nao',
        anime: 'Charlotte',
        episode: '',
        src: '18.gif',
        tags: ['Charlotte','Nao','Tomori','Wind','Hair','Sunset']
      },
      {
        name: 'Shocked Subaru',
        anime: 'Re:Zero starting life in another world',
        episode: '',
        src: '10.gif',
        tags: ['Subaru','Natsuki','Re:Zero','Rezero','Re Zero','Shock','Bed']
      },
      {
        name: 'Misa threat Yu with fire',
        anime: 'Charlotte',
        episode: '',
        src: '19.gif',
        tags: ['Misa','Nishimori','Yu','Otosaka','Fire','Threat','Angry']
      }
    ],
    categories: [
      {
        name: 'Happy',
        src: '9.gif'
      },
      {
        name: 'Irritated',
        src: '8.gif'
      },
      {
        name: 'Thinking',
        src: '3.gif'
      },
      {
        name: 'Chill',
        src: '20.gif'
      },
      {
        name: 'Shocked',
        src: '10.gif'
      },
      {
        name: 'Love',
        src: '18.gif'
      },
      {
        name: 'Blushing',
        src: '13.gif'
      },
      {
        name: 'Concentrate',
        src: '21.gif'
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
      console.log(selector);
      return state.sources.filter(source => source.anime.toLowerCase() === selector.toLowerCase())
    }
  },
  actions: {
  },
  modules: {
  }
})
