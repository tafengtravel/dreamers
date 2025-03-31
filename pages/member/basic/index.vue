<template>
  <div class="grid grid-cols-1 bg-[#F0F0F0]">
    <!-- 每頁面開頭需偏移51.7px Navbar -->
    <div class="mt-[51.7px]">
    </div>
    <div class ="el-col el-col-24 el-col-xs-22 el-col-xs-offset-1 el-col-sm-22 el-col-sm-offset-1 el-col-md-20 el-col-md-offset-2 el-col-lg-16 el-col-lg-offset-4">
      <el-row class="md:my-5" :gutter="40" style="display:flex;flex-wrap:wrap;">
        <el-col class ="my-5 el-col el-col-24 el-col-xs-24 el-col-sm-24  el-col-md-8 el-col-lg-6" style="border-radius:8px">
          <div class="">
            <Member></Member>
          </div>
          <div class="mt-5">
            <MemberNavbar :data="MemberNavbarChild"></MemberNavbar>
          </div>
        </el-col>

        <el-col class ="md:my-5 mb-5 el-col el-col-24 el-col-xs-24 el-col-sm-24  el-col-md-16 el-col-lg-18">
          <el-card class="box-card rounded-[8px]" shadow="never">
            <div class="text-[20px] lg:text-[26px] text-gray-700 font-semibold mb-[16px]">
              帳號設定
            </div>
            <el-tabs v-model="mamberTabs">
              <el-tab-pane label="基本資料" name="1" class="text-[18px]">
                <el-form label-position="left" class="demo-ruleForm" label-width="70px" ref="ruleForm"> 
                  
                  <el-row>
                    <el-form-item label="姓氏" class="inline el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-11 el-col-lg-11 my-[14px]">
                      <el-input v-model="itemData.lastName" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="名字" class="inline el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-11 el-col-lg-11 my-[14px]">
                      <el-input v-model="itemData.firstName" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="性別" class="inline el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-11 el-col-lg-11 my-[14px]">
                      <el-select v-model="itemData.gender" placeholder="請選擇" class="w-[100%]">
                        <el-option label="男" value="男"></el-option>
                        <el-option label="女" value="女"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="生日" class="inline el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-11 el-col-lg-11 my-[14px]">
                      <el-date-picker
                        v-model="itemData.birth"
                        type="date"
                        placeholder="選擇日期"
                        style="width:100%"
                      >
                      </el-date-picker>
                    </el-form-item>
                    <el-form-item label="手機" class="inline el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-11 el-col-lg-11 my-[14px]">
                      <el-input v-model.number="itemData.phone" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="信箱" class="inline el-col el-col-24 el-col-xs-24 el-col-sm-24 el-col-md-11 el-col-lg-11 my-[14px]">
                      <el-input v-model="itemData.mail" placeholder=""></el-input>
                    </el-form-item>

                    
                  </el-row>
                  <el-row>
                    <el-button type="primary" class="my-[14px]">儲存</el-button>
                  </el-row>

                </el-form>

              </el-tab-pane>
              <el-tab-pane label="帳號安全" name="2" class="text-[18px]">
                <el-form label-position="left" class="demo-ruleForm" label-width="120px" ref="ruleForm"> 
                  
                  <el-row>
                    <el-form-item label="原密碼" class="inline el-col el-col-24 my-[14px]">
                      <el-input v-model="itemData.defaultPassword" show-password placeholder="原密碼"></el-input>
                    </el-form-item>
                    <el-form-item label="新密碼" class="inline el-col el-col-24 my-[14px]">
                      <el-input v-model="itemData.newPassword" show-password placeholder="新密碼"></el-input>
                    </el-form-item>
                    <el-form-item label="確認新密碼" class="inline el-col el-col-24 my-[14px]">
                      <el-input v-model="itemData.newPasswordConfirm" show-password placeholder="確認新密碼"></el-input>
                    </el-form-item>

                    
                  </el-row>
                  <el-row>
                    <el-button type="primary" class="my-[14px]">儲存</el-button>
                  </el-row>

                </el-form>

              </el-tab-pane>
            </el-tabs>
            

            
          </el-card>
        </el-col>
      </el-row>
      
    </div>
  </div>
  
</template>

<script>
import MemberNavbar from '~/components/MemberNavbar.vue';
import Member from '~/components/Member.vue';


export default {
  components: { 
    MemberNavbar,
    Member
  },
  data() {
    return{
      MemberNavbarChild:{},
      mamberTabs:'1',
      itemData:{
        firstName:'',
        lastName:'',
        birth:'',
        gender:'',
        phone:'',
        mail:'',
        defaultPassword:'',
        newPassword:'',
        newPasswordConfirm:'',

      },
      ruleForm:{},
    }
  },
  head() {
    return {
      title: '會員資料｜大豐旅行社',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  },
  async asyncData () {
    let MemberNavbarChild = {
      active:'1'
    }
    return { MemberNavbarChild: MemberNavbarChild}
  },
  methods: {
    
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


