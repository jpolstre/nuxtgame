<template>
<div class="disable-selection" @blur="close">
  <div class="bg-blue-900 font-semibold fixed w-full border-b-2 border-gray-600">
    <div class="container mx-auto flex justify-between items-center p-6">
      <NuxtLink to="/" class="text-white no-underline hover:text-gray-200 font-black font-heading">GameApp</NuxtLink>
      <div class="md:flex hidden">
        <NuxtLink to="/" class="border-b-2 border-transparent hover:border-gray-300 text-white no-underline hover:text-gray-200 ml-16">Home</NuxtLink>
        <NuxtLink to="/blog" class="border-b-2 border-transparent hover:border-gray-300 text-white no-underline hover:text-gray-200 ml-16">Blog</NuxtLink>
        <NuxtLink to="/about" class="border-b-2 border-transparent hover:border-gray-300 text-white no-underline hover:text-gray-200 ml-16">About</NuxtLink>
        <NuxtLink to="/login" class="border-b-2 border-transparent hover:border-gray-300 text-white no-underline hover:text-gray-200 ml-16">Login</NuxtLink>
      </div>
      <svg
        @click="swDrawer = !swDrawer"
        class="flex md:hidden fill-current text-white cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          class="heroicon-ui "
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        />
      </svg>
    </div>
  </div>
   <div :class="{'drawer-show':swDrawer===true, 'drawer-hide':swDrawer===false}" class="border-b-2 border-gray-600 text-center flex flex-col md:hidden items-center fixed bg-blue-900  w-full top-10 right-0 pb-8 mt-12">
    <a  :href="'/'+item.path" @click.prevent="goRoute('/'+item.path)"  v-for="(item, index) in menu" :key="index" class="py-4 w-full text-white font-bold">
      {{item.label}}
    </a>
  </div>  
</div>
  
</template>
<script>
export default {
  props:['menu'],
  data(){
    return{
      swDrawer:false
    }
  },
  
  methods: {
    goRoute(path){
      this.swDrawer = false
      this.$router.push({ 
        path
    })
    },
    close(){
      alert('blur')
    }
  },
}
</script>
<style lang="css">
.drawer-hide{
  height: 0;
  /*transition: visibility 0s, opacity 0.5s linear;*/
  -webkit-transition: height 0.5s; 
  transition: height 0.5s;
}
.drawer-hide a{
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.4s, opacity 0.4s linear;
  
}

.drawer-show{
  height:300px;
  -webkit-transition: height 0.5s; 
  transition: height 0.5s;
  /*transition: visibility 0.6s, opacity 0.6s linear;*/
}
.drawer-show a{
  visibility: visible;
  opacity: 1;
  transition: visibility 1s, opacity 1s linear;

}
  
  
</style>