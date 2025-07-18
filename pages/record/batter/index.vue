<template>
  <div class="grid grid-cols-1 bg-[#F0F0F0]">
    <!-- 每頁面開頭需偏移51.7px Navbar -->
    <div class="mt-[51.7px]">
    </div>
    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-20 el-col-md-offset-2 el-col-lg-20 el-col-lg-offset-2 my-7">

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
        <div class ="el-col el-col-22 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-22 el-col-md-offset-1 el-col-lg-22 el-col-lg-offset-1">
          <el-table :data="tableBatterRecord" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'number', order: 'ascending'}">
            <el-table-column prop="number" label="背號" width='75%' fixed sortable :sort-method = "(a,b)=>{return a.number - b.number}"></el-table-column>
            <el-table-column prop="name" label="姓名"sortable :sort-method = "(a,b)=>{return a.name - b.name}"></el-table-column>
            <el-table-column prop="GP" label="出賽" sortable :sort-method = "(a,b)=>{return a.GP - b.GP}"></el-table-column>
            <el-table-column prop="PA" label="打席" sortable :sort-method = "(a,b)=>{return a.PA - b.PA}"></el-table-column>
            <el-table-column prop="AB" label="打數" sortable :sort-method = "(a,b)=>{return a.AB - b.AB}"></el-table-column>
            <el-table-column prop="HIT" label="安打" sortable :sort-method = "(a,b)=>{return a.HIT - b.HIT}"></el-table-column>
            <el-table-column prop="AVG" label="打擊率" width='100%' sortable :sort-method = "(a,b)=>{return a.AVG - b.AVG}"></el-table-column>
            <el-table-column prop="RBI" label="打點" sortable :sort-method = "(a,b)=>{return a.RBI - b.RBI}"></el-table-column>
            <el-table-column prop="R" label="得分" sortable :sort-method = "(a,b)=>{return a.R - b.R}"></el-table-column>
            <el-table-column prop="SB" label="盜壘" sortable :sort-method = "(a,b)=>{return a.SB - b.SB}"></el-table-column>
            <el-table-column prop="K" label="三振" sortable :sort-method = "(a,b)=>{return a.K - b.K}"></el-table-column>
            <el-table-column prop="BB" label="保送" sortable :sort-method = "(a,b)=>{return a.BB - b.BB}"></el-table-column>
            <el-table-column prop="SF" label="犧牲飛球" width='100%' sortable :sort-method = "(a,b)=>{return a.SF - b.SF}"></el-table-column>
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
      tableBatterRecord:[]
    }
  },
  head() {
    return {
      title: '打者成績｜夢想家棒球隊 DREAMERS BASEBALL TEAM',
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

    return {
      optionsYear:optionsYear,
      batterRecord:batterRecord
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
      this.batterRecord.forEach(element => {
        if(value == element.year){
          this.tableBatterRecord = element.player
        }
      });
    }
  },
  watch: {

  },
  mounted() {
    this.tableBatterRecord = this.batterRecord[this.batterRecord.length-1].player
    this.yearChoose = this.batterRecord[this.batterRecord.length-1].year
  }
}
</script>

<style>
.el-table .color-row {
  background: #C9D6E0;
}
</style>


