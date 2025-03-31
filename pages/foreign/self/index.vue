<template>
  <div class="grid grid-cols-1 bg-[#F0F0F0]">
    <!-- 每頁面開頭需偏移51.7px Navbar -->
    <div class="mt-[51.7px]"></div>
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
        {
          coverUrlSmall:'../../penghu1.jpg',
          title:'日本',
          features:'沖繩、大阪、東京、北海道、福岡、北九州\n三天兩夜，再送WIFI',
          lowPrice:'',
          tag:['小包團','自由行'],
          url:'/foreign/self/japan'
        },
        {
          coverUrlSmall:'../../green1.jpg',
          title:'韓國',
          features:'首爾、釜山、大邱、濟州島\n三天兩夜，再送WIFI',
          lowPrice:'',
          tag:['小包團','自由行'],
          url:'/foreign/self/korea'
        },
        {
          coverUrlSmall:'../../lanyu1.jpg',
          title:'中港澳系列',
          features:'中國、香港、澳門\n三天兩夜，再送WIFI',
          lowPrice:'',
          tag:['小包團','自由行'],
          url:'/foreign/self/china'
        },
        {
          coverUrlSmall:'../../kinmen1.jpg',
          title:'東南亞系列',
          features:'曼谷、胡志明、峴港、清邁、新加坡\n三天兩夜，再送WIFI',
          lowPrice:'',
          tag:['小包團','自由行'],
          url:'/foreign/self/south-east'
        },
        {
          coverUrlSmall:'../../matsu1.jpg',
          title:'海島系列',
          features:'長灘島、宿霧、巴拉望、沙巴、峇里島、馬爾地夫\n三天兩夜，再送WIFI',
          lowPrice:'',
          tag:['小包團','自由行'],
          url:'/foreign/self/ocean'
        },
        {
          coverUrlSmall:'../../liuqiu1.jpg',
          title:'郵輪系列',
          features:'星夢郵輪\n三天兩夜',
          lowPrice:'',
          url:'/foreign/self/cruise'
        },
        {
          coverUrlSmall:'../../liuqiu1.jpg',
          title:'廉價航空',
          features:'最便宜的機票，盡在大豐',
          lowPrice:'',
          url:'/flight'
        },
        {
          coverUrlSmall:'../../liuqiu1.jpg',
          title:'傳統航空',
          features:'最便宜的機票，盡在大豐',
          lowPrice:'/flight',
          url:''
        },
      ],
    }
  },
  head() {
    return {
      title: '國外自由行｜小包團｜大豐旅行社',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '日本、韓國、澳門、香港、菲律賓、越南、馬來西亞、新加坡，國外自由行，想出國玩卻不想跟團嗎？找大豐就對了，各式客制化自由行套裝！讓您玩得自由玩得開心！'
        }
      ]
    }
  },
  async asyncData () {
    let productBoxviewChild = [
      {
        coverUrlSmall:'../../penghu1.jpg',
        title:'日本',
        features:'沖繩、大阪、東京、北海道、福岡、北九州\n三天兩夜，再送WIFI',
        lowPrice:'',
        tag:['小包團','自由行'],
        url:'/foreign/self/japan'
      },
      {
        coverUrlSmall:'../../green1.jpg',
        title:'韓國',
        features:'首爾、釜山、大邱、濟州島\n三天兩夜，再送WIFI',
        lowPrice:'',
        tag:['小包團','自由行'],
        url:'/foreign/self/korea'
      },
      {
        coverUrlSmall:'../../lanyu1.jpg',
        title:'中港澳系列',
        features:'中國、香港、澳門\n三天兩夜，再送WIFI',
        lowPrice:'',
        tag:['小包團','自由行'],
        url:'/foreign/self/china'
      },
      {
        coverUrlSmall:'../../kinmen1.jpg',
        title:'東南亞系列',
        features:'曼谷、胡志明、峴港、清邁、新加坡\n三天兩夜，再送WIFI',
        lowPrice:'',
        tag:['小包團','自由行'],
        url:'/foreign/self/south-east'
      },
      {
        coverUrlSmall:'../../matsu1.jpg',
        title:'海島系列',
        features:'長灘島、宿霧、巴拉望、沙巴、峇里島、馬爾地夫\n三天兩夜，再送WIFI',
        lowPrice:'',
        tag:['小包團','自由行'],
        url:'/foreign/self/ocean'
      },
      {
        coverUrlSmall:'../../liuqiu1.jpg',
        title:'郵輪系列',
        features:'星夢郵輪\n三天兩夜',
        lowPrice:'',
        url:'/foreign/self/cruise'
      },
      {
        coverUrlSmall:'../../liuqiu1.jpg',
        title:'廉價航空',
        features:'最便宜的機票，盡在大豐',
        lowPrice:'',
        url:'/flight'
      },
      {
        coverUrlSmall:'../../liuqiu1.jpg',
        title:'傳統航空',
        features:'最便宜的機票，盡在大豐',
        lowPrice:'/flight',
        url:''
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


