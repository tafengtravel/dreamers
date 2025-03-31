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
      title: '國內本島｜大豐旅行社',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '台灣本島旅遊，一至三日遊，北中南出發，一起來體驗台灣的美！'
        }
      ]
    }
  },
  async asyncData () {
    let productBoxviewChild = [
      // {
      //   coverUrlSmall:'../../penghu1.jpg',
      //   title:'賞花季',
      //   features:'合歡山賞杜鵑！一起去賞花吧！',
      //   featuresRed:'《加入 line 即時回答》',
      //   lowPrice:'2399',
      // },
      {
        coverUrlSmall:'../../smagus.jpg',
        title:'司馬庫斯',
        features:'司馬庫斯１－３日遊，６人成行，說走就走',
        featuresRed:'《加入 line 即時回答》',
        lowPrice:'2100',
        url:''
      },
      {
        coverUrlSmall:'../../oneday.jpg',
        title:'一日遊',
        features:'全台各地出發，熱門景點、等您來報名，６人起可自行組團',
        featuresRed:'《加入 line 即時回答》',
        lowPrice:'700',
        url:''
      },
      {
        coverUrlSmall:'../../twoday.jpg',
        title:'二日遊',
        features:'全台各地出發，熱門景點、等您來報名，６人起可自行組團',
        featuresRed:'《加入 line 即時回答》',
        lowPrice:'3000',
        url:''
      },
      {
        coverUrlSmall:'../../threeday.jpg',
        title:'三日遊',
        features:'全台各地出發，熱門景點、等您來報名，６人起可自行組團',
        featuresRed:'《加入 line 即時回答》',
        lowPrice:'5200',
        url:''
      },
      {
        coverUrlSmall:'../../bus.jpg',
        title:'包車旅遊',
        features:'全台各地出發，想去哪就去哪',
        featuresRed:'《加入 line 即時回答》',
        lowPrice:'5500',
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


