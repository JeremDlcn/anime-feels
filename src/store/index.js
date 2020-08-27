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
      },
      {
        name: 'Happy Eru',
        anime: 'Hyouka',
        episode: '',
        src: 'https://thumbs.gfycat.com/FamiliarSourAddax-size_restricted.gif',
        tags: ['Happy','Hyouka','Chitanda','Eru','Smile']
      },
      {
        name: 'Tea time Yui',
        anime: 'K-on',
        episode: '',
        src: 'https://i.gifer.com/8Vdw.gif',
        tags: ['Happy','Yui','Hirasawa','K-on','drink','tea','coffee']
      },
      {
        name: 'Crying Yui',
        anime: 'K-on',
        episode: '',
        src: 'https://i.pinimg.com/originals/df/54/6b/df546b203b2c4bd7f5b202424832da84.gif',
        tags: ['Cry','Yui','Hirasawa','K-on','Panic']
      },
      {
        name: 'Delicious',
        anime: 'K-on',
        episode: '',
        src: 'https://38.media.tumblr.com/tumblr_m5hxe6m5M31qzqnxxo1_500.gif',
        tags: ['Joy','Yui','Hirasawa','K-on','delicious', 'happy']
      },
      {
        name: 'Cheerleading Pokemon',
        anime: 'Pokemon',
        episode: '',
        src: 'https://25.media.tumblr.com/tumblr_mdt6qpDEJk1rby56yo1_500.gif',
        tags: ['Pokemon','Cheeleader','Cheer','Posipi','Negapi']
      },
      {
        name: 'In love',
        anime: 'Full Metal Alchemist',
        episode: '',
        src: 'https://metro.co.uk/wp-content/uploads/2015/02/excited.gif',
        tags: ['Love','exited','FMA','Full','Metal','Alchemist','Winry','Rockbell']
      },
      {
        name: 'Angry Thor',
        anime: 'Miss Kobayashi drgaon maid',
        episode: '',
        src: 'https://media.tenor.com/images/ef795689617a8c97379b297fd7557235/tenor.gif',
        tags: ['irritated','angry','Dragon','Maid','Thor','Kobayashi']
      },
      {
        name: 'Pouting Mai',
        anime: 'Musaigen no Phantom World',
        episode: '',
        src: 'https://media.tenor.com/images/3e0c7be0cb8e24c389f5e1f78a8f69a5/tenor.gif',
        tags: ['irritated','pout','tsundere','Mai','Kawakami','Musaigen','Phantom','World']
      },
      {
        name: 'Furious Edouard',
        anime: 'Full Metal Alchemist',
        episode: '',
        src: 'https://i.makeagif.com/media/7-13-2018/5bypmu.gif',
        tags: ['Furious','Angry','Irritated','FMA','Full','Metal','Alchemist','Elric','Edouard']
      },
      {
        name: 'Angry Bakugo',
        anime: 'My hero academia',
        episode: '',
        src: 'https://thumbs.gfycat.com/FarCornyEuropeanfiresalamander-size_restricted.gif',
        tags: ['Bakugo','My','Hero','Academia','Angry','Furious','Irritated']
      },
      {
        name: 'Yelling Hōtarō',
        anime: 'Hyouka',
        episode: '',
        src: 'https://24.media.tumblr.com/5d2f1089ea85d8e03042f347fb6de4e0/tumblr_mn62l7ucF21qbvovho1_500.gif',
        tags: ['Hyouka','Hotaro','Angry','Furious','Yelling']
      },
      {
        name: 'Pout Atsuko',
        anime: 'Little Witch Academia: The Enchanted Parade',
        episode: '',
        src: 'https://media.tenor.com/images/abe8bc8b0b76b8ffe6694fa8b8f48853/tenor.gif',
        tags: ['Atsuko','Kagari','Little','Witch','Academia','Angry','pout']
      },
      {
        name: 'Kaede thinking',
        anime: 'Seishun Buta Yarou: Rascal does not dream of a bunny girl',
        episode: '',
        src: 'https://media.tenor.com/images/2ab5635c3ca5d3c2891666347e44e587/tenor.gif',
        tags: ['Kaede','Azusagawa','Seishun','Buta','Yarou','Thinking','Think']
      },
      {
        name: 'Chika thinking',
        anime: 'Kaguya-sama: Love is War',
        episode: '',
        src: 'https://media.tenor.com/images/b6881882d9956eaf2308c0831c1f5936/tenor.gif',
        tags: ['Chika','Kaguya','sama','Love','War','Think','Thinking']
      },
      {
        name: 'Thinking Sasuke',
        anime: 'Naruto',
        episode: '',
        src: 'https://media.tenor.com/images/1fddac67c1f014378d8f35d443efe9a1/tenor.gif',
        tags: ['Sasuke','Uchiha','Naruto','Think','Thinking']
      },
      {
        name: 'OverThinking',
        anime: 'Hunter X Hunter',
        episode: '',
        src: 'https://i.gifer.com/76EI.gif',
        tags: ['Hunter','Gon','Think','Thinking','Freegs']
      },
      {
        name: 'Think hile eating',
        anime: 'K-on',
        episode: '',
        src: 'https://i.imgur.com/bnw4gCZ.gif',
        tags: ['Thinking','K-on','Azusa','Nakano','Think']
      },
      {
        name: 'Thinking in the train',
        anime: 'K-on',
        episode: '',
        src: 'https://64.media.tumblr.com/a3e09f0d1bd335398e5211409a5203e9/tumblr_pb3qmdVXgy1vaxnh8o1_400.gifv',
        tags: ['Train','Thinking','Think','Coffee','Look','Sky','Window']
      },
      {
        name: 'Thinking Ayumi',
        anime: 'Charlotte',
        episode: '',
        src: 'https://i.kym-cdn.com/photos/images/newsfeed/001/017/444/94a.gif',
        tags: ['Ayumi','Charlotte','Think','Thinking']
      },
      {
        name: 'Look back',
        anime: 'Beyond the Boundary: Kyoukai no Kanata',
        episode: '',
        src: 'https://24.media.tumblr.com/e0616998c803845e62c2047d2bf4b453/tumblr_mv5ce53iXh1rkeknyo1_500.gif',
        tags: ['Beyond','Boundary','Kyoukai','Kanata','Mirai','Kuriyama']
      },
      {
        name: 'Shocked Kaede',
        anime: 'Seishun Buta Yarou: Rascal does not dream of a bunny girl',
        episode: '',
        src: 'https://media.tenor.com/images/fd6df8ab6c6bd7e28ffd9ba20e1f3146/tenor.gif',
        tags: ['Kaede','Shock','Shocked','Azusagawa','Seishun','Buta','Yarou']
      },
      {
        name: 'Eletrified',
        anime: 'Noragami',
        episode: '',
        src: 'https://pa1.narvii.com/5655/e9a584b6d9ea00e502e792fcdf504a8dd1d63697_hq.gif',
        tags: ['Yato','Noragami','Kami','Shock','Shocked']
      },
      {
        name: 'Ultra Shock',
        anime: 'ReLife',
        episode: '',
        src: 'https://thumbs.gfycat.com/BitesizedMasculineCamel-small.gif',
        tags: ['Shock','Shocked','ReLife']
      },
      {
        name: 'Tremble and Shock',
        anime: '',
        episode: '',
        src: 'https://i.pinimg.com/originals/fb/37/41/fb3741a9977e769bd365fd6e1b835cdc.gif',
        tags: ['Shock','Shocked','Tremble']
      },
      {
        name: 'Chill Ocean',
        anime: 'Umi ga kikoeru: Je peux entendre l\'océan',
        episode: '',
        src: 'https://i.pinimg.com/originals/f6/53/5a/f6535a5810012acaf0146b5efa030ffc.gif',
        tags: ['Chill','Ocean','Wind','Landscape','Umi','kikoeru']
      },
      {
        name: 'Station rain',
        anime: '',
        episode: '',
        src: 'https://thumbs.gfycat.com/HeartyFearfulBlackrhino-size_restricted.gif',
        tags: ['Train','Chill','Station','Rain','Thinking']
      },      {
        name: 'Nap on Desk',
        anime: '',
        episode: '',
        src: 'https://gifimage.net/wp-content/uploads/2017/10/chill-anime-gif-7.gif',
        tags: ['Computer','Chill','Nap','Retro']
      },
      {
        name: 'Train on snow',
        anime: '5 centimeter per second',
        episode: '',
        src: 'https://i.imgur.com/EP0avJW.gif?noredirect',
        tags: ['Chill','Snow','5','centimeter','second']
      },
      {
        name: 'I want to know',
        anime: '',
        episode: '',
        src: 'https://i.chzbgr.com/full/8207626496/h4E0A778C/you-have-piqued-my-interest',
        tags: ['Interest','Close']
      },
      {
        name: 'Very Interesting',
        anime: 'Gabriel Dropout',
        episode: '',
        src: 'https://media1.tenor.com/images/308ad593feb9cfce5dff9b9d2e92b63b/tenor.gif?itemid=15157888',
        tags: ['Interest','Angel','Sparkle']
      },{
        name: 'Blushing Cinabre',
        anime: 'Houseki no kuni',
        episode: '',
        src: 'https://image.myanimelist.net/ui/pVSqRUSLAi5R6rTwzZ0_EBDuluml45XIu-pdZtKYSli_uhK6v9gJOYkC0JwTsgHnnPZenWzbwRGUqBpyLpYvipWtASaCmFj_tAf6WjV4GZi7y2rUmSVWXfUaMtvqu526',
        tags: ['Houseki','Kuni','Shinsha','Cinabre','Blushing']
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
        name: 'Interest',
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
        let tag = tags.filter(s => s.toLowerCase().includes(selector.toLowerCase()));
        if(tag.length) acc.push({tags, ...rest});
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
