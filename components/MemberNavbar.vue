<template>
  
  <div>
    
    <el-menu
      :default-active="data.active"
      class="el-menu-vertical-demo">
      <el-menu-item index="1" class="text-[16px]" @click="direct('1')">
        <i class="el-icon-setting"></i>
        <span slot="title">帳號設定</span>
      </el-menu-item>
      <el-menu-item index="2" class="text-[16px]" @click="direct('2')">
        <i class="el-icon-document"></i>
        <span slot="title">訂單管理</span>
      </el-menu-item>
    </el-menu>
    
  </div>

</template>

<script>
import '../assets/font.css'

export default {
  props: {
    data: Object,
    required: true
  },
  data() {
    return {
      fits:'cover',
    };
  },
  methods: {
    direct(choose){
      switch (choose) {
        case '1':
          this.$router.push('/member/basic')
          break;
        case '2':
          this.$router.push('/member/order')
          break
      }
    }
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
