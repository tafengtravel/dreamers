<template>
  
  <div class="bg-[#F0F0F0]">
    
    <!-- 有修改無setpage版本 原本該為dataSearch-->
    <el-row class="mb-10" :gutter="40" style="display:flex;flex-wrap:wrap;">
      <el-col class ="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-12 el-col-lg-8 my-8" v-for="item in data">
        <NuxtLink :to="item.url">
          <el-card class="box-card rounded-[8px] my-5" :body-style="{ padding: '0px'}" style="min-height: 300px;" shadow="never" >
            <div class ="image-margin  el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-24 el-col-lg-24 ">
                <el-image style="width:100% ;height: 260px" :src="item.coverUrlSmall" :fit="fits">
                </el-image>
            </div>

            <div style="padding: 10px;" class ="line text-margin el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-24 el-col-lg-24"> 
                <span class="font font-bold text-xl md:text-2xl"><font color="black">{{item.title}}</font></span>
            </div>

            <div style="padding: 10px;" class ="line text-margin el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-24 el-col-lg-24"> 
              <div v-if="item.tag != undefined">
                <el-tag v-for="itemTag in item.tag" :key="itemTag" type="warning" effect="light" class="m-1">{{itemTag}}</el-tag>
              </div>
              
              <div class="font font-bold text-red-600 text-base md:text-lg">{{item.featuresRed}}</div>
              <div class="font font-bold text-base md:text-lg">{{item.features}}</div>
            </div>

            <div style="padding: 10px; text-align:right" class ="fixed bottom-[1px] text-margin el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-24 el-col-lg-24" v-if="item.lowPriceShow != undefined"> 
                <span class="font text-lg md:text-xl">$</span> 
                <span class="font font-bold text-3xl md:text-3xl text-[#FF6600]">{{item.lowPrice}}</span>
                <span class="font font-bold text-lg md:text-xl">起</span> 
            </div>
          </el-card>
        </NuxtLink>
      </el-col>
    </el-row>
    
  </div>

</template>

<script>
import '../assets/font.css'

export default {
  props: {
    data: Array,
    required: true
  },
  data() {
    return {
      fits:'cover',
    };
  },
  methods: {

  },
  watch: {

  },
  mounted() {

  }
};
</script>

<style>
.el-card{
  height:100%
}
.el-row-inline{
  display: flex;
  flex-wrap:wrap;
}
.el-tag.el-tag--warning {
    background-color: #fff4e5;
    border-color: #faecd8;
    color: #FF6600;
}

</style>
