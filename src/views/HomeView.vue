<template>
<div class="grey lighten-4">
<Nav/>
  <div>
  <v-card flat class="pa-3 text-right">
   
    <v-flex xs12 md6 >
      <v-avatar class="student_image mt-10 text-center mr-10" size="100" >
        <img   src="../assets/studentm.png" alt="student" >
      </v-avatar>
      </v-flex>  
      
    <v-layout row wrap class="mt-10" >



      <v-flex xs12 md6 > 
        <div class=" grey---text mr-10 mt-9">
              اسم الطالب : <span class="name">ع</span>

        </div>
      </v-flex>
         <v-flex xs12 md6>
        <div class=" grey---text mr-10  mt-9">
              الرقم الجامعي : <span class="uni_num">ع</span>

        </div>
      </v-flex>  
    <v-flex xs12 md6>
        <div class=" grey---text mr-10  mt-9">
              المستوى : <span class="uni_num">ع</span>

        </div>
      </v-flex>   
    <v-flex xs12 md6>
        <div class=" grey---text mr-10  mt-9">
              القسم : <span class="uni_num">ع</span>

        </div>
      </v-flex>  



    </v-layout>
  </v-card>  </div>
</div>
</template>

<script>
  import Nav from '../components/Nav.vue'
  export default {
    name: 'Home',

    components: {
      Nav
    },
  }
</script>
