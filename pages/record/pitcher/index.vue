<template>
  <div class="grid grid-cols-1 bg-[#F0F0F0]">
    <!-- 每頁面開頭需偏移51.7px Navbar -->
    <div class="mt-[51.7px]">
    </div>
    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-20 el-col-md-offset-2 el-col-lg-20 el-col-lg-offset-2 mt-5">

      <el-card class="box-card rounded-[8px] my-5" :body-style="{ padding: '0px'}" shadow="never" >
        <div slot="header" class="text-2xl font-semibold text-[#003364]">
          <span>投手成績</span>
          <el-select v-model="yearChoose" placeholder="請選擇年份" class="float-right" @change="handleChangeYear">
            <el-option
              v-for="item in optionsYear"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class ="el-col el-col-22 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-22 el-col-md-offset-1 el-col-lg-22 el-col-lg-offset-1">
          <el-table :data="tablePitcherRecord" style="width: 100%" :row-class-name="tableRowClassName" :default-sort = "{prop: 'number', order: 'ascending'}">
            <el-table-column prop="number" label="背號" width='75%' fixed sortable :sort-method = "(a,b)=>{return a.number - b.number}"></el-table-column>
            <el-table-column prop="name" label="姓名" width='120%' sortable :sort-method = "(a,b)=>{return a.name - b.name}"></el-table-column>
            <el-table-column prop="GP" label="出賽" width='100%' sortable :sort-method = "(a,b)=>{return a.GP - b.GP}"></el-table-column>
            <el-table-column prop="GS" label="先發數" width='100%' sortable :sort-method = "(a,b)=>{return a.GS - b.GS}"></el-table-column>
            <el-table-column prop="GIF" label="中繼數" width='100%' sortable :sort-method = "(a,b)=>{return a.GIF - b.GIF}"></el-table-column>
            <el-table-column prop="IP" label="局數" sortable :sort-method = "(a,b)=>{return a.IP - b.IP}"></el-table-column>
            <el-table-column prop="W" label="勝" width='60%' sortable :sort-method = "(a,b)=>{return a.W - b.W}"></el-table-column>
            <el-table-column prop="L" label="敗" width='60%' sortable :sort-method = "(a,b)=>{return a.L - b.L}"></el-table-column>
            <el-table-column prop="SV" label="救援成功" width='120%' sortable :sort-method = "(a,b)=>{return a.SV - b.SV}"></el-table-column>
            <el-table-column prop="HLD" label="中繼點" width='100%' sortable :sort-method = "(a,b)=>{return a.HLD - b.HLD}"></el-table-column>
            <el-table-column prop="ERA" label="防禦率" width='100%' sortable :sort-method = "(a,b)=>{return a.ERA - b.ERA}"></el-table-column>
            <el-table-column prop="K" label="三振" sortable :sort-method = "(a,b)=>{return a.K - b.K}"></el-table-column>
            <el-table-column prop="BB" label="保送" sortable :sort-method = "(a,b)=>{return a.BB - b.BB}"></el-table-column>
            <el-table-column prop="HIT" label="被安打" width='100%' sortable :sort-method = "(a,b)=>{return a.HIT - b.HIT}"></el-table-column>
            <el-table-column prop="UR" label="失分" sortable :sort-method = "(a,b)=>{return a.UR - b.UR}"></el-table-column>
            <el-table-column prop="ER" label="責失" sortable :sort-method = "(a,b)=>{return a.ER - b.ER}"></el-table-column>
            <el-table-column prop="WHIP" label="WHIP" width='120%' sortable :sort-method = "(a,b)=>{return a.WHIP - b.WHIP}"></el-table-column>
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
      tablePitcherRecord:[]
    }
  },
  head() {
    return {
      title: '國外團體｜大豐旅行社',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '想要出國卻不想要自由行嗎？那就來參加團體遊吧！專業導遊親自帶團，帶您走訪全世界，最好玩的團體旅遊盡在大豐'
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

    return {
      optionsYear:optionsYear,
      pitcherRecord:pitcherRecord
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
      this.pitcherRecord.forEach(element => {
        if(value == element.year){
          this.tablePitcherRecord = element.player
        }
      });
    }
  },
  watch: {

  },
  mounted() {
    this.tablePitcherRecord = this.pitcherRecord[this.pitcherRecord.length-1].player
    this.yearChoose = this.pitcherRecord[this.pitcherRecord.length-1].year
  }
}
</script>

<style>
.el-table .color-row {
  background: #C9D6E0;
}
</style>


