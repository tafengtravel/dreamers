<template>
  <footer class="p-4 bg-white sm:p-6" style="background-color:#f8f9fd;">
    <div class="md:flex md:justify-center">
      <div class="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2">
        <div class="row-span-2">
          <h2 class="mb-6 text-md font-semibold text-gray-900 uppercase">夢想家棒球隊 DREAMERS BASEBALL TEAM</h2>
          <ul class="text-gray-600 text-md">
            <li class="my-2">
              領隊：呂皇毅
            </li>
            <li class="my-2">
              總教練：馮昱雲
            </li>
            <li class="my-2">
              投手教練：莊富傑、郭庭佑
            </li>
            <li class="my-2">
              海外農場總監：王紀霖&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            </li>
        
          </ul> 
        </div>
        <div>
          <h2 class="mb-6 text-md font-semibold text-gray-900 uppercase"> </h2>
          <ul class="text-gray-600 text-md">
            <li class="my-2">
              <br>總務：朱培銘
            </li>
            <li class="my-2">
              視覺設計總監兼粉專小編：王立勝
            </li>
            <li class="my-2">
              午餐股長：林世潾&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
    <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center">©DREAMERS BASEBALL TEAM
        </span>
    </div>

    <ul class="fixed" style="right:20px;bottom:5px;margin-bottom:120px;z-index: 50;">
      <li class="my-2">
        <a href="https://www.facebook.com/tafengtour/" target="_blank">
          <img src="~/static/fb.jpg" style="width: 40px" class="rounded-full">
        </a>
      </li>
      <li class="my-2">
        <a href="https://page.line.me/zok5012a?oat__id=27601&amp;openQrModal=true" target="_blank">
          <img src="~/static/line.jpg" style="width: 40px" class="rounded-full">
        </a>
      </li>
      <li class="my-2">
        <a href="https://www.instagram.com/accounts/login/?next=/tafengtour/" target="_blank">
          <img src="~/static/ig.jpg" style="width: 40px" class="rounded-full">
        </a>
      </li>
      <li><el-backtop style="right:20px;bottom:80px"></el-backtop></li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      data:{},
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
.fa-heart {
    color: #ff415c;
    font-size: 18px;
    margin: 0 2px;
}
.fa {
  display: inline-block;
}
.pulse2 {
  animation-name: pulse2;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes  pulse2 {
  0% {
    transform: scale(1.1);
  }
  50% {
      transform: scale(0.8);
  }
  100% {
      transform: scale(1);
  }
}
.el-backtop {
  background-color: rgb(241, 241, 241);
}
.el-backtop, .el-calendar-table td.is-today {
  color: #575757;
}
</style>