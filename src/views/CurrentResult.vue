<template>
 <div>
     <Nav/>
    <div class="formdata text-right">
        <h3 class="text-center fonta sizer-1" >قم بإدخال الرقم الجامعي</h3>
         <v-form class="padding-40 mt-4">
         <v-text-field class="text-right">   </v-text-field>  
        <center>
        <v-btn class="text-center fonta deep-purple accent-10" dark>ارسل</v-btn>
        </center>
        </v-form>
        
        <div class="resultshower pa-1">
            <table class="table table-dark table-bordered">
                <thead>
                    <tr>                   
                    <th scope="col">التراكمي</th>
                    <th scope="col">المعدل</th>
                    <th scope="col">السمستر</th>
                    <th scope="col">القسم</th>
                    <th scope="col">الأسم</th>
                

                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>3.0</td>
                    <td>3.0</td>
                    <td>الاول</td>
                    <td>حاسوب</td>
                    <td> محمد فرح محمد</td>

                </tr>
                </tbody>
            </table>
            <div class="transcript">
                <table class="table table-dark table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">الدرجة</th>
                            <th scope="col">المادة</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>A</td>
                            <td>discrete math</td>
                        </tr>    
                        <tr>
                            <td>c</td>
                            <td>linear algebra and its applications</td>
                        </tr>
                        <tr>
                            <td>A</td>
                            <td>intro to computer sciences</td>
                        </tr>
                        <tr>
                            <td>B</td>
                            <td>calculus</td>
                        </tr>
                        <tr>
                            <td>B</td>
                            <td>statistics</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

 </div>
</template>

<script>
import Nav from '../components/Nav.vue'
export default {
   components: {
      Nav
    },
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Changa:wght@300&display=swap');

.padding-40{
    padding-left: 100px;
    padding-right: 100px;
}

.formdata{
        margin-top:70px;
    text-align: right;
}
.fonta{
    font-family: 'Changa', sans-serif;
    margin: 0 auto;
}
.resultshower {
    margin-top: 20px;
    text-align: center !important;
    font-size: 14px;
}
</style>