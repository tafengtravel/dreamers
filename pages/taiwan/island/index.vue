<template>
  <div class="grid grid-cols-1 bg-[#F0F0F0]">
    <!-- 每頁面開頭需偏移51.7px Navbar -->
    <div class="mt-[51.7px]">
    </div>  
    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-20 el-col-md-offset-2 el-col-lg-16 el-col-lg-offset-4">
      <ProductBoxview :data="productBoxviewChild"></ProductBoxview>
    </div>
  </div>
  
</template>

<script>
import ProductBoxview from '~/components/ProductBoxview.vue';


export default {
  components: { 
    ProductBoxview,
  },
  data() {
    return{
      productBoxviewChild:[
        
      ],
    }
  },
  head() {
    return {
      title: '國內離島｜大豐旅行社',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '澎湖、金門、馬祖、綠島、蘭嶼、小琉球，一年四季暢玩台灣離島！各式套裝商品由您選購，不論是團體還是自由行全在大豐！'
        }
      ]
    }
  },
  async asyncData () {
    let productBoxviewChild = [
      {
        coverUrlSmall:'../../penghu1.jpg',
        title:'澎湖',
        features:'最閃耀的明珠、最壯觀的玄武岩、夏季最優惠\n可享優惠價加購在地活動',
        lowPrice:'2399',
        url:'',
        tag:['團體','自由行']
      },
      {
        coverUrlSmall:'../../green1.jpg',
        title:'綠島',
        features:'火燒島、自然風情、監獄、潛水天堂\n可享優惠價加購在地活動',
        lowPrice:'2100',
        url:'',
        tag:['自由行']
      },
      {
        coverUrlSmall:'../../lanyu1.jpg',
        title:'蘭嶼',
        features:'飛魚、拼板舟、地下屋、自然風情、潛水天堂\n可享優惠價加購在地活動',
        lowPrice:'3000',
        url:'',
        tag:['自由行']
      },
      {
        coverUrlSmall:'../../kinmen1.jpg',
        title:'金門',
        features:'戰地風雲，鋼刀、貢糖、高粱酒\n可享優惠價加購在地活動',
        lowPrice:'3499',
        url:'',
        tag:['團體','自由行']
      },
      {
        coverUrlSmall:'../../matsu1.jpg',
        title:'馬祖',
        features:'戰地風雲、海防據點、坑道、人生必看藍眼淚\n可享優惠價加購在地活動',
        lowPrice:'5699',
        url:'',
        tag:['團體','自由行']
      },
      {
        coverUrlSmall:'../../liuqiu1.jpg',
        title:'小琉球',
        features:'烏鬼洞、花瓶石、美人洞、海龜\n可享優惠價加購在地活動',
        lowPrice:'1500',
        url:'',
        tag:['自由行']
      },
    ]
    return { productBoxviewChild: productBoxviewChild}
  },
  methods: {
    
  },
  watch: {

  },
  mounted() {

  }
}
</script>

<style>

</style>


