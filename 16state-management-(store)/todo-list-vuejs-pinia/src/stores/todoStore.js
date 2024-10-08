import { defineStore } from 'pinia'

// diapit dengan use dan store
export const useTodoStore = defineStore('todo', {
    // other options...
    state: () => ({ todoList: [
        {name: 'Belajar HTML', isDone: false},
        {name: 'Belajar CSS', isDone: false},
        {name: 'Belajar Javascript', isDone: false},
        {name: 'Belajar PHP', isDone: false},

    ] }), //sama kayak data()
    getters: {  //sama kayak computed
        showAll(state){
            return state.todoList
        },
        doneOnly(state){
            return state.todoList.filter(item => item.isDone == true)
        },
        undoneOnly(state){
            return state.todoList.filter(item => !item.isDone)
        }
    },
    actions: { //sama kayak methods
        setAsDone(name) {
            // console.log(this.todoList[index].name)
            // this.todoList[index].isDone = true
            this.todoList.find(item => item.name == name).isDone = true
        },
        setAsUndone(name){
            // this.todoList[index].isDone = false
            this.todoList.find(item => item.name == name).isDone = false
        },
        addTodo(newTodo){
            // console.log(newTodo)
            let exists = this.todoList.filter(item => item.name == newTodo).length
            // console.log(exists)
            if(exists){
                alert('new todo is existed in data')
                return
            }
            this.todoList.push({name: newTodo,false: false})
        }
    },
  })