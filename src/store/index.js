import { createStore } from 'vuex'
import module from './modules/module.js'

export default createStore({
  modules: {
    module
  }
})
