import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const schoolModule = {
  namespaced: true,
  state: { 
    name: 'zjou'  
  },
  mutations: { 
    updateSchool(state, name){
      state.name = name
    }
  }
}

const workModule = {
  namespaced: true,
  state: { 
    name: 'caibao'  
  },
  mutations: { 
    updateCompany(state, name){
      state.name = name
    }
  }
}
export default new Vuex.Store({
  state: {
    name: 'zhoufeifan'
  },
  modules: {
    school: schoolModule,
    work: workModule
  }
})
