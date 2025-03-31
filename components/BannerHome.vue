<template>
  <div>
    <div class="hidden md:block"> 
      <!-- 以下修正carousel 滑鼠click問題 -->
      <VueSlickCarousel 
        :swipeToSlide="true" :infinite="true" :autoplay="true" :arrows="true" :dots="true"
        @swipe="setCarouselSwiping(true)"
        @mouseup.native="setCarouselSwiping(false)"
        @touchend.native="setCarouselSwiping(false)"
        :class="{ '--swiping' : swiping === true }"
      >
        <div v-for="item in data.photoBannerDesktop">
          <a href="#">
            <el-image style="width:100" :src="item" >
            </el-image>
          </a>
        </div>
      </VueSlickCarousel>
    </div>  

    <div class="block md:hidden"> 
      <!-- 以下修正carousel 滑鼠click問題 -->
      <VueSlickCarousel 
        :swipeToSlide="true" :infinite="true" :autoplay="true" :arrows="true" :dots="true" 
        @swipe="setCarouselSwiping(true)"
        @mouseup.native="setCarouselSwiping(false)"
        @touchend.native="setCarouselSwiping(false)"
        :class="{ '--swiping' : swiping === true }"  
      >
        <div v-for="item in data.photoBannerMobile">
          <a href="#">
            <el-image style="width:100" :src="item">
            </el-image>
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
      data:{
        photoBannerDesktop:[
          'https://mysys.greenscope.com.tw/pubimg/imgLink/HT00215/20220525184104.jpg',
          'https://mysys.greenscope.com.tw/pubimg/imgLink/HT00215/20220525184201.jpg',
          'https://mysys.greenscope.com.tw/pubimg/imgLink/HT00215/20220609110023.jpg',
          'https://mysys.greenscope.com.tw/pubimg/imgLink/HT00215/20220609111016.jpg',
          'https://mysys.greenscope.com.tw/pubimg/imgLink/HT00215/20220609111544.jpg',
          'https://mysys.greenscope.com.tw/pubimg/imgLink/HT00215/20220609111600.jpg',
        ],
        photoBannerMobile:[
          'https://mysys.greenscope.com.tw/pubimg/imgLink/HT00215/20220525184237.jpg',
          'https://mysys.greenscope.com.tw/pubimg/imgLink/HT00215/20220525184309.jpg',
          'https://mysys.greenscope.com.tw/pubimg/imgLink/HT00215/20220609112226.jpg',
          'https://mysys.greenscope.com.tw/pubimg/imgLink/HT00215/20220609112303.jpg',
          'https://mysys.greenscope.com.tw/pubimg/imgLink/HT00215/20220609112321.jpg',
          'https://mysys.greenscope.com.tw/pubimg/imgLink/HT00215/20220609112342.jpg',
        ]
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
.slick-dots {
  bottom: 10px;
}
.slick-dots li.slick-active button:before {
  color: #f60;
}
.slick-next {
  right: 30px;
  z-index:10
}
.slick-prev {
  left: 30px;
  z-index:10
}

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
