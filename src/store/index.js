import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sources: [
      {
        name: 'Happy',
        src: '1.gif'
      },
      {
        name: 'Irritated',
        src: '2.gif'
      },
      {
        name: 'Thinking',
        src: '3.gif'
      },
      {
        name: 'Chill',
        src: '4.gif'
      },
      {
        name: 'Shocked',
        src: '5.gif'
      },
      {
        name: 'Love',
        src: '16.gif'
      },
      {
        name: 'Blushing',
        src: '12.gif'
      },
      {
        name: 'Concentrate',
        src: '21.gif'
      },
      {
        name: 'Concentratation',
        episode: '4',
        src: '11.gif',
        tags: ['Re:Zero','Pak','Clap','Bravo']
      },
                {
        name: 'Bushing',
        src: '18.gif'
      },
      {
        name: 'Cncentrate',
        src: '10.gif'
      },
      {
        name: 'Conc',
        src: '19.gif'
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
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
