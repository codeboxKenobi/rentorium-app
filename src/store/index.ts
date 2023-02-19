import { createStore } from 'vuex'
import { deepClone } from '@/assets/utils/utils'
import { mockOrdersData } from '@/assets/mockData/mockOrders'

export default createStore({
  state: {
    mockOrders: mockOrdersData,
    mockOrdersClone: mockOrdersData,
    location: ''
  },

  getters: {
    getAllOrders: ( state ) => {
      return state.mockOrders
    },

    getLocation: ( state ) => {
      return state.location
    } 
  },

  mutations: {
    setAllOrders: ( state, payload ) => {
      state.mockOrders = payload
    },

    resetAllOrders: ( state ) => {
      state.mockOrders = state.mockOrdersClone
    },

    setLocation: ( state, payload ) => {
      state.location = payload
    } 
  },

  actions: {

  },

  modules: {

  }

})
