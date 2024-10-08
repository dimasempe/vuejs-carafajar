<template>
    ini halaman user detail {{ $route.params.params }}

    <br>
    <RouterLink :to="'/user/'+$route.params.params+'/posts'">{{$route.params.params}}'s posts</RouterLink>
    <br>
    <RouterLink :to="'/user/'+$route.params.params+'/profile'">{{$route.params.params}}'s profile</RouterLink>
</template>