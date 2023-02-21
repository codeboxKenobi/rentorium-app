import { createStore } from 'vuex'
import { deepClone } from '@/assets/utils/utils'
import { mockOrdersData } from '@/assets/mockData/mockOrders'

export default createStore({
  state: {
    mockOrders: mockOrdersData,
    mockOrdersClone: mockOrdersData,
    location: '',
    selectDate: {
      from: '',
      to: ''
    }
  },

  getters: {
    getAllOrders: ( state ) => {
      return state.mockOrders
    },

    getLocation: ( state ) => {
      return state.location
    },

    getSelectedDayPeriod: ( state ) => {
      return state.selectDate
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
    },

    setDayFrom: ( state, payload ) => {
      state.selectDate.from = payload
    },

    setDayTo: ( state, payload ) => {
      state.selectDate.to = payload
    }
  },

  actions: {

  },

  modules: {

  }

})
