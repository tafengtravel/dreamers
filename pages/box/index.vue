<template>
  <div class="grid grid-cols-1 bg-[#F0F0F0]">
    <!-- 每頁面開頭需偏移51.7px Navbar -->
    <div class="mt-[51.7px]">
    </div>
    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-16 el-col-md-offset-4 el-col-lg-16 el-col-lg-offset-4 my-7">

      <el-card class="box-card rounded-[8px] my-5" :body-style="{ padding: '0px'}" shadow="never" >
        <div class ="el-col el-col-22 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-22 el-col-md-offset-1 el-col-lg-22 el-col-lg-offset-1">
          
        </div>
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
        totalGameRecord[i].rbi = data.values[4][1] || ""
        totalGameRecord[i].mvp = data.values[5][1] || ""
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
  mounted() {
    console.log(this.totalGameRecord)
  }
}
</script>

<style>
.el-table .color-row {
  background: #C9D6E0;
}
</style>


