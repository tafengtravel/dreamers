<template>
  <div class="grid grid-cols-1 bg-[#F0F0F0]">
    <!-- 每頁面開頭需偏移51.7px Navbar -->
    <div class="mt-[51.7px]">
    </div>
    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-16 el-col-md-offset-4 el-col-lg-16 el-col-lg-offset-4 my-5">

      <el-card class="box-card rounded-[8px] my-9" :body-style="{ padding: '0px'}" shadow="never" v-for="item in totalGameRecord">
        <div class ="el-col el-col-22 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-22 el-col-md-offset-1 el-col-lg-22 el-col-lg-offset-1 my-7">
         
          <el-col class ="el-col mt-1 mb-4">
            <div class="text-xl text-center font-semibold text-[#333] md:text-2xl">
              {{item.gameDate}} 
            </div>
          </el-col>
          <el-col class ="el-col el-col-9 el-col-xs-9 el-col-sm-9 el-col-lg-9 ">
            <div class="text-2xl text-center font-semibold leading-10 text-[#003364] md:text-3xl">
              {{item.teamRecord[0].team}}
            </div>
          </el-col>
          <el-col class ="el-col el-col-6 el-col-xs-6 el-col-sm-6 el-col-lg-6 ">
            <div class="text-2xl text-center font-semibold leading-10 text-[#003364] md:text-3xl">
              {{item.teamRecord[0].R}} - {{item.teamRecord[1].R}}
            </div>
          </el-col> 
          <el-col class ="el-col el-col-9 el-col-xs-9 el-col-sm-9 el-col-lg-9 ">
            <div class="text-2xl text-center font-semibold leading-10 text-[#003364] md:text-3xl">
              {{item.teamRecord[1].team}}
            </div>
          </el-col>
          
          <div class="mt-[130px] el-row text-center">
            <div class="el-col el-col-8 el-col-xs-24 el-col-sm-24 el-col-lg-8 my-1 flex flex-col items-center">
              <el-tag type="success" effect="dark" style="width: 100px; font-size: 18px;">勝利投手</el-tag>
              <div class="text-base text-[#666] mt-1">{{ item.winPitcher }}</div>
            </div>

            <div class="el-col el-col-8 el-col-xs-24 el-col-sm-24 el-col-lg-8 my-1 flex flex-col items-center">
              <el-tag type="danger" effect="dark" style="width: 100px; font-size: 18px;">敗戰投手</el-tag>
              <div class="text-base text-[#666] mt-1">{{ item.losePitcher }}</div>
            </div>

            <div class="el-col el-col-8 el-col-xs-24 el-col-sm-24 el-col-lg-8 my-1 flex flex-col items-center">
              <el-tag type="info" effect="dark" style="width: 100px; font-size: 18px;">救援成功</el-tag>
              <div class="text-base text-[#666] mt-1">{{ item.savePitcher }}</div>
            </div>
          </div>

          <div class="mt-0 el-row text-center md:mt-5">
            <div class="el-col el-col-8 el-col-xs-24 el-col-sm-24 el-col-lg-12 my-1 flex flex-col items-center">
              <el-tag effect="dark" style="width: 100px; font-size: 18px; background-color: #00B5D1; border-color: #00B5D1;">勝利打點</el-tag>
              <div class="text-base text-[#666] mt-1">{{ item.rbi }}</div>
            </div>

            <div class="el-col el-col-8 el-col-xs-24 el-col-sm-24 el-col-lg-12 my-1 flex flex-col items-center">
              <el-tag effect="dark" style="width: 100px; font-size: 18px; background-color: #D4D638; border-color: #D4D638;">單場MVP</el-tag>
              <div class="text-base text-[#666] mt-1">{{ item.mvp }}</div>
            </div>
          </div>

        </div>

        

        <div class ="bg-[#C9D6E0] el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-24 el-col-lg-24">
          <div class="overflow-x-auto" style="text-align:center; width: 100%;" ref="scrollWrapper" @scroll="handleScroll">
            <div ref="tableWrapper" :style="tableWrapperStyle">
              <el-table :data="item.teamRecord" :fit="false" class="custom-table" style="min-width: max-content;">
                <el-table-column prop="team" label="隊伍" width="130" align="center"></el-table-column>
                <el-table-column prop="inning_1" label="1" width="50" align="center"></el-table-column>
                <el-table-column prop="inning_2" label="2" width="50" align="center"></el-table-column>
                <el-table-column prop="inning_3" label="3" width="50" align="center"></el-table-column>
                <el-table-column prop="inning_4" label="4" width="50" align="center"></el-table-column>
                <el-table-column prop="inning_5" label="5" width="50" align="center"></el-table-column>
                <el-table-column prop="inning_6" label="6" width="50" align="center"></el-table-column>
                <el-table-column prop="inning_7" label="7" width="50" align="center"></el-table-column>
                <el-table-column prop="R" label="R" width="50" align="center"></el-table-column>
                <el-table-column prop="H" label="H" width="50" align="center"></el-table-column>
                <el-table-column prop="E" label="E" width="50" align="center"></el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        

