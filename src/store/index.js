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
        src: '11.gif'
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
        src: '1.gif'
      },
      {
        name: 'Shocked',
        src: '2.gif'
      },
      {
        name: 'Love',
        src: '3.gif'
      },
      {
        name: 'Blushing',
        src: '1.gif'
      },
      {
        name: 'Concentrate',
        src: '2.gif'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
