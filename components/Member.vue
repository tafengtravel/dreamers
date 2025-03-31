<template>
  
  <div>
    
    <el-card class="box-card rounded-[8px]" shadow="never">
      <el-row type="flex" justify="center" class="my-4">
        <el-col class="text-center el-col el-col-8 el-col-xs-8 el-col-sm-8 el-col-md-16 el-col-lg-18">
          <img src="~/static/user.jpg" width="100%" alt="載入圖片">
        </el-col>
      </el-row>

      <el-row type="flex" justify="center" class="my-4">
        <el-col class="text-center text-gray-800 text-[18px] font-semibold mx-2">
          {{itemData.lastName}} {{itemData.firstName}}
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <div class="text-gray-600 text-[18px] font-semibold mx-2">
        TAFENG 會員
      </div>
      <div class="text-gray-600 text-[14px] font-semibold mx-2">
        {{itemData.mail}}
      </div>
      
    </el-card>
    
  </div>

</template>

<script>
import '../assets/font.css'

export default {
  props: {
  },
  data() {
    return {
      fits:'cover',
      itemData:{
        lastName:'呂',
        firstName:'皇毅',
        mail:'kevin860320@gmail.com'
      },
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
