<template>
  <div class="grid grid-cols-1 bg-[#F0F0F0]">
    <!-- 每頁面開頭需偏移51.7px Navbar -->
    <div class="mt-[51.7px]">
    </div>
    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-20 el-col-md-offset-2 el-col-lg-20 el-col-lg-offset-2 my-7 md:min-h-[75vh]">

      <el-card class="box-card rounded-[8px] my-5" :body-style="{ padding: '0px'}" shadow="never" >
        <div slot="header" class="text-2xl font-semibold text-[#003364]">
          <span>投手成績</span>
          <el-select v-model="playerChoose" filterable placeholder="請選擇球員" class="float-right" @change="handleChangePlayer" style="width: 200px;">
            <el-option
              v-for="item in playerRecord"
              :key="item.player"
              :label="item.player"
              :value="item.player">
            </el-option>
          </el-select>
        </div>
        <div class ="el-col el-col-22 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-22 el-col-md-offset-1 el-col-lg-22 el-col-lg-offset-1 mb-5">
          <el-table :data="tablePitcherRecord" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'year', order: 'descending'}" show-summary :summary-method="getSummaries">
            <el-table-column prop="number" label="背號" width='80%' fixed sortable :sort-method = "(a,b)=>{return a.number - b.number}"></el-table-column>
            <el-table-column prop="name" label="姓名" sortable :sort-method = "(a,b)=>{return a.name - b.name}"></el-table-column>
            <el-table-column prop="year" label="年度"sortable width='100%' :sort-method = "(a,b)=>{return a.year - b.year}"></el-table-column>
            <el-table-column prop="GP" label="出賽" width='80%' sortable :sort-method = "(a,b)=>{return a.GP - b.GP}"></el-table-column>
            <el-table-column prop="GS" label="先發數" width='100%' sortable :sort-method = "(a,b)=>{return a.GS - b.GS}"></el-table-column>
            <el-table-column prop="GIF" label="中繼數" width='100%' sortable :sort-method = "(a,b)=>{return a.GIF - b.GIF}"></el-table-column>
            <el-table-column prop="IP" label="局數" width='80%' sortable :sort-method = "(a,b)=>{return a.IP - b.IP}"></el-table-column>
            <el-table-column prop="W" label="勝" width='60%' sortable :sort-method = "(a,b)=>{return a.W - b.W}"></el-table-column>
            <el-table-column prop="L" label="敗" width='60%' sortable :sort-method = "(a,b)=>{return a.L - b.L}"></el-table-column>
            <el-table-column prop="SV" label="救援成功" width='110%' sortable :sort-method = "(a,b)=>{return a.SV - b.SV}"></el-table-column>
            <el-table-column prop="HLD" label="中繼點" width='100%' sortable :sort-method = "(a,b)=>{return a.HLD - b.HLD}"></el-table-column>
            <el-table-column prop="ERA" label="防禦率" width='100%' sortable :sort-method = "(a,b)=>{return a.ERA - b.ERA}"></el-table-column>
            <el-table-column prop="K" label="三振" width='80%' sortable :sort-method = "(a,b)=>{return a.K - b.K}"></el-table-column>
            <el-table-column prop="BB" label="保送" width='80%' sortable :sort-method = "(a,b)=>{return a.BB - b.BB}"></el-table-column>
            <el-table-column prop="HIT" label="被安打" width='100%' sortable :sort-method = "(a,b)=>{return a.HIT - b.HIT}"></el-table-column>
            <el-table-column prop="UR" label="失分" width='80%' sortable :sort-method = "(a,b)=>{return a.UR - b.UR}"></el-table-column>
            <el-table-column prop="ER" label="責失" width='80%' sortable :sort-method = "(a,b)=>{return a.ER - b.ER}"></el-table-column>
            <el-table-column prop="WHIP" label="WHIP" width='100%' sortable :sort-method = "(a,b)=>{return a.WHIP - b.WHIP}"></el-table-column>
          </el-table>
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
      optionsYear: [
        {
          'label':'',
          'value':''
        }
      ],
      yearChoose: '',
      pitcherRecord:[],
      tablePitcherRecord:[],
      playerChoose:''
    }
  },
  head() {
    return {
      title: '投手個人數據｜夢想家棒球隊 DREAMERS BASEBALL TEAM',
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
    const pitcherUrlId = 'https://sheets.googleapis.com/v4/spreadsheets/11Ym9FNnIqBucTsSOqDiA_RBXTUiJYvyAiN-0ABE3y-0'
    const apiKey = 'AIzaSyDVX99fm1rQctLiW-BCTyo407Q0w4Ku_78'
    const axios = (await import('axios')).default
    const { data:pitcherSheets} = await axios.get(pitcherUrlId+"?key="+apiKey)

    let optionsYear = []
    let pitcherRecord = []

    pitcherSheets.sheets.forEach((element,index) => {
      optionsYear.push({
        'label':element.properties.title,
        'value':element.properties.title,
      })
      pitcherRecord.push({
        'year':element.properties.title,
        'player': []
      })
    });

    for(let i=0;i<pitcherRecord.length;i++){
      let { data } = await axios.get(pitcherUrlId+"/values/'"+pitcherSheets.sheets[i].properties.title+"'!A2:Q?key="+apiKey)
      if(pitcherSheets.sheets[i].properties.title == pitcherRecord[i].year){
        for (let j = 0; j < data.values.length; j++) {
          pitcherRecord[i].player.push({
            'number':data.values[j][0],
            'name':data.values[j][1],
            'GP':data.values[j][2],
            'GS':data.values[j][3],
            'GIF':data.values[j][4],
            'IP':data.values[j][5],
            'W':data.values[j][6],
            'L':data.values[j][7],
            'SV':data.values[j][8],
            'HLD':data.values[j][9],
            'ERA':data.values[j][10],
            'K':data.values[j][11],
            'BB':data.values[j][12],
            'HIT':data.values[j][13],
            'UR':data.values[j][14],
            'ER':data.values[j][15],
            'WHIP':data.values[j][16],
          })
        }
      }
    }

    // ---資料格式化
    const data = [ /* 你提供的原始資料 JSON */ ];
    const playerMap = {};

    // 遍歷每一年
    for (const yearData of pitcherRecord) {
      const year = yearData.year;
      for (const p of yearData.player) {
        if (!playerMap[p.name]) {
          playerMap[p.name] = {
            player: p.name,
            record: []
          };
        }
        // 放入該年的H數值，沒有的話放空字串
        playerMap[p.name].record.push({
          year,
          number: p.number || '',
          name: p.name || '',
          GP: p.GP || '',
          GS: p.GS || '',
          GIF: p.GIF || '',
          IP: p.IP || '',
          W: p.W || '',
          L: p.L || '',
          SV: p.SV || '',
          HLD: p.HLD || '',
          ERA: p.ERA || '',
          K: p.K || '',
          BB: p.BB || '',
          HIT: p.HIT || '',
          UR: p.UR || '',
          ER: p.ER || '',
          WHIP: p.WHIP || '',
        });
      }
    }

    // 轉成陣列輸出
    const playerRecord = Object.values(playerMap);

    return {
      optionsYear:optionsYear,
      pitcherRecord:pitcherRecord,
      playerRecord:playerRecord
    }
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex%2 === 1) {
        return 'color-row';
      } 
      return '';
    },
    handleChangePlayer(name){
      const player = this.playerRecord.find(p => p.player === name);
      if (player) {
        this.tablePitcherRecord = player.record;
      }
    },
    getSummaries({ columns, data }) {
      const sums = [];
      let totalER = 0;
      let totalIP = 0;
      let totalHIT = 0;
      let totalBB = 0;

      columns.forEach((column, index) => {
        const prop = column.property;

        if (index === 0) {
          sums[index] = '總計';
          return;
        }

        // 不加總的欄位
        if (prop === 'number' || prop === 'name' || prop === 'year') {
          sums[index] = '';
          return;
        }

        // ERA 和 WHIP 暫時空白，後面補
        if (prop === 'ERA' || prop === 'WHIP') {
          sums[index] = '';
          return;
        }

        // 一般數值加總
        const values = data.map(item => Number(item[prop]));
        const validValues = values.filter(val => !isNaN(val));
        const total = validValues.reduce((sum, val) => sum + val, 0);

        if (prop === 'ER') totalER = total;
        if (prop === 'IP') totalIP = total;
        if (prop === 'HIT') totalHIT = total;
        if (prop === 'BB') totalBB = total;

        sums[index] = Number.isInteger(total) ? total : total.toFixed(2);
      });

      // ERA = (ER * 7) / IP
      const eraIndex = columns.findIndex(col => col.property === 'ERA');
      if (eraIndex !== -1) {
        const era = totalIP > 0 ? ((totalER * 7) / totalIP).toFixed(2) : '0.00';
        sums[eraIndex] = era;
      }

      // WHIP = (HIT + BB) / IP
      const whipIndex = columns.findIndex(col => col.property === 'WHIP');
      if (whipIndex !== -1) {
        const whip = totalIP > 0 ? ((totalHIT + totalBB) / totalIP).toFixed(2) : '0.00';
        sums[whipIndex] = whip;
      }

      return sums;
    }

  },
  watch: {

  },
  mounted() {
    if (this.playerRecord.length > 0) {
      this.playerChoose = this.playerRecord[0].player;
      this.tablePitcherRecord = this.playerRecord[0].record;
    }
    console.log(this.playerMap)
  }
}
</script>

<style>
.el-table .color-row {
  background: #C9D6E0;
}
.el-table {
  font-size: 16px;
}
</style>


