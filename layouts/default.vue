<template>
  <div class="font-sans text-black antialiased">
    <Navigation :menu="menu"></Navigation>
    <!--<Drawer :swDrawer="swDrawer" :menu="menu"/>-->
    <nuxt/>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";
import axios from "axios";
axios.defaults.headers.common["user-key"] = "cd1db65340e4c76de5e22fa960b6b014";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";//proxy para abrir los cors de la api.

const menu =[
  {
    label:'Home',
    path:''
  },
  {
    label:'Blog',
    path:'blog'
  },

  {
    label:'About',
    path:'about'
  },

  {
    label:'Login',
    path:'login'
  }
]


export default {
  components: {
    Navigation,
    //Drawer
  },
  data(){
    return{
      menu
    }
  },
  /*methods:{
    clickMenu(){
      console.log('click from default')
    }
  }*/
};
</script>