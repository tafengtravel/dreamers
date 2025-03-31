<template>
  <div class="grid grid-cols-1 bg-[#F0F0F0]">
    <div class="container mt-[51.7px]">
      <main class="h-screen w-full flex flex-col justify-center items-center">
        <h1 class="text-9xl font-extrabold text-black tracking-widest">404</h1>
        <div class="bg-[#FF6600] px-2 text-sm rounded rotate-12 absolute text-white">
          Page Not Found
        </div>

          <p class="mt-4 mb-8 font-semibold ">抱歉，此商品已下架或網址不存在</p>
          <a href="/">
            <el-button class="bg-[#E6A23C]" type="warning" round>回到首頁</el-button>
          </a>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
