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
        
      ],
    }
  },
  head() {
    return {
      title: '海島自由行｜大豐旅行社',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '長灘島自由行、宿霧自由行、巴拉望自由行、沙巴自由行、峇里島自由行、馬爾地夫自由行、海島自由行、海島機加酒自由行、長灘島加酒自由行、宿霧機加酒自由行、巴拉望機加酒自由行、沙巴機加酒自由行、峇里島機加酒自由行、馬爾地夫機加酒自由行、想出國玩卻不想跟團嗎？找大豐就對了，各式客制化自由行套裝！讓您玩得開心！'
        }
      ]
    }
  },
  async asyncData () {
    let productBoxviewChild = [
      {
        coverUrlSmall:'../../penghu1.jpg',
        title:'長灘島｜機＋酒自由行',
        features:'四天三夜預購中，再送WIFI',
        lowPrice:'',
        tag:['自由行'],
        url:''
      },
      {
        coverUrlSmall:'../../green1.jpg',
        title:'宿霧｜機＋酒自由行',
        features:'三天兩夜預購中，再送WIFI',
        lowPrice:'',
        tag:['小包團'],
        url:''
      },
      {
        coverUrlSmall:'../../green1.jpg',
        title:'巴拉望｜機＋酒自由行',
        features:'三天兩夜預購中，再送WIFI',
        lowPrice:'',
        tag:['自由行'],
        url:''
      },
      {
        coverUrlSmall:'../../green1.jpg',
        title:'沙巴｜機＋酒自由行',
        features:'三天兩夜預購中，再送WIFI',
        lowPrice:'',
        tag:['自由行'],
        url:''
      },
      {
        coverUrlSmall:'../../green1.jpg',
        title:'峇里島｜機＋酒自由行',
        features:'三天兩夜預購中，再送WIFI',
        lowPrice:'',
        tag:['自由行'],
        url:''
      },
      {
        coverUrlSmall:'../../green1.jpg',
        title:'馬爾地夫｜機＋酒自由行',
        features:'三天兩夜預購中，再送WIFI',
        lowPrice:'',
        tag:['自由行'],
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


