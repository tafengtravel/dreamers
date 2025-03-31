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
      title: '國外團體｜大豐旅行社',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '想要出國卻不想要自由行嗎？那就來參加團體遊吧！專業導遊親自帶團，帶您走訪全世界，最好玩的團體旅遊盡在大豐'
        }
      ]
    }
  },
  async asyncData () {
    let productBoxviewChild = [
      {
        coverUrlSmall:'../../foreign_group/foreign_JP.jpg',
        title:'日本',
        features:'line上報名每團均有額外優惠折扣價',
        featuresRed:'《加入 line 即時回答》',
        lowPrice:'29999',
        url:'',
        tag:['團體']
      },
      {
        coverUrlSmall:'../../foreign_group/foreign_KR.jpg',
        title:'韓國',
        features:'line上報名每團均有額外優惠折扣價',
        featuresRed:'《加入 line 即時回答》',
        lowPrice:'29999',
        url:'',
        tag:['團體']
      },
      {
        coverUrlSmall:'../../foreign_group/foreign_CH.jpg',
        title:'中國',
        features:'line上報名每團均有額外優惠折扣價',
        featuresRed:'《加入 line 即時回答》',
        lowPrice:'29999',
        url:'',
        tag:['團體']
      },
      {
        coverUrlSmall:'../../foreign_group/foreign_TH.jpg',
        title:'泰國',
        features:'line上報名每團均有額外優惠折扣價',
        featuresRed:'《加入 line 即時回答》',
        lowPrice:'29999',
        url:'',
        tag:['團體']
      },
      {
        coverUrlSmall:'../../foreign_group/foreign_MAS.jpg',
        title:'馬來西亞&新加坡',
        features:'line上報名每團均有額外優惠折扣價',
        featuresRed:'《加入 line 即時回答》',
        lowPrice:'29999',
        url:'',
        tag:['團體']
      },
      {
        coverUrlSmall:'../../foreign_group/foreign_usa.jpg',
        title:'美國&加拿大',
        features:'line上報名每團均有額外優惠折扣價',
        featuresRed:'《加入 line 即時回答》',
        lowPrice:'29999',
        url:'',
        tag:['團體']
      },
      {
        coverUrlSmall:'../../foreign_group/foreign_ocean.jpg',
        title:'海島',
        features:'line上報名每團均有額外優惠折扣價',
        featuresRed:'《加入 line 即時回答》',
        lowPrice:'29999',
        url:'',
        tag:['團體']
      },
      {
        coverUrlSmall:'../../foreign_group/foreign_NZ.jpg',
        title:'紐西蘭&澳洲',
        features:'line上報名每團均有額外優惠折扣價',
        featuresRed:'《加入 line 即時回答》',
        lowPrice:'29999',
        url:'',
        tag:['團體']
      },
      {
        coverUrlSmall:'../../foreign_group/foreign_EU.jpg',
        title:'歐洲',
        features:'line上報名每團均有額外優惠折扣價',
        featuresRed:'《加入 line 即時回答》',
        lowPrice:'29999',
        url:'',
        tag:['團體']
      },
      {
        coverUrlSmall:'../../foreign_group/foreign_SA.jpg',
        title:'南亞',
        features:'line上報名每團均有額外優惠折扣價',
        featuresRed:'《加入 line 即時回答》',
        lowPrice:'29999',
        url:'',
        tag:['團體']
      },
      {
        coverUrlSmall:'../../foreign_group/foreign_ME.jpg',
        title:'中東',
        features:'line上報名每團均有額外優惠折扣價',
        featuresRed:'《加入 line 即時回答》',
        lowPrice:'29999',
        url:'',
        tag:['團體']
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