<!--         
        <div class ="bg-[#C9D6E0] el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-24 el-col-lg-24">
          <div class="flex justify-center my-4 overflow-x-auto" ref="scrollContainer">
            <div style="display: inline-block;">
              <el-table :data="item.teamRecord" :fit="false" class="custom-table">
                <el-table-column prop="team" label="隊伍" width="130" align="center"></el-table-column>
                <el-table-column prop="inning_1" label="1" width="50" align="center"></el-table-column>
                <el-table-column prop="inning_2" label="2" width="50" align="center"></el-table-column>
                <el-table-column prop="inning_3" label="3" width="50" align="center"></el-table-column>
                <el-table-column prop="inning_4" label="4" width="50" align="center"></el-table-column>
                <el-table-column prop="inning_5" label="5" width="50" align="center"></el-table-column>
                <el-table-column prop="inning_6" label="6" width="50" align="center"></el-table-column>
                <el-table-column prop="inning_7" label="7" width="50" align="center"></el-table-column>
                <el-table-column prop="R" label="R" width="50" align="center"></el-table-column>
                <el-table-column prop="H" label="H" width="50" align="center"></el-table-column>
                <el-table-column prop="E" label="E" width="50" align="center"></el-table-column>
              </el-table>
            </div>
          </div>
        </div> -->
        
      </el-card>

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
      boxSheets:'',
      gameRecord:[],
      totalGameRecord:[],
      isOverflow: false,

    }
  },
  head() {
    return {
      title: '成績看板｜夢想家棒球隊 DREAMERS BASEBALL TEAM',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '夢想家棒球隊，由一群熱愛打棒球的學生及社會人士組成，為高雄草野球聯盟一員'
        }
      ]
    }
  },
  async asyncData () {
    const boxUrlId = 'https://sheets.googleapis.com/v4/spreadsheets/1Kml56EsYORLRM572MzHcRbAtuxtvKtWrCvDQxjqX2NY'
    const apiKey = 'AIzaSyDVX99fm1rQctLiW-BCTyo407Q0w4Ku_78'
    const axios = (await import('axios')).default
    const { data:boxSheets} = await axios.get(boxUrlId+"?key="+apiKey)

    //https://sheets.googleapis.com/v4/spreadsheets/1Kml56EsYORLRM572MzHcRbAtuxtvKtWrCvDQxjqX2NY/values/2025-07-18!A2:O?key=AIzaSyDVX99fm1rQctLiW-BCTyo407Q0w4Ku_78

    // console.log(boxSheets)

    let totalGameRecord  = []

    boxSheets.sheets.forEach((element,index) => {
      totalGameRecord.push({
        'gameDate':element.properties.title,
        'teamRecord':[],
      })
    });

    

    for(let i=0;i<totalGameRecord.length;i++){
      let { data } = await axios.get(boxUrlId+"/values/'"+boxSheets.sheets[i].properties.title+"'!A2:O?key="+apiKey)
      if(boxSheets.sheets[i].properties.title == totalGameRecord[i].gameDate){
        for (let j = 0; j < 2; j++) {
          totalGameRecord[i].teamRecord.push({
            'team': data.values[j][0],
            'inning_1': data.values[j][1],
            'inning_2': data.values[j][2],
            'inning_3': data.values[j][3],
            'inning_4': data.values[j][4],
            'inning_5': data.values[j][5],
            'inning_6': data.values[j][6],
            'inning_7': data.values[j][7],
            'R': data.values[j][8],
            'H': data.values[j][9],
            'E': data.values[j][10],
          })
        }
        totalGameRecord[i].winPitcher = data.values[2][1] || ""
        totalGameRecord[i].losePitcher = data.values[3][1] || ""
        totalGameRecord[i].savePitcher = data.values[4][1] || ""
        totalGameRecord[i].rbi = data.values[5][1] || ""
        totalGameRecord[i].mvp = data.values[6][1] || ""
      }
    }
    console.log(totalGameRecord)

    return {
      boxSheets:boxSheets,
      totalGameRecord:totalGameRecord,
    }
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex%2 === 1) {
        return 'color-row';
      } 
      return '';
    },

  },
  watch: {

  },
  computed: {
    tableWrapperStyle() {
      return this.isOverflow
        ? { display: 'inline-block' }
        : { display: 'inline-block', maxWidth: '100%' }
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkOverflow);
  },
  methods: {
    checkOverflow() {
      this.$nextTick(() => {
        const wrapper = this.$refs.scrollWrapper;
        const table = this.$refs.tableWrapper;
        if (wrapper && table) {
          this.isOverflow = table.scrollWidth > wrapper.clientWidth;
          if (this.isOverflow) {
            wrapper.scrollLeft = 0; // 確保一開始滾動條在左邊
          }
        }
      });
    },
    handleScroll() {
      // 可自行加入其他滾動監聽處理（非必須）
    },
  },
  mounted() {

    this.checkOverflow();
    window.addEventListener('resize', this.checkOverflow);

    console.log(this.totalGameRecord)
  }
}
</script>

<style>
.custom-table .color-row {
  background: #C9D6E0;
}

.custom-table {
  background: #C9D6E0;
}

.custom-table,
.custom-table .el-table__header-wrapper,
.custom-table .el-table__body-wrapper,
.custom-table .el-table__footer-wrapper {
  border-width: 10px !important;
  border-style: solid !important;
  border-color: #C9D6E0 !important;
}

.custom-table th,
.custom-table td {
  border-width: 2px !important;
  border-style: solid !important;
  border-color: #C9D6E0 !important;
  font-size: 16px;
  color: black;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  border: 2px solid #C9D6E0;
  margin: 3px;
}

.el-table::before {

  z-index: 0;
}

</style>

