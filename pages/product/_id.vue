<template>
  <div class="grid grid-cols-1">
    
    <!-- 每頁面開頭需偏移51.7px Navbar -->
    <div class="mt-[51.7px]"></div>

    <div class="el-col el-col-24">
      <BannerProduct></BannerProduct>
    </div>

    <!-- 左右縮排3 -->
    <div class ="el-col el-col-24 el-col-xs-24 el-col-xs-offset-0 el-col-sm-24 el-col-sm-offset-0 el-col-lg-18 el-col-lg-offset-3">
      <!-- 左側標題 -->
      <div class="el-col el-col-24 el-col-xs-24 el-col-xs-offset-0 el-col-sm-24 el-col-sm-offset-0 el-col-lg-16 el-col-lg-offset-0">
        <el-row>
          <div class ="text-3xl font-semibold leading-10">{{data.basic.title}}</div>
        </el-row>
        <el-row style="padding-top:0px">
          <div class ="text-base font-semibold text-[#333]">商品編號 #{{data.basic.id}}</div>
        </el-row>
        <el-row>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>
                <font class ="text-base font-semibold">
                    <a :href = "data.countryUrl">{{data.basic.country}}</a>
                </font>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
                <font class ="text-base font-semibold">
                    <a :href = '"https://tafengtravel.github.io/tafengtravel/index/product/search.html?location="+ data.location'>{{data.basic.location}}</a>
                </font>
            </el-breadcrumb-item>
            <el-breadcrumb-item class="font-semibold">
                <font class ="text-base font-semibold">
                    <a :href = '"https://tafengtravel.github.io/tafengtravel/index/product/search.html?location="+ data.location'>{{data.basic.type}}</a>
                </font>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </el-row>
        
        <el-row>
          <div class ="text-2xl font-semibold">行程特色</div>
        </el-row>
        <el-row>
          <div class ="text-lg font-semibold line text-[#333]" v-html ="data.policy.features"></div>
        </el-row>
      </div>

      <!-- 右側出發資訊 -->
      <div class ="el-col el-col-24 el-col-xs-24 el-col-xs-offset-0 el-col-sm-24 el-col-sm-offset-0 el-col-lg-8 el-col-lg-offset-0 mt-[7px]" style="padding-left:12px;padding-right:12px;">
       <el-row>
          <span class= "el-col-3">
              <div class ="text-lg font-semibold line text-[#333]"><i class="el-icon-date"></i></div>
          </span>            
          <span class= "el-col-21">
              <div class ="text-lg font-semibold line text-[#333]">可預訂日期：{{data.basic.availableDay}}</div>
          </span> 
        </el-row>
        <el-row>
          <span class= "el-col-3">
              <div class ="text-lg font-semibold line text-[#333]"><i class="el-icon-time"></i></div>
          </span>           
          <span class= "el-col-21">
              <div class ="text-lg font-semibold line text-[#333]">出發時間：{{data.basic.depTime}}</div>
          </span>
        </el-row>
        <el-row>
          <span class= "el-col-3">
              <div class ="text-lg font-semibold line text-[#333]"><i class="el-icon-s-custom"></i></div>
          </span>            
          <span class= "el-col-21">
              <div class ="text-lg font-semibold line text-[#333]">最少預定數：{{data.basic.minAmount}}人</div>
          </span>   
        </el-row>
      </div>
    </div>

    <div class="el-col el-col-24 bg-white h-[49px] tab hidden shadow-md" id="tab">
      <!-- 左右縮排3 -->
      <div class ="el-col el-col-24 el-col-xs-24 el-col-xs-offset-0 el-col-sm-24 el-col-sm-offset-0 el-col-lg-18 el-col-lg-offset-3 h-[51px]" style="overflow:hidden;">
        <el-row>
          <el-tabs v-model="tab" @tab-click="tabChoose">
            <el-tab-pane label="方案選擇" name="priceChoose"></el-tab-pane>
            <el-tab-pane v-if="data.itinerary.length > 0" label="每日行程" name="itinerary"></el-tab-pane>
            <el-tab-pane v-if="data.introduction.detail != ''" label="行程說明" name="introduction"></el-tab-pane>
            <el-tab-pane v-if="data.policy.include.length > 0 || data.policy.exclude.length" label="費用包含" name="include"></el-tab-pane>
            <el-tab-pane v-if="data.policy.announce != ''" label="注意事項" name="announce"></el-tab-pane>
            <el-tab-pane v-if="data.policy.cancel != ''" label="取消規定" name="cancel"></el-tab-pane>
          </el-tabs>
        </el-row>
      </div>
    </div>

    <div class="bg-[#F0F0F0]">
      <!-- 左右縮排3 -->
      <div class ="el-col el-col-24 el-col-xs-24 el-col-xs-offset-0 el-col-sm-24 el-col-sm-offset-0 el-col-lg-18 el-col-lg-offset-3 min-h-[250px]">
        <div class="el-col el-col-24 el-col-xs-24 el-col-xs-offset-0 el-col-sm-24 el-col-sm-offset-0 el-col-lg-24 el-col-lg-offset-0" ref="priceChoose">
          <el-row>
            <div class ="text-2xl font-semibold">方案選擇</div>
          </el-row>

          <div v-for="(item, index) in data.price">
            <el-row>
              <el-card class="box-card" shadow="never">
                <div class="el-col el-col-24 el-col-xs-24 el-col-xs-offset-0 el-col-sm-20 el-col-sm-offset-0" id="box-card">
                  
                  <el-row>
                    <div class ="text-2xl font-semibold">{{item.title}}</div>
                    <div class ="text-base font-semibold"><i class="el-icon-time"></i><span>&emsp;行程總長：{{item.duration}} 小時</span></div>
                  </el-row>
                </div>
                <div class="el-col el-col-24 el-col-xs-24 el-col-xs-offset-0 el-col-sm-4 el-col-sm-offset-0" >
                  <el-button type="primary is-plain" style="width:100% ;height:50px;margin:9px 0px 10px 0px" @click="getPrice(index)">選擇</el-button>
                </div>  

                <!-- 日期 選項 金額 人數 -->
                <div class="el-col el-col-24"  v-if="isPriceChoose[index]">
                  <el-divider></el-divider>
                  <div class="el-col el-col-12 el-col-xs-24 el-col-sm-24 el-col-lg-12 el-col-xl-12">
                    <el-calendar v-model="valueDate" style="padding: 15px 3px 15px 3px;">
                      <template slot="dateCell" slot-scope="{date, data}">
                          <el-radio v-model="input.date" style="width: 100%;height: 100%;" 
                            :label="data.day" @change="dateChoose()" :disabled="dateDisable(data.day,index)"
                          >
                            <div v-if="data.day.substr(8,1) == '0'" class="text-lg font-semibold mt-[-10px] md:mt-[-12px]" >
                              {{data.day.substr(9,1)}}
                            </div>
                            <div v-if="data.day.substr(8,1) != '0'" class="text-lg font-semibold mt-[-10px] md:mt-[-12px]" >
                              {{data.day.substr(8,2)}}
                            </div>
                            <div class="pt-[6px] text-xs md:text-base font-semibold mt-[-3px]" 
                              v-for = "itemAvailable in item.option[input.indexOption].available" 
                              v-if="datePriceShow(itemAvailable,data)"
                            >
                              {{itemAvailable.adultPrice}}
                            </div>
                            <div class="pt-[6px] text-xs md:text-xs font-semibold mt-[3px] md:mt-[0px]" 
                              v-for = "itemAvailable in item.option[input.indexOption].available" 
                              v-if="datePriceShow(itemAvailable,data)"
                            >
                              可售: {{itemAvailable.amountAvailable}}
                            </div>
                          </el-radio>

                          <!-- item.option[0].available 上方都是先抓option[0] 寫死的 須注意要修改 -->
                      </template>
                    </el-calendar>
                  </div>

                  <div class="el-col el-col-12 el-col-xs-24 el-col-sm-24 el-col-lg-12 el-col-xl-12">
                    <el-row>
                      <div class ="text-lg text-[#333] font-semibold">選項</div>
                    </el-row>
                    <el-row style="padding-top:0px;padding-bottom:0px">
                      <el-radio v-model="input.indexOption" :label="indexOption" border v-for="(itemOption,indexOption) in item.option" style="border-radius: 5px; margin-right: 5px;margin-left: 0px;" @change="optionChoose">
                        <span class="font-semibold text-[14px] md:text-[15px]">
                          {{itemOption.optionTitle}}
                        </span>
                      </el-radio>
                    </el-row>

                    <div v-for="(itemSelector,indexSelector) in item.option[input.indexOption].selector">
                      <el-row>
                        <div class ="text-lg text-[#333] font-semibold">{{itemSelector.title}}</div>
                      </el-row>
                      <el-row style="padding-top:0px;padding-bottom:0px">
                        <el-select v-model="input.indexSelector[indexSelector]" placeholder="請選擇場次" style="font-size:16px;width:210px">
                          <el-option
                            v-for="item in itemSelector.value"
                            :key="item"
                            :label="item"
                            :value="item"
                            style="font-size:16px">
                          </el-option>
                        </el-select>
                      </el-row>
                    </div>

                    <el-row>
                      <div class ="text-lg text-[#333] font-semibold">數量</div>
                    </el-row>
                    <el-row style="padding-top:5px;padding-bottom:5px">
                      <div class="el-col el-col-15 text-lg text-[#333]  font-semibold">
                        <div class="grid grid-rows-2">
                          <div>
                            成人 
                          </div>
                          <div class="text-base text-[#333]" v-if="item.option[input.indexOption].available[input.indexDateChoose]">
                            ${{item.option[input.indexOption].available[input.indexDateChoose].adultPrice}} 
                            <span v-if="item.option[input.indexOption].adultOther != ''">
                              *{{item.option[input.indexOption].adultOther}}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="el-col el-col-9 text-right pt-[6px]">
                        <el-input-number v-model="input.amountAdult" @change="priceCount;amountLimit('adult')" :min="1" :max="amountAdultLimit"></el-input-number>
                      </div>
                    </el-row>

                    <el-row style="padding-top:5px;padding-bottom:5px" v-if="item.option[input.indexOption].available[input.indexDateChoose] && item.option[input.indexOption].available[input.indexDateChoose].seniorPrice != 0">
                      <div class="el-col el-col-15 text-lg text-[#333]  font-semibold">
                        <div class="grid grid-rows-2">
                          <div>
                            敬老 
                          </div>
                          <div class="text-base text-[#333]">
                            ${{item.option[input.indexOption].available[input.indexDateChoose].seniorPrice}} 
                              <span v-if="item.option[input.indexOption].seniorOther != ''">
                                *{{item.option[input.indexOption].seniorOther}}
                              </span>
                          </div>
                        </div>
                      </div>
                      <div class="el-col el-col-9 text-right pt-[6px]">
                        <el-input-number v-model="input.amountSenior" @change="priceCount;amountLimit('senior')" :min="0" :max="amountSeniorLimit"></el-input-number>
                      </div>
                    </el-row>
                    
                    <el-row style="padding-top:5px;padding-bottom:5px" v-if="item.option[input.indexOption].available[input.indexDateChoose] && item.option[input.indexOption].available[input.indexDateChoose].childPrice != 0">
                      <div class="el-col el-col-15 text-lg text-[#333]  font-semibold">
                        <div class="grid grid-rows-2">
                          <div>
                            兒童 
                          </div>
                          <div class="text-base text-[#333]">
                            ${{item.option[input.indexOption].available[input.indexDateChoose].childPrice}} 
                              <span v-if="item.option[input.indexOption].childOther != ''">
                                *{{item.option[input.indexOption].childOther}}
                              </span>
                          </div>
                        </div>
                      </div>
                      <div class="el-col el-col-9 text-right pt-[6px]">
                        <el-input-number v-model="input.amountChild" @change="priceCount;amountLimit('child')" :min="0" :max="amountChildLimit"></el-input-number>
                      </div>
                    </el-row>

                    <el-row style="padding-top:5px;padding-bottom:5px" v-if="item.option[input.indexOption].available[input.indexDateChoose] && item.option[input.indexOption].available[input.indexDateChoose].infantPrice != 0">
                      <div class="el-col el-col-15 text-lg text-[#333]  font-semibold">
                        <div class="grid grid-rows-2">
                          <div>
                            嬰兒 
                          </div>
                          <div class="text-base text-[#333]">
                            ${{item.option[input.indexOption].available[input.indexDateChoose].infantPrice}} 
                              <span v-if="item.option[input.indexOption].infantOther != ''">
                                *{{item.option[input.indexOption].infantOther}}
                              </span>
                          </div>
                        </div>
                      </div>
                      <div class="el-col el-col-9 text-right pt-[6px]">
                        <el-input-number v-model="input.amountInfant" @change="priceCount;amountLimit('infant')" :min="0" :max="amountInfantLimit"></el-input-number>
                      </div>
                    </el-row>

                    <el-row>
                      <el-divider></el-divider>
                    </el-row>
                  </div>
                </div>

              </el-card> 
            </el-row>
          </div>
          <el-row class="mb-[-10px]"></el-row>
        </div>

       

      </div>
    </div>
    <!-- 左右縮排3 -->
    <div class ="el-col el-col-24 el-col-xs-24 el-col-xs-offset-0 el-col-sm-24 el-col-sm-offset-0 el-col-lg-18 el-col-lg-offset-3" ref="itinerary">

      <!-- 左側行程 -->
      <div class="el-col el-col-24 el-col-xs-24 el-col-xs-offset-0 el-col-sm-24 el-col-sm-offset-0 el-col-lg-16 el-col-lg-offset-0">

        <!-- 每日行程 -->
        <div v-if="data.itinerary.length > 0" ref="itinerary">
          <el-row>
            <div class ="text-2xl font-semibold">每日行程</div>
          </el-row>
          <div v-for="(item, index) in data.itinerary">
            <el-row>
              <div class="text-3xl font-semibold text-[#F60]">Day{{index+1}}</div>
            </el-row>
            <el-row>
              <div class ="text-2xl font-semibold leading-9" v-html ="item.itinerary"></div>
            </el-row>
            <el-row>
              <div class ="text-lg font-semibold text-[#333]" v-html ="item.detail"></div>
            </el-row>
            <el-card class="box-card m-[10px]">
              <el-row>
                <div class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-lg-8 text-lg font-semibold">
                  <i class="el-icon-knife-fork"></i>&ensp;早餐：{{item.breakfast}}
                </div>
                <div class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-lg-8 text-lg font-semibold">
                  <i class="el-icon-knife-fork"></i>&ensp;午餐：{{item.lunch}}
                </div>
                <div class="el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-lg-8 text-lg font-semibold">
                  <i class="el-icon-knife-fork"></i>&ensp;晚餐：{{item.dinner}}
                </div>
                <div class="el-col el-col-24 text-lg font-semibold">
                  <i class="el-icon-s-home"></i>&ensp;飯店：{{item.hotel}}
                </div>
              </el-row>
            </el-card>
            <el-divider></el-divider>
          </div>
        </div>

        <!-- 行程說明 -->
        <div v-if="data.introduction.detail != ''">
          <el-row>
            <div class ="text-2xl font-semibold" ref="introduction">行程說明</div>
          </el-row>
          <el-row>
            <div class ="text-lg font-semibold text-[#333]" v-html ="data.introduction.detail"></div>
          </el-row>
          <el-divider></el-divider>
        </div>

        <!-- 費用包含 -->
        <div v-if="data.policy.include.length > 0 || data.policy.exclude.length" ref="include">
          <el-row>
            <div class ="text-2xl font-semibold">費用包含</div>
          </el-row>
          <el-row>
            <div class="el-col el-col-12 el-col-xs-24 el-col-sm-24 el-col-lg-12 pb-[20px] xl:pb-[0px]">
              <div class="el-col el-col-24 text-base font-semibold mt-[5px]" v-for="(item,index) in data.policy.include">
                <i class="el-icon-check font-semibold text-[#f60]"></i>&ensp;
                <span class="text-base font-semibold text-[#333]">
                  {{item}}
                </span>
              </div>
            </div>
            <div class="el-col el-col-12 el-col-xs-24 el-col-sm-24 el-col-lg-12">
              <div class="el-col el-col-24 text-base font-semibold mt-[5px]" v-for="(item,index) in data.policy.exclude">
                <i class="el-icon-close font-semibold text-[#f60]"></i>&ensp;
                <span class="text-base font-semibold text-[#333]">
                  {{item}}
                </span>
              </div>
            </div>
          </el-row>
          <el-divider></el-divider>
        </div>

        <!-- 注意事項 -->
        <div v-if="data.policy.announce != ''" ref="announce">
          <el-row>
            <div class ="text-2xl font-semibold">注意事項</div>
          </el-row>
          <el-row>
            <div class ="text-base font-semibold text-[#333] line tracking-wide leading-7" v-html ="data.policy.announce"></div>
          </el-row>
          <el-divider></el-divider>
        </div>
        
        <!-- 取消規定 -->
        <div v-if="data.policy.cancel != ''" ref="cancel">
          <el-row>
            <div class ="text-2xl font-semibold">取消規定</div>
          </el-row>
          <el-row>
            <div class ="text-base font-semibold text-[#333] line tracking-wide leading-7" v-html ="data.policy.cancel"></div>
          </el-row>
          <el-divider></el-divider>
        </div>

      </div>

      <!-- 電腦版最低售價 -->
      <div class ="el-col el-col-24 el-col-xs-24 el-col-xs-offset-0 el-col-sm-24 el-col-sm-offset-0 el-col-lg-8 el-col-lg-offset-0 mt-[20px]" style="padding-left:12px;padding-right:12px;">
        <div class = "position hidden xl:block" id="lowPriceCard" style="position: sticky;top: 120px;">
          <el-row>
            <el-card class="box-card">
              <div class="el-col el-col-24">
                <div class="el-col el-col-12 pt-[8px]">
                  <span class ="text-xl font-semibold">最低售價</span>
                </div>
                <div class="el-col el-col-12 text-right">
                  <span class ="text-3xl font-semibold text-[#F60]">${{data.basic.lowPrice}}</span>
                  <span class="text-xl font-semibold">起</span>
                </div>
              </div>
              <br><br>
              <span class ="text-base font-semibold text-[#626262]">訂購完成後須等待空位確認，專員會於1個工作天內回覆您預定結果，並將付款連結寄至您的信箱，訂單將於付款後正式成立。</span><br>
              <el-button type="primary " style="width:100% ;margin-top: 6px;" @click="tabChoose()">選擇方案</el-button><br>
            </el-card>
          </el-row>
        </div>
      </div>

      <!-- 手機板最低售價 -->
      <div class='block xl:hidden fixed bg-white bottom-0 shadow-inner h-[70px] z-10 el-col el-col-24'>
        <div class="el-col el-col-xs-18 el-col-xs-offset-0 el-col-sm-18 el-col-sm-offset-0 bottom-0 " style="padding-left:8px;margin: 25px 0px 15px 0px;">
          <span class ="text-xl font-semibold">最低售價</span>
          <span class ="text-3xl font-semibold text-[#F60]">${{data.basic.lowPrice}}</span>
          <span class="text-xl font-semibold">起</span>
        </div>
        <div class="el-col el-col-xs-6 el-col-xs-offset-0 el-col-sm-6 el-col-sm-offset-0" >
          <el-button type="primary" style="width: 100%;margin: 16px 0px 16px -10px" @click="tabChoose()">選擇方案</el-button>
        </div>  
      </div>

    </div>

  </div>
  
  
  
