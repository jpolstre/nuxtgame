<template>
  <div v-show="swDrawer" class="text-center border-t-2 border-gray-300 flex flex-col items-center fixed bg-blue-900  w-full top-10 right-0 pb-8 mt-16">
   
    <NuxtLink :to="'/'+item.path" v-for="(item, index) in menu" :key="index" class="pt-8 w-full text-white font-bold hover:text-gray-500">
      {{item.label}}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props:['swDrawer', 'menu'],
  
}

</script>