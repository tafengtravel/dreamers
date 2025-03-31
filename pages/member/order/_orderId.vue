<template>
  <div class="grid grid-cols-1 bg-[#F0F0F0]">
    <!-- 每頁面開頭需偏移51.7px Navbar -->
    <div class="mt-[51.7px]">
    </div>
    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-20 el-col-md-offset-2 el-col-lg-16 el-col-lg-offset-4">
      <el-row class="md:my-5 mb-5" :gutter="40" style="display:flex;flex-wrap:wrap;">
        <el-col class ="my-5 el-col el-col-24 el-col-xs-24 el-col-sm-24  el-col-md-10 el-col-lg-8">
          <el-card class="box-card rounded-[8px]" shadow="never" style="height:auto">
            <el-row :gutter="40">
              <el-col class ="my-5 el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-24 el-col-lg-24">
                <el-image
                  style="width: 100%;height:225px"
                  :src="itemData.imageUrl"
                  fit="cover"
                  class="rounded-[8px]">
                </el-image>
              </el-col>
              <el-col class ="my-5 el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-24 el-col-lg-24">
                
                <div class="text-[18px] lg:text-[20px] text-gray-800 font-semibold mb-[16px]">
                  {{itemData.title}}  
                </div>
                <div class="text-[16px] lg:text-[18px] text-gray-600 font-semibold mb-[6px]">
                  <i class="el-icon-date"></i>
                  日期：{{itemData.depDate}}<span v-if="itemData.endDate">~{{itemData.endDate}}</span>
                </div>
                <div class="text-[16px] lg:text-[18px] text-gray-600 font-semibold mb-[6px]">
                  <i class="el-icon-document"></i>
                  方案：{{itemData.optionTitle}}  
                </div>

                <el-divider></el-divider>

                <div class="text-right mb-[6px]">
                  <span class="font-mono text-[14px] lg:text-[18px] text-gray-600 font-semibold">
                    TWD   
                  </span>
                  <span class="font-mono text-[26px] lg:text-[30px] text-[#FF6600] font-semibold">
                    {{itemData.price}}  
                  </span>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <el-col class ="md:my-5 el-col el-col-24 el-col-xs-24 el-col-sm-24  el-col-md-14 el-col-lg-16">
          <el-row :gutter="40">
            <el-col class ="el-col el-col-24">
              <el-card class="box-card rounded-[8px]" shadow="never">
                <div class="mb-[16px]">
                  <el-tag class="text-[14px]" v-if="depDateCheck(itemData.depDate)">即將出發</el-tag>
                  <el-tag class="text-[14px]" v-else>已出發</el-tag>
                </div>
                <el-divider></el-divider>
                <div class="text-[22px] lg:text-[24px] text-gray-800 font-semibold mb-[16px]">
                  訂單編號：#{{itemData.orderId}}  
                </div>
                <div class="text-[16px] lg:text-[18px] text-gray-600 font-semibold mb-[10px]">
                  <i class="el-icon-user"></i>
                  訂購人姓名：{{itemData.lastName}} {{itemData.firstName}}
                </div>
                <div class="text-[16px] lg:text-[18px] text-gray-600 font-semibold mb-[10px]">
                  <i class="el-icon-message"></i>
                  信箱：{{itemData.mail}}  
                </div>
                <div class="text-[16px] lg:text-[18px] text-gray-600 font-semibold mb-[10px]">
                  <i class="el-icon-phone-outline"></i>
                  連絡電話：{{itemData.phone}}  
                </div>
                <div class="text-[16px] lg:text-[18px] text-gray-600 font-semibold mb-[10px]">
                  <i class="el-icon-date"></i>
                  訂購日期：{{itemData.bookingDate}}  
                </div>
              </el-card>

            </el-col>
            <el-col class ="el-col el-col-24">
              <el-card class="box-card rounded-[8px] mt-5" shadow="never">
                <el-tabs v-model="orderTabs">
                  <el-tab-pane label="行程介紹及須知" name="1" class="text-[18px]">
                    

                    <div v-if="itemData.policy.include.length > 0 || itemData.policy.exclude.length" ref="include">
                      <el-row>
                        <div class ="text-[20px] lg:text-[22px] text-gray-800 font-semibold my-[16px]">費用包含</div>
                      </el-row>
                      <el-row>
                        <div class="el-col el-col-12 el-col-xs-24 el-col-sm-24 el-col-lg-12 pb-[20px] xl:pb-[0px]">
                          <div class="el-col el-col-24 text-base font-semibold mt-[5px]" v-for="(item,index) in itemData.policy.include">
                            <i class="el-icon-check font-semibold text-[#f60]"></i>&ensp;
                            <span class="text-base font-semibold text-[#333]">
                              {{item}}
                            </span>
                          </div>
                        </div>
                        <div class="el-col el-col-12 el-col-xs-24 el-col-sm-24 el-col-lg-12">
                          <div class="el-col el-col-24 text-base font-semibold mt-[5px]" v-for="(item,index) in itemData.policy.exclude">
                            <i class="el-icon-close font-semibold text-gray-600"></i>&ensp;
                            <span class="text-base font-semibold text-[#333]">
                              {{item}}
                            </span>
                          </div>
                        </div>
                      </el-row>
                      <el-divider></el-divider>
                    </div>

                    <!-- 注意事項 -->
                    <div v-if="itemData.policy.announce != ''" ref="announce">
                      <el-row>
                        <div class ="text-[20px] lg:text-[22px] text-gray-800 font-semibold mb-[16px]">注意事項</div>
                      </el-row>
                      <el-row>
                        <div class ="text-base font-semibold text-[#333] line tracking-wide leading-7" v-html ="itemData.policy.announce"></div>
                      </el-row>
                      <el-divider></el-divider>
                    </div>
                    
                    <!-- 取消規定 -->
                    <div v-if="itemData.policy.cancel != ''" ref="cancel">
                      <el-row>
                        <div class ="text-[20px] lg:text-[22px] text-gray-800 font-semibold mb-[16px]">取消規定</div>
                      </el-row>
                      <el-row>
                        <div class ="text-base font-semibold text-[#333] line tracking-wide leading-7" v-html ="itemData.policy.cancel"></div>
                      </el-row>
                      <el-divider></el-divider>
                    </div>

                  </el-tab-pane>
                  <el-tab-pane label="活動資訊" name="2" class="text-[18px]">
                    123132
                    <br><br><br><br><br><br><br><br><br><br><br>
                  </el-tab-pane>
                </el-tabs>
                
              </el-card>

            </el-col>

          </el-row>


        </el-col>
      </el-row>
      
    </div>
  </div>
  
