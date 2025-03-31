<template>
  <div class="grid grid-cols-1 bg-[#F0F0F0]">
    <!-- 每頁面開頭需偏移51.7px Navbar -->
    <div class="mt-[51.7px]">
    </div>
    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-20 el-col-md-offset-2 el-col-lg-16 el-col-lg-offset-4">
      <el-row class="md:my-5" :gutter="40" style="display:flex;flex-wrap:wrap;">
        <el-col class ="my-5 el-col el-col-24 el-col-xs-24 el-col-sm-24  el-col-md-8 el-col-lg-6">
          <div class="">
            <Member></Member>
          </div>
          <div class="mt-5">
            <MemberNavbar :data="MemberNavbarChild"></MemberNavbar>
          </div>
        </el-col>

        <el-col class ="md:my-5 mb-4 el-col el-col-24 el-col-xs-24 el-col-sm-24  el-col-md-16 el-col-lg-18">
          <el-card class="box-card rounded-[8px]" shadow="never">
            <div class="text-[20px] lg:text-[26px] text-gray-700 font-semibold mb-[16px]">
              訂單管理
            </div>
            <el-divider></el-divider>

            <el-card class="box-card rounded-[8px] my-[20px]" shadow="never"v-for="(item,index) in itemData">
              <el-row :gutter="40">
                <el-col class ="my-5 el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-24 el-col-lg-9">
                  <el-image
                    style="width: 100%;height:225px"
                    :src="item.imageUrl"
                    fit="cover"
                    class="rounded-[8px]">
                  </el-image>
                </el-col>
                <el-col class ="my-5 el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-24 el-col-lg-15">
                  <div class="mb-[16px]">
                  <el-tag class="text-[14px]" v-if="depDateCheck(item.depDate)">即將出發</el-tag>
                  <el-tag class="text-[14px]" v-else>已出發</el-tag>
                </div>
                  <div class="text-[18px] lg:text-[20px] text-gray-800 font-semibold mb-[16px]">
                    {{item.title}}  
                  </div>
                  <div class="text-[16px] lg:text-[18px] text-gray-600 font-semibold mb-[6px]">
                    <i class="el-icon-date"></i>
                    日期：{{item.depDate}}<span v-if="item.endDate">~{{item.endDate}}</span>
                  </div>
                  <div class="text-[16px] lg:text-[18px] text-gray-600 font-semibold mb-[6px]">
                    <i class="el-icon-document"></i>
                    方案：{{item.optionTitle}}  
                  </div>
                  <div class="text-[16px] lg:text-[18px] text-gray-600 font-semibold mb-[6px]">
                    <i class="el-icon-collection-tag"></i>
                    訂單編號：{{item.orderId}}  
                  </div>
                  <div class="text-right mb-[6px]">
                    <span class="font-mono text-[14px] lg:text-[18px] text-gray-600 font-semibold">
                      TWD   
                    </span>
                    <span class="font-mono text-[26px] lg:text-[30px] text-[#FF6600] font-semibold">
                      {{item.price}}  
                    </span>
                  </div>
                  <div class="text-right">
                    <el-button type="primary" @click="orderNewTab(item.orderId)">開啟訂單</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-card>
              
            

            
          </el-card>
        </el-col>
      </el-row>
      
    </div>
  </div>
  
</template>

<script>
import MemberNavbar from '~/components/MemberNavbar.vue';
import Member from '~/components/Member.vue';
import * as moment from "moment/moment";


export default {
  components: { 
    MemberNavbar,
    Member
  },
  data() {
    return{
      itemData:[
        {
          imageUrl:'https://mysys.greenscope.com.tw/pubimg/imgLink/HT00215/20221202174204.jpg',
          title:'【限時促銷】日本沖繩｜五日自由行｜保證成團｜桃園出發',
          optionTitle:'樂桃專案',
          orderId:'TF102005212',
          depDate:'2023-03-12',
          endDate:'2023-03-16',
          price:45000
        },
        {
          imageUrl:'https://mysys.greenscope.com.tw/pubimg/imgLink/HT00215/20221202174204.jpg',
          title:'【限時促銷】日本沖繩｜五日自由行｜保證成團｜桃園出發',
          optionTitle:'樂桃專案',
          orderId:'TF102005204',
          depDate:'2023-03-07',
          endDate:'2023-03-11',
          price:45000
        },
        {
          imageUrl:'https://mysys.greenscope.com.tw/pubimg/imgLink/HT00215/20221202180023.jpg',
          title:'【限時促銷】日本沖繩｜四日自由行｜保證成團｜桃園出發',
          optionTitle:'樂桃專案',
          orderId:'TF102005202',
          depDate:'2023-03-06',
          endDate:'',
          price:36000
        },
        {
          imageUrl:'https://mysys.greenscope.com.tw/pubimg/imgLink/HT00215/20221202180023.jpg',
          title:'【限時促銷】日本沖繩｜四日自由行｜保證成團｜桃園出發',
          optionTitle:'樂桃專案',
          orderId:'TF102005201',
          depDate:'2023-03-05',
          endDate:'',
          price:36000
        }
      ],
    }
  },
  head() {
    return {
      title: '訂單管理｜大豐旅行社',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  },
  async asyncData () {
    let MemberNavbarChild = {
      active:'2'
    }
    return { MemberNavbarChild: MemberNavbarChild}
  },
  methods: {
    depDateCheck(depDate){
      if(depDate<=moment().format('YYYY-MM-DD')){
        return false
      }else{
        return true
      }
    },
    orderNewTab(orderId){
      let newTab = this.$router.resolve({ name: 'member-order-orderId', params: { orderId: orderId} }) 
      window.open(newTab.href, "_blank");
    }
  },
  watch: {

  },
  mounted() {

  }
}
</script>

<style>
.el-menu {
  border-right: solid 0px;
  border-radius: 8px;
}
.el-tabs__item {
  font-size: 16px;
  color: #6b7280;
  font-weight: bold;
}
.inline{
  display: inline-block;margin-right:12px
}
.el-form-item__label {
  font-size: 18px;
  color: #404040;
  font-weight: bold;
}
.el-input {
  font-size: 18px;
  color: #404040;
}
</style>


