<template>
<br>
    <slot>ini adalah slot default karena parent component tidak memberikan data</slot>
    <div>
        <!-- Halo ini adalah komponen student -->
        ini adalah data dari siswa bernama {{ studentName }} <button @click="showData()">Show Detail</button>
    </div>
    

</template>

<script>
    export default {
        props:{ //definisiin props yang masuk ke komponen
            studentName: String //definisiin tipe datanya, bisa pake '' klo string
        },
        emits: ['response'], //ini emits, isinya ngambil data dari child komponen ke parents
        methods:{
            showData(){
                this.$emit('response',this.studentName) //ini untuk buat callbacknya dari emit tersebut
            }
        }
    }

</script>



