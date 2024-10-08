<template>
    <RouterLink to="/">Home</RouterLink> 
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/user">User</RouterLink>
</template>

<style scoped> 
    a { 
        /* pakai scouped agar stylenya untuk file ini saja */
        margin-right:10px;
        text-decoration: none;
        color: rgb(73, 73, 204);
    }
    a:hover{
        color: rgb(211, 116, 116);
    }
</style>