</template>

<script>
import BannerProduct from '../../components/BannerProduct.vue';
import * as moment from "moment/moment";

export default {
  components: {
    BannerProduct,
},
  data() {
    return {
      title: '',
      description:'',
      amountAdultLimit:99999,
      amountChildLimit:99999,
      amountSeniorLimit:99999,
      amountInfantLimit:99999,
      input:{
        date:'',
        indexPrice:0,
        indexOption:0,
        indexDateChoose:0,
        indexSelector:[],
        amountAdult:1,
        amountChild:0,
        amountSenior:0,
        amountInfant:0,
      },
      valueDate:'',
      isPriceChoose:[],
      tab:'priceChoose',
      data:{},
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        }
      ]
    }
  },
  async asyncData({params}){
    console.log(params)
    let data = {
      "basic": {
        "country": "菲律賓",
        "location": "宿霧",
        "type": "自由行",
        "breakfast": "10001",
        "title": "宿霧｜墨寶沙丁魚+海龜｜歐斯陸鯨鯊｜資生堂島跳島｜五日自由行",
        "lowPrice": "25600",
        "minAmount": "2",
        "availableDay": "一~日",
        "depTime": "依航班選擇",
        "pickup": "桃園/小港機場",
        "id":params.id
      },
      "introduction": {
        // "detail": "<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; background-color: #ffff99;\">本日行程包含：專車接送~宿霧國際機場 &rarr; 接送至宿霧市區飯店</span></span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\">&nbsp;</p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\">市區建議行程</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【聖派特羅堡】</span>&nbsp;位於港口旁邊，與馬尼拉的聖地牙哥城堡並稱為菲律賓最古老的城堡，是西班牙最初抵達菲律賓時建造的，二戰時，該城堡曾被用來抵禦日軍；美軍統治時代用作軍官的營房；現在則被改建為學校的課室。碼頭旁的San Pedro炮台就是西班牙進入宿霧的首個駐點，炮台後來改建為紀念公園。有濃郁的西班牙色彩外，更散發出一股亞洲獨特的熱帶氣候與風土人文交織而成的活潑氣息。</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【麥哲倫十字架】</span>&nbsp;由葡萄牙航海家麥哲倫所豎立，用以標誌菲律賓人的受洗地點，且可治百病，此十字架更為主教代表西方文化浸染菲律賓國家的開始，別具歷史意義。</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【聖嬰大教堂】</span>&nbsp;古老的聖像幼年耶穌基督像等，這些都像徵著菲律賓人的虔誠與信仰，借由歷史的名勝古蹟，帶您進入菲律賓的成長過程與民俗文化。&nbsp;</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【Tops Lookout】</span>&nbsp;宿霧市的制高點，您可於日落時分時於制高點俯瞰宿霧市和附近如畫般的風景</span></span></p>"
        "detail": ""
      },
      "itinerary": [
        {
          breakfast: "XX",
          detail: "<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; background-color: #ffff99;\">本日行程包含：專車接送~宿霧國際機場 &rarr; 接送至宿霧市區飯店</span></span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\">&nbsp;</p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\">市區建議行程</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【聖派特羅堡】</span>&nbsp;位於港口旁邊，與馬尼拉的聖地牙哥城堡並稱為菲律賓最古老的城堡，是西班牙最初抵達菲律賓時建造的，二戰時，該城堡曾被用來抵禦日軍；美軍統治時代用作軍官的營房；現在則被改建為學校的課室。碼頭旁的San Pedro炮台就是西班牙進入宿霧的首個駐點，炮台後來改建為紀念公園。有濃郁的西班牙色彩外，更散發出一股亞洲獨特的熱帶氣候與風土人文交織而成的活潑氣息。</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【麥哲倫十字架】</span>&nbsp;由葡萄牙航海家麥哲倫所豎立，用以標誌菲律賓人的受洗地點，且可治百病，此十字架更為主教代表西方文化浸染菲律賓國家的開始，別具歷史意義。</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【聖嬰大教堂】</span>&nbsp;古老的聖像幼年耶穌基督像等，這些都像徵著菲律賓人的虔誠與信仰，借由歷史的名勝古蹟，帶您進入菲律賓的成長過程與民俗文化。&nbsp;</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【Tops Lookout】</span>&nbsp;宿霧市的制高點，您可於日落時分時於制高點俯瞰宿霧市和附近如畫般的風景</span></span></p>",
          dinner: "於宿霧市區自行享用",
          hotel: "白酒店 或 同級",
          itinerary: "台灣(桃園機場/高雄機場) → CEB麥克坦-宿霧國際機場 → 專車機場接送至宿霧市區飯店 → 全日市區自由活動【建議行程：市區觀光(聖派特羅堡、麥哲倫十字架、聖嬰大教堂)】→ 宿霧超值/經濟/豪華等級自由配(宿)",
          lunch: "XX",
        },
        {
          breakfast: "依據飯店是否提供",
          detail: "<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; background-color: #ffff99;\">本日行程包含：專車接送~宿霧國際機場 &rarr; 接送至宿霧市區飯店</span></span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\">&nbsp;</p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\">市區建議行程</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【聖派特羅堡】</span>&nbsp;位於港口旁邊，與馬尼拉的聖地牙哥城堡並稱為菲律賓最古老的城堡，是西班牙最初抵達菲律賓時建造的，二戰時，該城堡曾被用來抵禦日軍；美軍統治時代用作軍官的營房；現在則被改建為學校的課室。碼頭旁的San Pedro炮台就是西班牙進入宿霧的首個駐點，炮台後來改建為紀念公園。有濃郁的西班牙色彩外，更散發出一股亞洲獨特的熱帶氣候與風土人文交織而成的活潑氣息。</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【麥哲倫十字架】</span>&nbsp;由葡萄牙航海家麥哲倫所豎立，用以標誌菲律賓人的受洗地點，且可治百病，此十字架更為主教代表西方文化浸染菲律賓國家的開始，別具歷史意義。</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【聖嬰大教堂】</span>&nbsp;古老的聖像幼年耶穌基督像等，這些都像徵著菲律賓人的虔誠與信仰，借由歷史的名勝古蹟，帶您進入菲律賓的成長過程與民俗文化。&nbsp;</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【Tops Lookout】</span>&nbsp;宿霧市的制高點，您可於日落時分時於制高點俯瞰宿霧市和附近如畫般的風景</span></span></p>",
          dinner: "於宿霧市區自行享用",
          hotel: "白酒店 或 同級",
          itinerary: "台灣(桃園機場/高雄機場) → CEB麥克坦-宿霧國際機場 → 專車機場接送至宿霧市區飯店 → 全日市區自由活動【建議行程：市區觀光(聖派特羅堡、麥哲倫十字架、聖嬰大教堂)】→ 宿霧超值/經濟/豪華等級自由配(宿)",
          lunch: "於宿霧市區自行享用",
        },
        {
          breakfast: "依據飯店是否提供",
          detail: "<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; background-color: #ffff99;\">本日行程包含：專車接送~宿霧國際機場 &rarr; 接送至宿霧市區飯店</span></span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\">&nbsp;</p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\">市區建議行程</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【聖派特羅堡】</span>&nbsp;位於港口旁邊，與馬尼拉的聖地牙哥城堡並稱為菲律賓最古老的城堡，是西班牙最初抵達菲律賓時建造的，二戰時，該城堡曾被用來抵禦日軍；美軍統治時代用作軍官的營房；現在則被改建為學校的課室。碼頭旁的San Pedro炮台就是西班牙進入宿霧的首個駐點，炮台後來改建為紀念公園。有濃郁的西班牙色彩外，更散發出一股亞洲獨特的熱帶氣候與風土人文交織而成的活潑氣息。</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【麥哲倫十字架】</span>&nbsp;由葡萄牙航海家麥哲倫所豎立，用以標誌菲律賓人的受洗地點，且可治百病，此十字架更為主教代表西方文化浸染菲律賓國家的開始，別具歷史意義。</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【聖嬰大教堂】</span>&nbsp;古老的聖像幼年耶穌基督像等，這些都像徵著菲律賓人的虔誠與信仰，借由歷史的名勝古蹟，帶您進入菲律賓的成長過程與民俗文化。&nbsp;</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【Tops Lookout】</span>&nbsp;宿霧市的制高點，您可於日落時分時於制高點俯瞰宿霧市和附近如畫般的風景</span></span></p>",
          dinner: "於宿霧市區自行享用",
          hotel: "白酒店 或 同級",
          itinerary: "台灣(桃園機場/高雄機場) → CEB麥克坦-宿霧國際機場 → 專車機場接送至宿霧市區飯店 → 全日市區自由活動【建議行程：市區觀光(聖派特羅堡、麥哲倫十字架、聖嬰大教堂)】→ 宿霧超值/經濟/豪華等級自由配(宿)",
          lunch: "於宿霧市區自行享用",
        },
        {
          breakfast: "依據飯店是否提供",
          detail: "<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; background-color: #ffff99;\">本日行程包含：專車接送~宿霧國際機場 &rarr; 接送至宿霧市區飯店</span></span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\">&nbsp;</p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\">市區建議行程</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【聖派特羅堡】</span>&nbsp;位於港口旁邊，與馬尼拉的聖地牙哥城堡並稱為菲律賓最古老的城堡，是西班牙最初抵達菲律賓時建造的，二戰時，該城堡曾被用來抵禦日軍；美軍統治時代用作軍官的營房；現在則被改建為學校的課室。碼頭旁的San Pedro炮台就是西班牙進入宿霧的首個駐點，炮台後來改建為紀念公園。有濃郁的西班牙色彩外，更散發出一股亞洲獨特的熱帶氣候與風土人文交織而成的活潑氣息。</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【麥哲倫十字架】</span>&nbsp;由葡萄牙航海家麥哲倫所豎立，用以標誌菲律賓人的受洗地點，且可治百病，此十字架更為主教代表西方文化浸染菲律賓國家的開始，別具歷史意義。</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【聖嬰大教堂】</span>&nbsp;古老的聖像幼年耶穌基督像等，這些都像徵著菲律賓人的虔誠與信仰，借由歷史的名勝古蹟，帶您進入菲律賓的成長過程與民俗文化。&nbsp;</span></span></p>\n<p style=\"margin: 0px; padding: 0px; background-color: #ffffff;\"><span style=\"font-size: 16px;\"><span style=\"font-family: 微軟正黑體;\"><span style=\"font-family: 'Microsoft JhengHei'; color: #0000ff;\">【Tops Lookout】</span>&nbsp;宿霧市的制高點，您可於日落時分時於制高點俯瞰宿霧市和附近如畫般的風景</span></span></p>",
          dinner: "XX",
          hotel: "溫暖的家",
          itinerary: "台灣(桃園機場/高雄機場) → CEB麥克坦-宿霧國際機場 → 專車機場接送至宿霧市區飯店 → 全日市區自由活動【建議行程：市區觀光(聖派特羅堡、麥哲倫十字架、聖嬰大教堂)】→ 宿霧超值/經濟/豪華等級自由配(宿)",
          lunch: "於宿霧市區自行享用",
        }
      ],
      "policy": {
        "features": "一起去宿霧自由行吧！美麗迷人的海灘\n一同與海龜、沙丁魚共游吧！\n一同與鯨鯊共游！",
        "include": ["來回機票","4晚住宿","行程"],
        "exclude": ["午餐","晚餐","小費"],
        "announce": "＊ 因安全考量，請確定個人身體健康良好，如有心臟病等突發性疾病，或重大疾病、心血管疾病、氣喘病患者、癲癇及孕婦，請勿報名。",
        "cancel": "１．此訂購單需客服人員確認回覆後始可生效，並視同雙方同意簽屬【國外個別旅遊定型化契約書】(100年01月17日觀光字第0990044124號函公告修正)，敬請詳閱該契約書內容。本套裝行程除取消費用特別加註外，均適用【國外個別旅遊定型化契約書】之相關規定。\n２．旅客取消行程《旅客於訂購行程完成付款後通知旅行社取消者》，將依據【國外個別旅遊定型化契約書】第十六條：出發前旅客任意解除契約，須收取費用如下：《通知日以上班日為基準》\n一、通知於出發日前第二十一日至第三十日以內到達者，賠償旅遊費用百分之十。\n二、通知於出發日前第十一日至第二十日以內到達者，賠償旅遊費用百分之二十。\n三、通知於出發日前第四日至第十日以內到達者，賠償旅遊費用百分之三十。\n四、通知於出發日前一日至第三日以內到達者，賠償旅遊費用百分之七十。\n五、通知於出發當日以後到達者，賠償旅遊費用百分之一百。\n如能證明其所受損害超過第一項各款標準者，得就其實際損害請求賠償。\n"
      },
      "price": [
        {
          "title": "宿霧本島四日",
          "duration": "",
          "option": [
            {
              "optionTitle": "桃園出發",
              "adultDefaultPrice": 25600,
              "adultOther": "12-65歲",
              "childDefaultPrice": 25600,
              "childOther": "3-12歲",
              "seniorOther": "65歲以上",
              "infantOther": "2歲以下",
              "adultOther": "12-65歲",
              "available": [
                
              ],
              selector:[
                {
                  title: "出發時間",
                  value: ['09:00', '10:00', '11:00']
                },
                {
                  title: "回程時間",
                  value: ['15:00', '16:00', '17:00']
                },
              ]
            },
            {
              "optionTitle": "高雄出發",
              "adultDefaultPrice": 24600,
              "adultOther": "",
              "childDefaultPrice": 24600,
              "childOther": "",
              "seniorOther": "",
              "infantOther": "",
              "available": [
                
                {
                  "date": "2022-12-30",
                  "adultPrice": 24600,
                  "childPrice": 21600,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                },
                {
                  "date": "2022-12-31",
                  "adultPrice": 24600,
                  "childPrice": 0,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                },
                {
                  "date": "2022-12-24",
                  "adultPrice": 24600,
                  "childPrice": 21600,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                },
                {
                  "date": "2022-12-25",
                  "adultPrice": 24600,
                  "childPrice": 21600,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                },
                {
                  "date": "2022-12-26",
                  "adultPrice": 24600,
                  "childPrice": 21600,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                },
                {
                  "date": "2022-12-27",
                  "adultPrice": 24600,
                  "childPrice": 21600,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                },
                {
                  "date": "2022-12-28",
                  "adultPrice": 24600,
                  "childPrice": 21600,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                },
                {
                  "date": "2022-12-29",
                  "adultPrice": 24600,
                  "childPrice": 21600,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                }
              ],
              selector:[]
            }
          ]
        },
        {
          "title": "宿霧本島五日",
          "duration": "",
          "option": [
            {
              "optionTitle": "桃園出發",
              "adultDefaultPrice": 27600,
              "adultOther": "",
              "childDefaultPrice": 27600,
              "childOther": "",
              "seniorOther": "",
              "infantOther": "",
              "available": [
                
                {
                  "date": "2022-12-29",
                  "adultPrice": 27600,
                  "childPrice": 24600,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                },
                {
                  "date": "2022-12-30",
                  "adultPrice": 27600,
                  "childPrice": 24600,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                },
                {
                  "date": "2022-12-31",
                  "adultPrice": 27600,
                  "childPrice": 24600,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                },
                {
                  "date": "2022-12-24",
                  "adultPrice": 27600,
                  "childPrice": 24600,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                },
                {
                  "date": "2022-12-25",
                  "adultPrice": 27600,
                  "childPrice": 24600,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                },
                {
                  "date": "2022-12-26",
                  "adultPrice": 27600,
                  "childPrice": 24600,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                },
                {
                  "date": "2022-12-27",
                  "adultPrice": 27600,
                  "childPrice": 24600,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                },
                {
                  "date": "2022-12-28",
                  "adultPrice": 27600,
                  "childPrice": 24600,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                },
              ],
              selector:[]
            },
            {
              "optionTitle": "高雄出發",
              "adultDefaultPrice": 26600,
              "adultOther": "",
              "childDefaultPrice": 26600,
              "childOther": "",
              "seniorOther": "",
              "infantOther": "",
              "available": [
                {
                  "date": "2022-12-30",
                  "adultPrice": 26600,
                  "childPrice": 23600,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                },
                {
                  "date": "2022-12-31",
                  "adultPrice": 26600,
                  "childPrice": 23600,
                  "seniorPrice": 21600,
                  "infantPrice": 3000,
                  "amountTotal": 8,
                  "amountSold": 0,
                  "amountAvailable": 30
                }
              ],
              selector:[]
            }
          ]
        }
      ]
    }
    return {data:data,title:data.basic.title+'｜大豐旅行社',description:data.policy.features}
  },
  async validate({params}){
    if(params.id){
      return true
    }else{
      return false
    }
  },
  methods: {
    handleScroll () {
      let y = window.pageYOffset || document.documentElement.scrollTop;
      let clientWidth = document.documentElement.clientWidth

      try {
        this.tab = 'priceChoose'
        if(this.data.itinerary.length > 0 && y > this.$refs.itinerary.offsetTop -200){
          this.tab = 'itinerary'
        }
        if(this.data.introduction.detail !='' && y > this.$refs.introduction.offsetTop -200){
          this.tab = 'introduction'
        }
        if(this.data.policy.include.length > 0 && y > this.$refs.include.offsetTop -200){
          this.tab = 'include'
        }
        if(this.data.policy.announce !='' && y > this.$refs.announce.offsetTop -200){
          this.tab = 'announce'
        }
        if(this.data.policy.cancel !='' && y > this.$refs.cancel.offsetTop -200){
          this.tab = 'cancel'
        }
      } catch (error) {
        console.log(error)
      }

      // 右側選擇方案
      if(y > this.$refs.priceChoose.offsetTop+this.$refs.priceChoose.offsetHeight -100){
        document.getElementById("lowPriceCard").style.position = "fixed"
        document.getElementById("lowPriceCard").style.width = "23.75%"
      }else{
        document.getElementById("lowPriceCard").style.position = "sticky"
        document.getElementById("lowPriceCard").style.width = "100%"
      }

      // 右側選擇方案
      if(clientWidth>1199){
        if(document.documentElement.scrollHeight-document.documentElement.scrollTop-document.documentElement.clientHeight < 50){
          document.getElementById("lowPriceCard").style.display = "none"
        } else {
          document.getElementById("lowPriceCard").style.display = "block"
        }
      }else{
        document.getElementById("lowPriceCard").style.display = "none"
      }
      
      //置頂tab
      if(y > this.$refs.priceChoose.offsetTop-300){
        document.getElementById("tab").style.display = "block"
      } else if (y < this.$refs.priceChoose.offsetTop) {
        document.getElementById("tab").style.display = "none"
      }
    },
    tabChoose(tab,event){
      let tabY

      if(tab == undefined){
        tabY = this.$refs.priceChoose.offsetTop-100

        // let td = document.getElementsByClassName("current")
        // console.log(td)
        // td.classList.add('disable')
        // 做到這裡 抓出current比對 outtertext空白 則新增disable
      }
      try {
        switch(tab.name){
          case 'priceChoose':
            tabY = this.$refs.priceChoose.offsetTop-100
          ;break
          case 'itinerary':
            tabY = this.$refs.itinerary.offsetTop-100
          ;break
          case 'introduction':
            tabY = this.$refs.introduction.offsetTop-100    
          ;break
          case 'include':
            tabY = this.$refs.include.offsetTop-100
          ;break
          case 'announce':
            tabY = this.$refs.announce.offsetTop-100
          ;break
          case 'cancel':
            tabY = this.$refs.cancel.offsetTop-100
          ;break
        }
      } catch (error) {
        
      }
      
      window.scrollTo({
        top: tabY,
        behavior: "smooth"
      });
    },
    getPrice(index){
      this.input.date = ''
      this.input.indexPrice = index

      this.isPriceChoose = this.isPriceChoose.map((data,indexIsPriceChoose) => {
        if(index == indexIsPriceChoose){
          return true
        }else{
          return false
        }
      });

      this.data.price[0].option[0].available = [
        {
          "date": "2022-11-30",
          "adultPrice": 25600,
          "childPrice": 22600,
          "seniorPrice": 21600,
          "infantPrice": 3000,
          "amountTotal": 8,
          "amountSold": 0,
          "amountAvailable": 30
        },
        {
          "date": "2022-12-31",
          "adultPrice": 25600,
          "childPrice": 22600,
          "seniorPrice": 21600,
          "infantPrice": 3000,
          "amountTotal": 8,
          "amountSold": 0,
          "amountAvailable": 30
        },
        {
          "date": "2022-12-01",
          "adultPrice": 25600,
          "childPrice": 22600,
          "seniorPrice": 21600,
          "infantPrice": 3000,
          "amountTotal": 8,
          "amountSold": 0,
          "amountAvailable": 30
        },
        {
          "date": "2022-12-02",
          "adultPrice": 25600,
          "childPrice": 22600,
          "seniorPrice": 21600,
          "infantPrice": 3000,
          "amountTotal": 8,
          "amountSold": 0,
          "amountAvailable": 30
        },
        {
          "date": "2022-12-16",
          "adultPrice": 25600,
          "childPrice": 22600,
          "seniorPrice": 21600,
          "infantPrice": 3000,
          "amountTotal": 8,
          "amountSold": 0,
          "amountAvailable": 30
        }
        ,
        {
          "date": "2022-12-17",
          "adultPrice": 25600,
          "childPrice": 22600,
          "seniorPrice": 21600,
          "infantPrice": 3000,
          "amountTotal": 8,
          "amountSold": 0,
          "amountAvailable": 30
        }
        ,
        {
          "date": "2022-12-19",
          "adultPrice": 25600,
          "childPrice": 22600,
          "seniorPrice": 21600,
          "infantPrice": 3000,
          "amountTotal": 8,
          "amountSold": 0,
          "amountAvailable": 30
        }
        ,
        {
          "date": "2022-12-20",
          "adultPrice": 25600,
          "childPrice": 22600,
          "seniorPrice": 21600,
          "infantPrice": 3000,
          "amountTotal": 8,
          "amountSold": 0,
          "amountAvailable": 30
        }
        ,
        {
          "date": "2022-12-22",
          "adultPrice": 25600,
          "childPrice": 22600,
          "seniorPrice": 21600,
          "infantPrice": 3000,
          "amountTotal": 8,
          "amountSold": 0,
          "amountAvailable": 30
        }
        ,
        {
          "date": "2022-12-24",
          "adultPrice": 25600,
          "childPrice": 22600,
          "seniorPrice": 21600,
          "infantPrice": 3000,
          "amountTotal": 8,
          "amountSold": 0,
          "amountAvailable": 30
        }
      ]
      this.optionChoose()
      this.$forceUpdate()
    },
    dateChoose(){
      this.input.amountAdult = 1
      this.input.amountSenior = 0
      this.input.amountChild = 0
      this.input.amountInfant = 0

      this.data.price[this.input.indexPrice].option[this.input.indexOption].available.forEach((data,indexAvailable) => {
        if(data.date == this.input.date){
          this.input.indexDateChoose = indexAvailable
        }
      });
      this.amountLimit('none')
      // console.log(this.input.date)
      // console.log(this.input.indexOption,this.input.indexDateChoose)
    },
    datePriceShow(itemAvailable,data){
      if(itemAvailable.date == data.day && itemAvailable.amountAvailable > 0 && moment(data.day) > moment()){
        return true
      }else{
        return false
      }
    },
    dateDisable(date,index){
      let check = true

      // item.option[0].available 上方都是先抓option[0] 寫死的 須注意要修改
      this.data.price[index].option[this.input.indexOption].available.forEach(data => {
        if(date == data.date && data.amountAvailable > 0 && moment(date) > moment()){
          check = false
        }
      });
      return check
    },
    optionChoose(){
      this.input.date = ''
      this.input.indexDateChoose = 0;
      this.input.indexSelector.length = 0
      // console.log(this.input.indexOption,this.input.indexDateChoose)
    },
    amountLimit(type){
      if(this.input.amountAdult + this.input.amountSenior + this.input.amountChild + this.input.amountInfant >= this.data.price[this.input.indexPrice].option[this.input.indexOption].available[this.input.indexDateChoose].amountAvailable){
        if(type == 'adult'){
          this.amountSeniorLimit = this.input.amountSenior
          this.amountChildLimit = this.input.amountChild
          this.amountInfantLimit = this.input.amountInfant
          this.amountAdultLimit = this.data.price[this.input.indexPrice].option[this.input.indexOption].available[this.input.indexDateChoose].amountAvailable 
          - this.amountSeniorLimit - this.amountChildLimit - this.amountInfantLimit
        }else if(type == 'senior'){
          this.amountAdultLimit = this.input.amountAdult
          this.amountChildLimit = this.input.amountChild
          this.amountInfantLimit = this.input.amountInfant
          this.amountSeniorLimit = this.data.price[this.input.indexPrice].option[this.input.indexOption].available[this.input.indexDateChoose].amountAvailable 
          - this.amountAdultLimit - this.amountChildLimit - this.amountInfantLimit
        }else if(type == 'child'){
          this.amountAdultLimit = this.input.amountAdult
          this.amountSeniorLimit = this.input.amountSenior
          this.amountInfantLimit = this.input.amountInfant
          this.amountChildLimit = this.data.price[this.input.indexPrice].option[this.input.indexOption].available[this.input.indexDateChoose].amountAvailable 
          - this.amountAdultLimit - this.amountSeniorLimit - this.amountInfantLimit
        }else if(type == 'infant'){
          this.amountAdultLimit = this.input.amountAdult
          this.amountChildLimit = this.input.amountChild
          this.amountSeniorLimit = this.input.amountSenior
          this.amountInfantLimit = this.data.price[this.input.indexPrice].option[this.input.indexOption].available[this.input.indexDateChoose].amountAvailable 
          - this.amountAdultLimit - this.amountChildLimit - this.amountSeniorLimit
        }else{
          this.amountAdultLimit = this.input.amountAdult
          this.amountSeniorLimit = this.input.amountSenior
          this.amountChildLimit = this.input.amountChild
          this.amountInfantLimit = this.input.amountInfant
        }
      }else{
        this.amountAdultLimit = 99999
        this.amountSeniorLimit = 99999
        this.amountChildLimit = 99999
        this.amountInfantLimit = 99999
      }
      // console.log(this.data.price[index].option[this.input.indexOption].available[this.input.indexDateChoose].amountAvailable,this.amountTotalLimit,this.input.amountAdult,this.input.amountChild)
    },
    priceCount(){

    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {

  },
  mounted() {
    this.handleScroll()

    this.data.price.forEach(data => {
      this.isPriceChoose.push(false)
    });
  }
}
</script>

<style>
.el-row{
  padding: 10px;
}
.line{
  white-space: pre-line;
}
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
  font-weight: 700;
  text-decoration: none;
  transition: color .2s cubic-bezier(.645,.045,.355,1);
  color: #f60;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
  font-weight: 700;
  text-decoration: none;
  transition: color .2s cubic-bezier(.645,.045,.355,1);
  color: #f60;
}
.el-card__body {
  padding: 10px;
}
.el-button--primary {
  background-color: #f60;
}
.shadow-inner {
  --tw-shadow: inset 0 4px 4px 0 rgb(0 0 0 / 0.05);
}
.el-tabs__item {
  font-size: 16px;
  color: #000000;
  font-weight: bold;
}

