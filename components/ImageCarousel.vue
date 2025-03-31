<template>
  <div>
    <div class="font-bold leading-loose text-center tracking-25 text-2xl md:text-3xl text-[#FF6600]">
      國內<span class="text-[#000000]">離島</span>
    </div>
    <br><br>
    <div>
      <VueSlickCarousel 
        v-bind="carouselCss"
        @swipe="setCarouselSwiping(true)"
        @mouseup.native="setCarouselSwiping(false)"
        @touchend.native="setCarouselSwiping(false)"
        :class="{ '--swiping' : swiping === true }"  
      >
        <div v-for="item in data.image">
          <a href="#">
            <el-image class="rounded-2xl mx-5" :src="`./${item}`"></el-image>
          </a>
        </div>
      </VueSlickCarousel>
    </div>  

   
  </div>  
</template>

<script>
import '../assets/font.css'

export default {
  data() {
    return {
      swiping:'',
      carouselCss:{
        'infinite':true,
        'swipeToSlide':true,
        'autoplay':true,
        'arrows':false,
        'dots':false,
        "slidesToShow": 4,
        "slidesToScroll": 1,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 4,
              "slidesToScroll": 1,
            }
          },
          {
            "breakpoint": 768,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 1,
            }
          },
        ]
      },
      data:{
        image:[
          'green.webp',
          'kinmen.webp',
          'lanyu.webp',
          'penghu.webp',
          'liuqiu.jpg',
          'matsu.webp',
        ],
      },
    };
  },
  methods: {
    // 以下修正carousel 滑鼠click問題
    setCarouselSwiping(state){
      this.swiping = state;
    }
  },
  watch: {

  },
  mounted() {

  }
};
</script>

<style>
/* 以下修正carousel 滑鼠click問題 */
.slick-slider.--swiping .slick-list:after  {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
</style>
