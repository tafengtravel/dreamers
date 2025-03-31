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
      title: '韓國自由行｜大豐旅行社',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '韓國、首爾、釜山、大邱、濟州島，想出國玩卻不想跟團嗎？找大豐就對了，各式客制化自由行套裝！讓您玩得開心！韓國機加酒自由行、韓國自由行'
        }
      ]
    }
  },
  async asyncData () {
    let productBoxviewChild = [
      {
        coverUrlSmall:'../../penghu1.jpg',
        title:'首爾｜機＋酒自由行',
        features:'三天兩夜預購中，再送WIFI',
        lowPrice:'',
        tag:['小包團','自由行'],
        url:''
      },
      {
        coverUrlSmall:'../../green1.jpg',
        title:'釜山｜機＋酒自由行',
        features:'三天兩夜預購中，再送WIFI',
        lowPrice:'',
        tag:['小包團','自由行'],
        url:''
      },
      {
        coverUrlSmall:'../../lanyu1.jpg',
        title:'大邱｜機＋酒自由行',
        features:'三天兩夜預購中，再送WIFI',
        lowPrice:'',
        tag:['小包團','自由行'],
        url:''
      },
      {
        coverUrlSmall:'../../liuqiu1.jpg',
        title:'濟州島｜機＋酒自由行',
        features:'三天兩夜預購中，再送WIFI',
        lowPrice:'',
        tag:['小包團','自由行'],
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


