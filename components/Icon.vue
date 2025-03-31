<template>
  
  <div class="grid grid-cols-3 gap-7 md:gap-6 md:grid-cols-9 font font-bold">

    <div class="flex justify-center" v-for="(item,index) in data.icon">
      <NuxtLink :to="data.link[index]" class="text-center">
        <img class="my-2" :src="`./${item}`" style="width:100px">
        <span>{{data.text[index]}}</span>
      </NuxtLink>
    </div>
    
  </div>
</template>

<script>
import '../assets/font.css'

export default {
  data() {
    return {
      data:{
        icon:[
          '1.png',
          '2.png',
          '3.png',
          '4.png',
          '5.png',
          '6.png',
          '7.png',
          '8.png',
          '9.png',
        ],
        text:[
          '國內本島',
          '國內離島',
          '在地行程',
          '國外團體',
          '國外自由行',
          '世界郵輪',
          '來台專區',
          '遊覽車出租',
          '客製化',
        ],
        link:[
          '/taiwan/group',
          '/taiwan/island',
          '/activity',
          '/foreign/group',
          '/foreign/self',
          '/cruise',
          '/taiwan/group',
          '/bus',
          '/customize',
        ]          
      },
      isActive:false,
      isHidden:true,
      animatePhoto:'',
      
      carouselLoop:true,
      speed:5,
    };
  },
  methods: {

  },
  watch: {

  },
  mounted() {

  }
};
</script>

<style>
@media (min-width: 1280px){
  .mobileShow {
    display: none;
  }
}
@media (max-width: 1280px) {
  .desktopShow {
    display: none;
  }
}

</style>
