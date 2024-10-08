import { defineStore } from 'pinia'

// diapit dengan use dan store
export const useTodoStore = defineStore('todo', {
    // other options...
    state: () => ({ count: 5, name: 'Eduardo' }), //sama kayak data()
    getters: {  //sama kayak computed
        doubleCount: (state) => state.count * 2,
    },
    actions: { //sama kayak methods
        increment() {
        this.count++
        },
    },
  })