</template>

<script>
import * as moment from "moment/moment";


export default {
  components: { 
  },
  data() {
    return{
      itemData:{
       
      },
      orderTabs:'1'
    }
  },
  head() {
    return {
      title: '訂單管理｜大豐旅行社',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  },
  async asyncData ({params}) {
    console.log(params.orderId)
    let itemData = {
      imageUrl:'https://mysys.greenscope.com.tw/pubimg/imgLink/HT00215/20221202174204.jpg',
      title:'【限時促銷】日本沖繩｜五日自由行｜保證成團｜桃園出發',
      optionTitle:'樂桃專案',
      depDate:'2023-03-08',
      endDate:'2023-03-12',
      price:45000,
      mail:'kevin860320@gmail.com',
      phone:'0933341446',
      lastName:'呂',
      firstName:'皇毅',
      bookingDate:'2023-03-08 00:15(GMT+8)',
      orderId:params.orderId,
      policy: {
        features: "一起去宿霧自由行吧！美麗迷人的海灘\n一同與海龜、沙丁魚共游吧！\n一同與鯨鯊共游！",
        include: ["來回機票","4晚住宿","行程"],
        exclude: ["午餐","晚餐","小費"],
        announce: "＊ 因安全考量，請確定個人身體健康良好，如有心臟病等突發性疾病，或重大疾病、心血管疾病、氣喘病患者、癲癇及孕婦，請勿報名。",
        cancel: "１．此訂購單需客服人員確認回覆後始可生效，並視同雙方同意簽屬【國外個別旅遊定型化契約書】(100年01月17日觀光字第0990044124號函公告修正)，敬請詳閱該契約書內容。本套裝行程除取消費用特別加註外，均適用【國外個別旅遊定型化契約書】之相關規定。\n２．旅客取消行程《旅客於訂購行程完成付款後通知旅行社取消者》，將依據【國外個別旅遊定型化契約書】第十六條：出發前旅客任意解除契約，須收取費用如下：《通知日以上班日為基準》\n一、通知於出發日前第二十一日至第三十日以內到達者，賠償旅遊費用百分之十。\n二、通知於出發日前第十一日至第二十日以內到達者，賠償旅遊費用百分之二十。\n三、通知於出發日前第四日至第十日以內到達者，賠償旅遊費用百分之三十。\n四、通知於出發日前一日至第三日以內到達者，賠償旅遊費用百分之七十。\n五、通知於出發當日以後到達者，賠償旅遊費用百分之一百。\n如能證明其所受損害超過第一項各款標準者，得就其實際損害請求賠償。\n"
      }
    }
    console.log(itemData)
    return {itemData:itemData}
  },
  async validate({params}){
    if(params.orderId){
      return true
    }else{
      return false
    }
  },
  methods: {
    depDateCheck(depDate){
      if(depDate<=moment().format('YYYY-MM-DD')){
        return false
      }else{
        return true
      }
    }
  },
  watch: {

  },
  mounted() {

  }
}
</script>

<style>
.el-menu {
  border-right: solid 0px;
  border-radius: 8px;
}
.el-tabs__item {
  font-size: 16px;
  color: #6b7280;
  font-weight: bold;
}
.inline{
  display: inline-block;margin-right:12px
}
.el-form-item__label {
  font-size: 18px;
  color: #404040;
  font-weight: bold;
}
.el-input {
  font-size: 18px;
  color: #404040;
}
</style>


