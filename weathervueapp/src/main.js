import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'font-awesome/css/font-awesome.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'


Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    weatherdetails:[],
    bgImages:{
       'sky':'../assets/sky.jpg',
       'rain':'@/assets/rain.jpg',
       'snow':'../assets/snow.jpg',
       'sunny':'../assets/sunny.jpg',
       'clouds':'../assets/clouds.jpg'
    }
  },
  getters:{
    getAllCities : (state) => {
      return state.weatherdetails
    },
    getWeather: state =>{
      return state.bgImages
    },
    getAllCitiesByName: state =>{
      let citynames=[]
      state.weatherdetails.forEach(city =>{
        citynames.push(city.name)
      })
      return citynames
    }  
  },
  mutations:{
    addWeatherDetailsForCity: (state, city) =>{
      state.weatherdetails.unshift(city)
    } 
  },
  actions:{
    addWeatherDetailsForCity({commit}, city){
      commit('addWeatherDetailsForCity', city)
    }
  }
}) 

Vue.config.productionTip = false

new Vue({
  store:store,
  render: h => h(App),
}).$mount('#app')

Vue.use(VueAxios, axios)
