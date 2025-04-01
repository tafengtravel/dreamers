<template>
  <div>
    <nav class="fixed w-full z-50 bg-white shadow" style="border-top: 0.5rem solid;border-top-color: #ffffff;">
      <div class="flex items-center justify-between">

        <!-- Header logo -->
        <div>
          <Logo />
        </div>

        <!-- Mobile toggle -->
        <div class="lg:hidden mr-3">
          <button @click="drawer">
            <svg 
              class="h-8 w-8 fill-current text-black"
              fill="none" stroke-linecap="round" 
              stroke-linejoin="round" stroke-width="2" 
              viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Navbar -->
        <div class="hidden lg:block" >
          <ul class="flex space-x-6 text-base font-sans mr-[20px]">
            <li class="text-base title-font transition duration-300 border-b-4 border-transparent hover:border-[#003364]">
              <NuxtLink to="/">
                首頁
              </NuxtLink>
            </li>
            <li class="text-base title-font transition duration-300 border-b-4 border-transparent hover:border-[#003364]">
              <NuxtLink to="#">
                球員資料
              </NuxtLink>
            </li>
            <li class="text-base title-font transition duration-300 border-b-4 border-transparent hover:border-[#003364]">
              <NuxtLink to="#">
                戰績排行
              </NuxtLink>
            </li>
            <li class="text-base title-font transition duration-300 border-b-4 border-transparent hover:border-[#003364]">
              <NuxtLink to="#">
                賽程表
              </NuxtLink>
            </li>
            <li @mouseover="subMenuDomestic = true;subMenuForeign = false" @mouseleave="subMenuDomestic = false"><a href="#" class="flex text-base title-font transition duration-300 border-b-4 border-transparent hover:border-[#003364]">數據統計</a>
              <ul 
                class="absolute animate__fastest rounded-md bg-white w-30 bg-white px-4 py-3 title-font-mobile mb-4 overflow-auto ease-in-out transition-all" 
                style="top:2.225rem;box-shadow: 0 0 4px rgb(0 0 0 / 30%)"
                :class="{'invisible':!subMenuDomestic,'animate__fadeIn':subMenuDomestic,'animate__animated':subMenuDomestic}" 
              >
                <li @click="subMenuDomestic = false">
                  <NuxtLink to="/record/batter" class="flex items-center p-2 transition duration-300 border-b-4 border-transparent hover:border-[#003364]">
                    打者
                  </NuxtLink>
                </li>
                <li @click="subMenuDomestic = false">
                  <NuxtLink to="/record/pitcher" class="flex items-center p-2 transition duration-300 border-b-4 border-transparent hover:border-[#003364]">
                    投手
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
          
        </div>

        <!-- Dark Background Transition -->
        <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0"
        >
          <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
              <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
          </div>
        </transition>

        <!-- Right Drawer Menu -->
        <!-- 右邊navbar right translate-x-full-->
        <aside class="p-5 transform top-0 right-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : 'translate-x-full'">
          
          <div class="close">
            <!-- 右邊navbar left-->
            <button class="absolute top-0 left-0 mt-4 mr-4" @click=" isOpen = false">
              <svg 
                class="w-6 h-6"
                fill="none" stroke-linecap="round" 
                stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <br><br>

          <ul class="divide-y font-sans">
            <li @click="isOpen = false"><NuxtLink to="/" class="flex title-font-mobile my-4 inline-block">首頁</NuxtLink></li>
            <li @click="isOpen = false"><NuxtLink to="#" class="flex title-font-mobile my-4 inline-block">球員資料</NuxtLink></li>
            <li @click="isOpen = false"><NuxtLink to="#" class="flex title-font-mobile my-4 inline-block">戰績排行</NuxtLink></li>
            <li @click="isOpen = false"><NuxtLink to="#" class="flex title-font-mobile my-4 inline-block">賽程表</NuxtLink></li>

            
            <li @click="subMenuForeign = !subMenuForeign"><NuxtLink to="#" class="flex title-font-mobile my-4 inline-block" >數據統計</NuxtLink>
              <ul 
                class="title-font-mobile animate__fastest mb-4 overflow-auto ease-in-out transition-all duration-300"
                :class="{'hidden':!subMenuForeign,'animate__fadeIn':subMenuForeign,'animate__animated':subMenuForeign}"
              >
                <li @click="isOpen = false">
                  <NuxtLink to="/record/batter" class="flex p-2 transition">投手</NuxtLink>
                </li>
                <li @click="isOpen = false">
                  <NuxtLink to="/record/pitcher" class="flex p-2 transition">打者</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>

        </aside>

        

      </div>
      
    </nav>
    

  </div>
  
  
</template>

<script>
export default {
  data() {
    return {
      isOpen:false,
      subMenuDomestic:false,
      subMenuForeign:false,
      dialogVisible:false,
      input2:'',
      isLogin:false
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    handleScroll () {
      // Your scroll handling here
      // if(window.scrollY > 200 && !this.isActive){
      //   this.isActiveChange=true
      //   this.isActiveBack=false
      //   this.isActive=true
      // }else if(window.scrollY < 200 && this.isActive){
      //   this.isActiveChange=false
      //   this.isActiveBack=true
      //   this.isActive=false
      // }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  }
};
</script>
<style>
.title-font{
  font-family: "Open Sans",sans-serif;
  font-size:18px;
  font-weight: bold;
  color:black;
}
.title-font-mobile{
  font-family: "Open Sans",sans-serif;
  font-weight: bold;
}
.animate__fastest{
  transition-duration: 50ms;
}

/* 以下修正dialog排版 */
.el-dialog {
  width: 90%;
  border-radius: 8px;
}
@media (min-width: 1024px) { 
  .el-dialog {
    width: 35%;
  }
}
@media (min-width: 1500px) { 
  .el-dialog {
    width: 30%;
  }
}

/* 修正primary 背景顏色 */
.el-button--primary {
  background-color: #f60;
}

/* 以下修正dialog登入排版 */
/* .el-input__icon {
  height: 55px;
}
.el-input__prefix {
  left: 10px;
}
:deep .el-input--prefix .el-input__inner {
  height: 50px;
  padding-left: 40px;
}

.el-input__icon {
    height: 0px;
    margin-top: 20%;
} */

</style>
