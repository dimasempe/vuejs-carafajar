<template>
    <h1>ini halaman todolist</h1>
    {{ todoStore.name }}
    <br><br>
    {{ todoStore.count }}
    <br><br>
    {{ todoStore.doubleCount }}
    <br><br>
    <button @click="todoStore.increment">Add</button>





</template>

<script>
    import {useTodoStore} from '../stores/todoStore.js'

    export default {
        setup(){
            const todoStore = useTodoStore()
            return {todoStore}
        }
    }
</script>