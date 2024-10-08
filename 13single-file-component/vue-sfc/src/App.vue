

<template>

  <p>haloooo ini tulisan di app.vue</p> 
  <!-- ini buat manggil komponen Student  -->
   <Student studentName="Andy" @response="showDetail"/> <!-- ini untuk fungsi callback yang didefinisikan  -->
   <Student studentName="Budi" @response="(isinya)=>selectedStudent=isinya"/> <!-- studentName adalah props buat ngasih data dari parent (App) ke child (Student) -->
   <Student studentName="Dimas" @response="(isinya)=>selectedStudent=isinya">Ini adalah slot dari parent</Student> <!-- ini template untuk ngasih slot  -->

   <p>Student yang dipilih adalah: {{ selectedStudent }}</p>
</template>

<script > //kalau ada setup tandanya memakai composition api
  import Student from './components/Student.vue'

  export default { //daftarin komponen klo make option api
    components:{
      Student
    },
    data(){
      return {
        selectedStudent: ''
      }
    },
    methods:{
      showDetail(isinya){
        this.selectedStudent = isinya
      }
    }
  }
  

</script>

