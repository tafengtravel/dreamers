<template>
  <div>
      <!-- 以下修正carousel 滑鼠click問題 -->
      <VueSlickCarousel 
        :swipeToSlide="true" :infinite="true" :autoplay="true" :arrows="true" :dots="true"
        @swipe="setCarouselSwiping(true)"
        @mouseup.native="setCarouselSwiping(false)"
        @touchend.native="setCarouselSwiping(false)"
        :class="{ '--swiping' : swiping === true }"
      >
        <el-image v-for="item in data.photoBannerDesktop" class="img" :src="item" lazy></el-image>
      </VueSlickCarousel>
    
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
          'https://tafengtravel.github.io/tafengtravel/index/domestic/hotel.jpg',
          'https://tafengtravel.github.io/tafengtravel/index/domestic/ensure.jpg',
          'https://tafengtravel.github.io/tafengtravel/index/domestic/smangus.jpg',
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
/* 必須用class覆蓋cover */
.img{
  height: 350px;
  margin:auto;
  object-fit: cover;
}
/* 修正 cover */
.el-image__inner{
  object-fit: cover;
}
</style>
