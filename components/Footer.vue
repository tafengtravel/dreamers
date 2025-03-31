<template>
  <footer class="p-4 bg-white sm:p-6" style="background-color:#f8f9fd;">
    <div class="md:flex md:justify-center">
      <div class="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2">
        <div class="row-span-2">
          <h2 class="mb-6 text-md font-semibold text-gray-900 uppercase">大豐旅行社高雄總公司</h2>
          <ul class="text-gray-600 text-md">
            <li class="my-2">
              甲種旅行業&emsp;負責人：陳麗珠
            </li>
            <li class="my-2">
              交觀甲5609號&emsp;品保高0098號&emsp;公司執照
            </li>
            <li class="my-2">
              週一至週五&emsp;08:30-19:00
            </li>
            <li class="my-2">
              電話：(07)552-3515&emsp;傳真：(07)552-3517
            </li>
            <li class="my-2">
              E-Mail：tafengtravel@gmail.com
            </li>
            <li class="my-2">
              高雄市鼓山區中華一路126號11F
            </li>
          </ul> 
        </div>
        <div>
          <h2 class="mb-6 text-md font-semibold text-gray-900 uppercase">大豐旅行社台中分公司</h2>
          <ul class="text-gray-600 text-md">
            <li class="my-2">
              電話：(04)2202-5602 2202-5603&emsp;傳真：(04)2302-0412
            </li>
            <li class="my-2">
              地址：台中市北區中清路一段89號3樓321室
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-md font-semibold text-gray-900 uppercase">大豐旅行社台北分公司</h2>
          <ul class="text-gray-600 text-md">
            <li class="my-2">
              電話：(02)2500-0611&emsp;2500-0612
            </li>
            <li class="my-2">
              地址：台北市大安區信義路四段279號8樓(籌備處)
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
    <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center">©TAFENG TRAVEL SERVICE CO.,LTD
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
      <li class="my-2">
        <a href="https://line.me/ti/g2/bKiBcf3515W4US8Y1MMVPg?utm_source=invitation&amp;utm_medium=link_copy&amp;utm_campaign=default" target="_blank">
          <img src="~/static/openchat.jpg" style="width: 40px" class="rounded-full">
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