/* tab固定上方 可scroll 不顯示左右邊 */
.tab{
  position:fixed;
  width:100%;
  z-index: 10;
  top:50px;
}
.el-tabs__nav-scroll {
  overflow-x: scroll;
  height: 70px;
}
.el-tabs__nav-prev {
  display: none;
}
.el-tabs__nav-next {
  display: none;
}

/* calendar css修改 */
.el-calendar-table {
  text-align: center;
  font-weight: 600;
  border: 1px solid #ebeef5;
  border-top: 0px;
}
.el-calendar__title {
  font-size: 16px;
  font-weight: 600;
}
.el-calendar__button-group{
  font-weight: 600;
}
.el-calendar-table td.is-selected {
  background-color: white;
  color:white;
}
.el-calendar-table .el-calendar-day:hover {
  background-color: white;
  color:white;
  border-radius: 10px;
}
.el-calendar-table td {
  border-bottom: 0px solid;
  border-right: 0px solid;
  border-radius: 10px;
}
.el-calendar-table tr td:first-child {
  border-left:  0px solid;
}
.el-calendar__body {
  padding: 0px 0px 0px 0px;
}
.el-calendar__header {
  border: 1px solid #ebeef5;
}
.el-calendar-table tr:first-child td {
  border-top: 0px solid #ebeef5;
}
.el-button-group>.el-button:not(:last-child) {
  font-weight: 600;
  color: black;
}
.el-button-group>.el-button:last-child {
  font-weight: 600;
  color: black;
}
.el-calendar-table thead th {
  font-weight: 600;
}
.el-calendar-table:not(.is-range) td.prev {
  visibility:hidden
  /* calendar上個月隱藏 */
}
.el-calendar-table:not(.is-range) td.next{
  display:none
  /* calendar下個月不顯示 */
}
.el-button-group>.el-button:not(:first-child):not(:last-child) {
  display: none;
}
.el-calendar-table .el-calendar-day {
  padding: 0px;
}

/* 修改radio */
.el-radio__input {
  display: none;
}
.el-radio.is-checked{
  background-color: #f60;
  border-radius: 7px;
}
.el-radio__input.is-checked+.el-radio__label {
  color: white;
}

/* 計數器 */
.el-input-number {
  width: 120px;
}
.el-input-number__increase{
  width: 30px;
}
.el-input-number__decrease{
  width: 30px;
}

.el-input__inner {
  font-size: 16px;
}
</style>


