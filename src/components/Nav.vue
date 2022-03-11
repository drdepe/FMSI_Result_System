<template>
<div>
 <nav>
    <v-toolbar  flat class="deep-purple accent-10" >
         <v-icon class="white--text vert_hover" size="35px" v-on:click='() =>{drawer=!drawer}'>menu</v-icon>
        <v-spacer></v-spacer>

        <v-toolbar-title class="white--text">
            <div class="fmsi mt-2">
                            <p class="uni_name mr-2 font">كلية العلوم الرياضية والمعلوماتية</p>
                <img src="../assets/uofk.png" alt="" class="">
            </div>
            
        </v-toolbar-title>
    </v-toolbar>

    </nav>
    <v-navigation-drawer v-model="drawer" absolute temporary bottom class="deep-purple accent-4 white--text text-center">

            <v-list v-for='item in menu ' :key='item.name' router class="mt-3">
                <p><router-link :to="item.link" class="mt-11 poin white--text" active-link="active">{{item.name}}</router-link></p>
            </v-list>
        <!-- <p class="">فيديوهات تحفيزية</p> -->
        
        
    </v-navigation-drawer>
</div>
</template>
<script>

export default {
data(){
    return{
        drawer:false,
        menu:[
            {name:'الصفحة الرئيسية',link:'/'},
            {name:'النتيجة',link:'current_result'},
            {name:'النتائج السابقة',link:''},
            {name:'مستوى الاداء',link:''},
        ]
    }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');
/* .vert_hover:hover{
background-color:#000000;
border-radius: 11px;
}  */
.poin{
    cursor:pointer;
    text-decoration: none;
}
.fmsi img{
    width: 42px;
    height: 42px;
    border-radius: 90px;
    display: inline-block;
}
.uni_name{
    font-family: 'Lalezar', cursive;
    display: inline-block;
    font-size:20px;
}
</style>