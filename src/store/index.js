/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

import { alert } from './alert.module';
import { account } from './account.module';
import { users } from './users.module';
import { cart } from './cart.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state,
  getters,
  actions,
  mutations,
    modules: {
        alert,
        account,
        users,
        cart
    }
});
