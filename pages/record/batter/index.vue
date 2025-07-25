<template>
  <div class="grid grid-cols-1 bg-[#F0F0F0]">
    <!-- 每頁面開頭需偏移51.7px Navbar -->
    <div class="mt-[51.7px]">
    </div>
    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-20 el-col-md-offset-2 el-col-lg-20 el-col-lg-offset-2 my-7 md:min-h-[75vh]">

      <el-card class="box-card rounded-[8px] my-5" :body-style="{ padding: '0px'}" shadow="never" >
        <div slot="header" class="text-2xl font-semibold text-[#003364]">
          <span>打者成績</span>
          <el-select v-model="yearChoose" placeholder="請選擇年份" class="float-right" @change="handleChangeYear"  style="width: 200px;">
            <el-option
              v-for="item in optionsYear"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class ="el-col el-col-22 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-22 el-col-md-offset-1 el-col-lg-22 el-col-lg-offset-1 mb-5">
          <el-table :data="tableBatterRecord" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'number', order: 'ascending'}" show-summary :summary-method="getSummaries">
            <el-table-column type="index" label="#" width="60%" fixed></el-table-column>
            <el-table-column prop="number" label="背號" width='80%' fixed sortable :sort-method = "(a,b)=>{return a.number - b.number}"></el-table-column>
            <el-table-column prop="name" label="姓名"sortable :sort-method = "(a,b)=>{return a.name - b.name}"></el-table-column>
            <el-table-column prop="GP" label="出賽" sortable width='80%' :sort-method = "(a,b)=>{return a.GP - b.GP}"></el-table-column>
            <el-table-column prop="PA" label="打席" sortable width='80%' :sort-method = "(a,b)=>{return a.PA - b.PA}"></el-table-column>
            <el-table-column prop="AB" label="打數" sortable width='80%' :sort-method = "(a,b)=>{return a.AB - b.AB}"></el-table-column>
            <el-table-column prop="HIT" label="安打" sortable width='80%' :sort-method = "(a,b)=>{return a.HIT - b.HIT}"></el-table-column>
            <el-table-column prop="AVG" label="打擊率" width='100%' sortable :sort-method = "(a,b)=>{return a.AVG - b.AVG}"></el-table-column>
            <el-table-column prop="RBI" label="打點" sortable width='80%' :sort-method = "(a,b)=>{return a.RBI - b.RBI}"></el-table-column>
            <el-table-column prop="R" label="得分" sortable width='80%' :sort-method = "(a,b)=>{return a.R - b.R}"></el-table-column>
            <el-table-column prop="SB" label="盜壘" sortable width='80%' :sort-method = "(a,b)=>{return a.SB - b.SB}"></el-table-column>
            <el-table-column prop="K" label="三振" sortable width='80%' :sort-method = "(a,b)=>{return a.K - b.K}"></el-table-column>
            <el-table-column prop="BB" label="保送" sortable width='80%' :sort-method = "(a,b)=>{return a.BB - b.BB}"></el-table-column>
            <el-table-column prop="SF" label="犧牲飛球" width='110%' sortable :sort-method = "(a,b)=>{return a.SF - b.SF}"></el-table-column>
            <el-table-column prop="OBP" label="上壘率" width='100%' sortable :sort-method = "(a,b)=>{return a.OBP - b.OBP}"></el-table-column>
            <el-table-column prop="HR" label="全壘打" width='100%' sortable :sort-method = "(a,b)=>{return a.HR - b.HR}"></el-table-column>
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
      batterRecord:[],
      tableBatterRecord:[],
      totalBatterRecord:[]
    }
  },
  head() {
    return {
      title: '打者數據統計｜夢想家棒球隊 DREAMERS BASEBALL TEAM',
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
    const batterUrlId = 'https://sheets.googleapis.com/v4/spreadsheets/18vDSTH43uJ9FRhKSGLVO-w4_nhO6dO_pl3Ivh3wAy-Q'
    const apiKey = 'AIzaSyDVX99fm1rQctLiW-BCTyo407Q0w4Ku_78'
    const axios = (await import('axios')).default
    const { data:batterSheets} = await axios.get(batterUrlId+"?key="+apiKey)

    let optionsYear = []
    let batterRecord = []

    batterSheets.sheets.forEach((element,index) => {
      optionsYear.push({
        'label':element.properties.title,
        'value':element.properties.title,
      })
      batterRecord.push({
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

    for(let i=0;i<batterRecord.length;i++){
      let { data } = await axios.get(batterUrlId+"/values/'"+batterSheets.sheets[i].properties.title+"'!A2:O?key="+apiKey)
      if(batterSheets.sheets[i].properties.title == batterRecord[i].year){
        for (let j = 0; j < data.values.length; j++) {
          batterRecord[i].player.push({
            'number': data.values[j][0],
            'name': data.values[j][1],
            'GP': data.values[j][2],
            'PA': data.values[j][3],
            'AB': data.values[j][4],
            'HIT': data.values[j][5],
            'AVG': data.values[j][6],
            'RBI': data.values[j][7],
            'R': data.values[j][8],
            'SB': data.values[j][9],
            'K': data.values[j][10],
            'BB': data.values[j][11],
            'SF': data.values[j][12],
            'OBP': data.values[j][13],
            'HR': data.values[j][14],
          })
        }
      }
    }

    // 依球員姓名累加總成績
    let playerMap = new Map();

    batterRecord.forEach(season => {
      season.player.forEach(p => {
        const key = p.name;
        if (!playerMap.has(key)) {
          playerMap.set(key, {
            ...p,
            GP: Number(p.GP),
            PA: Number(p.PA),
            AB: Number(p.AB),
            HIT: Number(p.HIT),
            RBI: Number(p.RBI),
            R: Number(p.R),
            SB: Number(p.SB),
            K: Number(p.K),
            BB: Number(p.BB),
            SF: Number(p.SF),
            HR: Number(p.HR)
          });
        } else {
          const acc = playerMap.get(key);
          acc.GP += Number(p.GP);
          acc.PA += Number(p.PA);
          acc.AB += Number(p.AB);
          acc.HIT += Number(p.HIT);
          acc.RBI += Number(p.RBI);
          acc.R += Number(p.R);
          acc.SB += Number(p.SB);
          acc.K += Number(p.K);
          acc.BB += Number(p.BB);
          acc.SF += Number(p.SF);
          acc.HR += Number(p.HR);
        }
      });
    });

    // 計算 AVG / OBP
    let totalBatterRecord = [];
    for (const [name, p] of playerMap.entries()) {
      const avg = p.AB > 0 ? (p.HIT / p.AB).toFixed(3) : '0.000';
      const obpDenom = p.AB + p.BB + p.SF;
      const obp = obpDenom > 0 ? ((p.HIT + p.BB) / obpDenom).toFixed(3) : '0.000';

      totalBatterRecord.push({
        number: p.number,
        name: name,
        GP: p.GP,
        PA: p.PA,
        AB: p.AB,
        HIT: p.HIT,
        AVG: avg,
        RBI: p.RBI,
        R: p.R,
        SB: p.SB,
        K: p.K,
        BB: p.BB,
        SF: p.SF,
        OBP: obp,
        HR: p.HR
      });
    }

    return {
      optionsYear:optionsYear,
      batterRecord:batterRecord,
      totalBatterRecord:totalBatterRecord
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
        this.tableBatterRecord = this.totalBatterRecord;
        return;
      }
      this.batterRecord.forEach(element => {
        if(value == element.year){
          this.tableBatterRecord = element.player
        }
      });
    },
    getSummaries({ columns, data }) {
      const sums = [];
      let totalHIT = 0;
      let totalAB = 0;
      let totalBB = 0;
      let totalSF = 0;

      columns.forEach((column, index) => {
        const prop = column.property;

        if (index === 0) {
          sums[index] = '總計';
          return;
        }

        if (prop === 'number' || prop === 'name') {
          sums[index] = '';
          return;
        }

        if (prop === 'AVG' || prop === 'OBP') {
          sums[index] = ''; // 暫時留空，後面再補
          return;
        }

        const values = data.map(item => Number(item[prop]));
        const validValues = values.filter(val => !isNaN(val));
        const total = validValues.reduce((sum, val) => sum + val, 0);

        if (prop === 'HIT') totalHIT = total;
        if (prop === 'AB') totalAB = total;
        if (prop === 'BB') totalBB = total;
        if (prop === 'SF') totalSF = total;

        sums[index] = Number.isInteger(total) ? total : total.toFixed(2);
      });

      // AVG = HIT / AB
      const avgIndex = columns.findIndex(col => col.property === 'AVG');
      if (avgIndex !== -1) {
        const avg = totalAB > 0 ? (totalHIT / totalAB).toFixed(3) : '0.000';
        sums[avgIndex] = avg;
      }

      // OBP = (HIT + BB) / (AB + BB + SF)
      const obpIndex = columns.findIndex(col => col.property === 'OBP');
      if (obpIndex !== -1) {
        const denominator = totalAB + totalBB + totalSF;
        const obp = denominator > 0 ? ((totalHIT + totalBB) / denominator).toFixed(3) : '0.000';
        sums[obpIndex] = obp;
      }

      return sums;
    }
  },
  watch: {

  },
  mounted() {
    const latestYear = this.batterRecord[this.batterRecord.length - 1].year;
    this.yearChoose = latestYear;
    this.tableBatterRecord = this.batterRecord.find(x => x.year === latestYear).player;
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


