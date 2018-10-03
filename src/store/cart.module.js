/* eslint-disable */
import * as types from './mutation-types'

const state = {
  added: [],
  products: []
}

const getters = {
  allProducts: state => state.products,
  getNumberofProducts: state => (state.products) ? state.products.length : 0,
  cartProducts: state => {
    return state.added.map(({id, quantity}) => {
      const storage = localStorage.getItem('vuex')
      const cart = JSON.parse(storage).cart
      const product = cart.added.find(p => p.id === id)
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity
      }
    })
  }
}

const actions = {
  addToCart({commit, store}, product) {
    console.log(product)
    commit(types.ADD_TO_CART, {
      id: product.id,
      name: product.name,
      price: product.price
    })
  },
  removeFromCart({commit, store}, product) {
    commit(types.REMOVE_FROM_CART, {
      id: product.id
    })
  },
  incrementCart({commit, store}, product) {
    commit(types.INCREMENT_CART, {
      id: product.id
    })
  },
  decrementCart({commit, store}, product) {
    commit(types.DECREMENT_CART, {
      id: product.id
    })
  }
}

const mutations = {
  [types.ADD_TO_CART] (state, {id, name, price}) {
    const record = state.added.find(p => p.id === id)

    if(!record) {
      state.added.push({
        id,
        name,
        price,
        quantity: 1
      })
    }
    else {
      record.quantity++
    }
  },

  [types.REMOVE_FROM_CART] (state, {id}) {
    const record = state.added.filter(p => p.id !== id)
    state.added = record
  },

  [types.INCREMENT_CART] (state, {id}) {
    const record = state.added.find(p => p.id === id)
    record.quantity++
  },

  [types.DECREMENT_CART] (state, {id}) {
    const record = state.added.find(p => p.id === id)
    record.quantity--
  }
}

export const cart = {
  state,
  getters,
  actions,
  mutations
}
