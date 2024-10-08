<template>

    <h1>Ini adalah halaman user</h1>

    <h2>List User</h2>
    
    <ul>
        <li v-for="user in users" :key="user.name"> <!-- sebenernya pakai user.params -->
            <!-- {{ user.name }} -->
            <RouterLink :to="'/user/'+user.params">{{user.name}}</RouterLink> <!-- ini namanya route dynamic -->
        </li>
    </ul>
  
</template>

<script>
export default {
    data(){
        return {
            users:[
                {params:'meg', name: 'Mag'},
                {params:'greg', name: 'Greg'},
                {params:'dimas', name: 'Dimas'}
            ]
        }
    }
}
</script>