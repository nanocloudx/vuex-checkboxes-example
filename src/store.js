import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruitsList: [
      {id: 1, label: 'Apple', checked: true},
      {id: 2, label: 'Orange', checked: true},
      {id: 3, label: 'Grape', checked: true}
    ],
    animalsList: [
      {id: 1, label: 'Raccoon', checked: true},
      {id: 2, label: 'Otter', checked: true},
      {id: 3, label: 'Squirrel', checked: true}
    ],
  },
  mutations: {
    updateFruitsList(state, items) {
      state.fruitsList = items
    },
    updateAnimalsList(state, items) {
      state.animalsList = items
    }
  },
  actions: {
    updateFruitsList({commit}, items) {
      commit('updateFruitsList', items)
    },
    updateAnimalsList({commit}, items) {
      commit('updateAnimalsList', items)
    }
  }
})
