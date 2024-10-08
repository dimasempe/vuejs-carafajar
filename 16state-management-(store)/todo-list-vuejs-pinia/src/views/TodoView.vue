<template>
    <h1>ini halaman todolist</h1>
    
    <!-- {{ todoStore.todoList }} -->
    <form @submit.prevent='todoStore.addTodo(newTodo)'>
        <input type="text" v-model='newTodo' placeholder="add new todo...">
        <input type="submit" value='add'>
    </form>
    <div style='width: 500px; padding-inline-start:40px'>
        <h3 style="text-align: center;">My To Do List</h3>
    </div>

    <div class="getters-button">
        <button @click="show = 'all'">Show All</button>
        <button @click="show = 'done only'">Done Only</button>
        <button @click="show = 'undone only'">Undone Only</button>
    </div>

    <!-- show all todoList -->
    <div v-if="show=='all'">
        <ul>
            <li v-for="(list,index) in todoStore.todoList" :key="index">
                <span>
                    {{ list.name }}
                </span>
                <span>
                    <button v-if="!list.isDone" @click="todoStore.setAsDone(list.name)">Set as Done</button>
                    <button v-if="list.isDone" @click="todoStore.setAsUndone(list.name)">Set as Undone</button>
                </span>
            </li>
        </ul>
    </div>

    <!-- show done only todoList -->
    <div v-if="show=='done only'">
        <ul>
            <li v-for="(list,index) in todoStore.doneOnly" :key="index">
                <span>
                    {{ list.name }}
                </span>
                <span>
                    <button v-if="!list.isDone" @click="todoStore.setAsDone(list.name)">Set as Done</button>
                    <button v-if="list.isDone" @click="todoStore.setAsUndone(list.name)">Set as Undone</button>
                </span>
            </li>
        </ul>
    </div>

    <!-- show undone only todoList -->
    <div v-if="show=='undone only'">
        <ul>
            <li v-for="(list,index) in todoStore.undoneOnly" :key="index">
                <span>
                    {{ list.name }}
                </span>
                <span>
                    <button v-if="!list.isDone" @click="todoStore.setAsDone(list.name)">Set as Done</button>
                    <button v-if="list.isDone" @click="todoStore.setAsUndone(list.name)">Set as Undone</button>
                </span>
            </li>
        </ul>
    </div>
    



</template>
<style scoped>
    form{
        width: 500px;
        padding-inline-start: 40px;
        margin-bottom: 40px;
    }

    form input{
        padding: 10px;
    }
    form input:first-child{
        width:80%;
        margin: 0px 10px ;
    }
    ul{
        list-style: none;
    }

    li{
        border:solid 1px;
        margin: 10px;
        padding: 10px;
        width: 500px;
        display: flex;
        justify-content: space-between;
    }
    .getters-button{
        display: flex;
        justify-content: center;
        gap: 10px;
        width: 500px; 
        padding-inline-start: 40px;
    }
</style>
<script>
    import {useTodoStore} from '../stores/todoStore.js'

    export default {
        setup(){
            const todoStore = useTodoStore()
            return {todoStore}
        },
        data(){
            return {
                newTodo:'',
                show: 'all'
            }
        }
    }
</script>