<template>
  <div class="grid grid-cols-1 bg-[#F0F0F0]">
    <!-- 每頁面開頭需偏移51.7px Navbar -->
    <div class="mt-[51.7px]">
    </div>
    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-20 el-col-md-offset-2 el-col-lg-20 el-col-lg-offset-2 my-7 md:min-h-[75vh]">

      <el-card class="box-card rounded-[8px] my-5" :body-style="{ padding: '0px'}" shadow="never" >
        <div slot="header" class="text-2xl font-semibold text-[#003364]">
          <span>投手成績</span>
          <el-select v-model="yearChoose" placeholder="請選擇年份" class="float-right" @change="handleChangeYear" style="width: 200px;">
            <el-option
              v-for="item in optionsYear"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class ="el-col el-col-22 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-22 el-col-md-offset-1 el-col-lg-22 el-col-lg-offset-1 mb-5">
          <el-table :data="tablePitcherRecord" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'number', order: 'ascending'}" show-summary :summary-method="getSummaries">
            <el-table-column type="index" label="#" width="60%" fixed></el-table-column>
            <el-table-column prop="number" label="背號" width='80%' fixed sortable :sort-method = "(a,b)=>{return a.number - b.number}"></el-table-column>
            <el-table-column prop="name" label="姓名" sortable :sort-method = "(a,b)=>{return a.name - b.name}"></el-table-column>
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
      totalPitcherRecord:[],
    }
  },
  head() {
    return {
      title: '成投數據統計｜夢想家棒球隊 DREAMERS BASEBALL TEAM',
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

    optionsYear.sort((a, b) => {
      return parseInt(b.value) - parseInt(a.value);
    });

    optionsYear.unshift({
      label: '總計',
      value: 'total'
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

    // 以下為投手總計
    let playerMap = new Map();

    pitcherRecord.forEach(season => {
      season.player.forEach(p => {
        const key = p.name;
        const ip = parseFloat(p.IP) || 0;
        const er = parseFloat(p.ER) || 0;
        const hit = parseFloat(p.HIT) || 0;
        const bb = parseFloat(p.BB) || 0;

        if (!playerMap.has(key)) {
          playerMap.set(key, {
            ...p,
            GP: Number(p.GP),
            GS: Number(p.GS),
            GIF: Number(p.GIF),
            IP: ip,
            W: Number(p.W),
            L: Number(p.L),
            SV: Number(p.SV),
            HLD: Number(p.HLD),
            K: Number(p.K),
            BB: bb,
            HIT: hit,
            UR: Number(p.UR),
            ER: er,
          });
        } else {
          const acc = playerMap.get(key);
          acc.GP += Number(p.GP);
          acc.GS += Number(p.GS);
          acc.GIF += Number(p.GIF);
          acc.IP += ip;
          acc.W += Number(p.W);
          acc.L += Number(p.L);
          acc.SV += Number(p.SV);
          acc.HLD += Number(p.HLD);
          acc.K += Number(p.K);
          acc.BB += bb;
          acc.HIT += hit;
          acc.UR += Number(p.UR);
          acc.ER += er;
        }
      });
    });

    let totalPitcherRecord = [];

    for (const [name, p] of playerMap.entries()) {
      const era = p.IP > 0 ? ((p.ER * 7) / p.IP).toFixed(2) : '0.00';
      const whip = p.IP > 0 ? ((p.HIT + p.BB) / p.IP).toFixed(2) : '0.00';

      totalPitcherRecord.push({
        number: p.number,
        name: name,
        GP: p.GP,
        GS: p.GS,
        GIF: p.GIF,
        IP: p.IP.toFixed(1),
        W: p.W,
        L: p.L,
        SV: p.SV,
        HLD: p.HLD,
        ERA: era,
        K: p.K,
        BB: p.BB,
        HIT: p.HIT,
        UR: p.UR,
        ER: p.ER,
        WHIP: whip
      });
    }

    return {
      optionsYear:optionsYear,
      pitcherRecord:pitcherRecord,
      totalPitcherRecord:totalPitcherRecord
    }
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex%2 === 1) {
        return 'color-row';
      } 
      return '';
    },
    handleChangeYear(value){
      if (value === 'total') {
        this.tablePitcherRecord = this.totalPitcherRecord;
        return;
      }

      this.pitcherRecord.forEach(element => {
        if(value == element.year){
          this.tablePitcherRecord = element.player
        }
      });
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
        if (prop === 'number' || prop === 'name') {
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
    const latestYear = this.pitcherRecord[this.pitcherRecord.length - 1].year;
    this.yearChoose = latestYear;
    this.tablePitcherRecord = this.pitcherRecord.find(x => x.year === latestYear).player;
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


