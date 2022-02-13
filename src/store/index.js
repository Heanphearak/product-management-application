import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

import authorizations from './modules/authentications/index';
import product from './modules/product/index'

export default new Vuex.Store({
    modules: {
       authorizations,
       product
    }
});