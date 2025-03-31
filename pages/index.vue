<template>
  <div class="grid grid-cols-1 bg-[#F0F0F0]"> 
    <!-- 每頁面開頭需偏移51.7px Navbar -->
    <div class="mt-[51.7px]"></div>
    
    <div>
      <BannerHome ref="bannerHomeChild"></BannerHome>
    </div>

    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-20 el-col-md-offset-2 el-col-lg-16 el-col-lg-offset-4 my-5">
      <el-card class="box-card rounded-[8px] my-5" :body-style="{ padding: '0px'}" shadow="never" >
        <div slot="header" class="text-2xl font-semibold text-[#003364]">
          <span>最新消息</span>
        </div>
        <div class ="el-col el-col-22 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-22 el-col-md-offset-1 el-col-lg-22 el-col-lg-offset-1">
          <el-table :data="tableDataNEWS.slice(0,5)" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'date', order: 'descending'}" :show-header=false>
            <el-table-column prop="date"width='120%'></el-table-column>
            <el-table-column prop="title" ></el-table-column>
            <el-table-column prop="link" width='120%'>
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">開啟</el-button>
              </template>
            </el-table-column>
         </el-table>
        </div>
      </el-card>
    </div>

    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-20 el-col-md-offset-2 el-col-lg-16 el-col-lg-offset-4 my-5">
      <el-row :gutter="40" style="display:flex;flex-wrap:wrap;">
        <el-col class="el-col el-col-12 el-col-xs-24 el-col-sm-24  el-col-md-12 el-col-lg-12 mb-10">
          <el-card class="box-card rounded-[8px] my-5" :body-style="{ padding: '0px'}" shadow="never" >
            <div slot="header" class="text-2xl font-semibold text-[#003364]">
              <span>賽事預告</span>
            </div>
            <div class ="el-col el-col-22 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-22 el-col-md-offset-1 el-col-lg-22 el-col-lg-offset-1">
              <el-table :data="tableDataNEWS.slice(0,5)" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'date', order: 'descending'}" :show-header=false>
                <el-table-column prop="date"width='120%'></el-table-column>
                <el-table-column prop="title" ></el-table-column>
                <el-table-column prop="link" width='120%'>
                  <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">開啟</el-button>
                  </template>
                </el-table-column>
            </el-table>
            </div>
          </el-card>
        </el-col>

        <el-col class="el-col el-col-12 el-col-xs-24 el-col-sm-24  el-col-md-12 el-col-lg-12 mb-10">
          <el-card class="box-card rounded-[8px] my-5" :body-style="{ padding: '0px'}" shadow="never" >
            <div slot="header" class="text-2xl font-semibold text-[#003364]">
              <span>最近賽事</span>
            </div>
            <div class ="el-col el-col-22 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-22 el-col-md-offset-1 el-col-lg-22 el-col-lg-offset-1">
              <el-table :data="tableDataNEWS.slice(0,5)" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'date', order: 'descending'}" :show-header=false>
                <el-table-column prop="date"width='120%'></el-table-column>
                <el-table-column prop="title" ></el-table-column>
                <el-table-column prop="link" width='120%'>
                  <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">開啟</el-button>
                  </template>
                </el-table-column>
            </el-table>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-20 el-col-md-offset-2 el-col-lg-16 el-col-lg-offset-4">
      <div class ="text-2xl font-semibold text-[#003364]">賽事預告</div>
    </div>

    <br><br>

    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-20 el-col-md-offset-2 el-col-lg-16 el-col-lg-offset-4">
      <div class ="text-2xl font-semibold text-[#003364]">最近賽事</div>
    </div>

    <div class ="el-col el-col-24 el-col-xs-24 el-col-sm-22 el-col-sm-offset-1 el-col-md-20 el-col-md-offset-2 el-col-lg-16 el-col-lg-offset-4">
   
    </div>

    <br><br>
    
  </div>
</template>

<script>
import '../assets/font.css'
import BannerHome from '~/components/BannerHome.vue'
import Icon from '~/components/Icon.vue'
import ImageCarousel from '~/components/ImageCarousel.vue'

export default {
  components: { 
    BannerHome,
    Icon,
    ImageCarousel,
  },
  data() {
    return {
      tableDataNEWS: {},   
    };
  },
  methods: {

  },
  watch: {

  },
  async asyncData () {
    let news =[
      {
      date: '2021-05-08',
      title: '夢想家勝率重回五成，皇毅領隊請吃雞排？',
      link:'https://www.facebook.com/DremersBaseballclub/photos/a.139380911191671/287483513048076/'
    },{
      date: '2021-05-01',
      title: '夢想家雨中吞敗',
      link:'https://www.facebook.com/DremersBaseballclub/photos/a.139380911191671/282696666860094/'
    },{
      date: '2021-05-11',
      title: '球經招募中',
      link:'https://www.instagram.com/kevin860320/'
    },{
      date: '2021-11-13',
      title: '狂賀！夢想家第一年成軍即打進季後賽！',
      link:'  https://www.facebook.com/DremersBaseballclub/photos/a.139380911191671/413664767096616'
    },{
      date: '2021-11-16',
      title: '恭喜夢想家本年度高雄草野球聯盟獲得第三名！',
      link:'https://www.facebook.com/DremersBaseballclub/photos/a.139380911191671/415348453594914/'
    }]

    return {tableDataNEWS:news}


    // let newObj
    // await fetch('http://45.76.208.132/teamMember/qry').then(function(response) {
    //   // 直接轉成JSON格式
    //   return response.text()
    // }).then(function(obj) {
    //   // `obj`會是一個JavaScript物件
    //   // console.log(obj)
    //   newObj = obj
      
    // }).catch(function(err) {
    //   // console.log(err)
    // })

    // return { obj: newObj}

  },
  mounted() {
    

  }
}
</script>
<style>

</style>>
