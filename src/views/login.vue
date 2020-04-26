<template>
  <div class="login">
    <div class="container">
      <div class="header-top">
        <h3>分够平台</h3>
        <span>专为四川学子服务</span>
      </div>
      <div class="time">
        <div class="time-wrapper">
          <div class="high">距离高考:</div>
          <div class="day">
            <span>{{ this.diffDays[0] }}</span>
            <span>{{ this.diffDays[1] }}</span>
            <span>{{ this.diffDays[2] }}</span>
          </div>
          <div class="tips">天</div>
        </div>
      </div>
    </div>
    <!-- content -->

    <div class="content">
      <div class="container">
        <div class="login-wrapper">
          <div class="btncontainer">
            <button @click="changeLoginWay('1')">用户名密码</button>
            <button @click="changeLoginWay('2')">手机短信登录</button>
          </div>
          <div class="loing form">
            <div v-if="loginWay==='1'">
              <LoginByUser></LoginByUser>
            </div>
            <div v-else>
              <LoginByPhone></LoginByPhone>
            </div>
          </div>
        </div>
      </div>
    </div>

    <NavFooter></NavFooter>
  </div>
</template>

<script>
    import NavFooter from "@/components/NavFooter"
    import {captcha} from "@/api/user"
    // import {login} from "../api/user";
    const path = process.env.VUE_APP_BASE_API;
    import LoginByUser from "../components/LoginByUser";
    import LoginByPhone from "../components/LoginByPhone";

export default {
  name:"login",
  data() {
    return {
      formValidate: {
        name: "",
        password: "",
        captcha:'',
        captchaId: '',
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          { type: "string", min: 6, message: "密码最少6位", trigger: "blur" }
        ],
          captcha: [
              {
                  required: true,
                  message: "验证码不能为空",
                  trigger: "blur"
              }
          ],
      },
      diffDays:[
        "0","0","0"
      ],
      path:path,
      logVerify:'',
      picPath:'',
      loginWay:"1",
    };
  },
  components: { NavFooter, LoginByUser, LoginByPhone },
  methods: {
    // handleSubmit(name) {
    //   this.$refs[name].validate(valid => {
    //     if (valid) {
    //       login(this.$refs[name]).then(
    //
    //       ).catch(
    //         this.$Message.error("登录失败")
    //       )
    //       this.$Message.success("Success!");
    //     } else {
    //       this.$Message.error("Fail!");
    //     }
    //   });
    //
    // },

    updateDiffDays(){
      var gaokao_days = new Date()
      var today = new Date()
      gaokao_days.setFullYear(2020,6,7)  // 6代表7月
      var diffDays = (gaokao_days - today)/(1000 * 60 * 60 *24)
      var diffDaysStr = String(Math.round(diffDays))
      if(diffDaysStr.length < 3){
        diffDaysStr = "0" + diffDaysStr
      }
      this.diffDays[0] = diffDaysStr[0]
      this.diffDays[1] = diffDaysStr[1]
      this.diffDays[2] = diffDaysStr[2]
      window.console.log(this.diffDays)
    },

    loginVefify() {
        window.console.log(process.env)
          captcha({}).then(ele=>{
              // 点击登录过后  变化一下验证码
              this.picPath = ele.data.picPath
              this.formValidate.captchaId = ele.data.captchaId
          })
      },

    changeLoginWay(data){
      window.console.log(data)
      this.loginWay = data
    }
  },
  beforeMount() {
    this.updateDiffDays()
  },

};
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";

.login {
  .header-top {
    h3 {
      font-size: 28px;
      color: #101010;
    }
    span {
      font-size: 20px;
      color: #a6a6a6;
    }
  }
  .time {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    .time-wrapper {
      width: 270px;
      color: #101010;

      .high {
        font-size: 14px;
      }

      .day {
        font-size: 48px;
        margin-left: 40px;
        span {
          display: inline-block;
          padding: 0px 12px;
          border-radius: 5px;
          box-shadow: 2px 2px 5px #666;
          margin-right: 20px;
        }
      }
      .tips {
        text-align: right;
      }
    }
  }
  // 主体区域
  .content {
    width: 100%;
    height: 450px;
    background: url("/imgs/bg-login.jpg") no-repeat #56c6d4 center center;
    background-size: contain;
    margin-bottom: 50px;
    .container {
      height: 450px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .login-wrapper {
        width: 360px;
        height: 310px;
        border-radius: 6px;
        box-shadow: 2px 2px 5px #666;
        background-color: #fff;
        padding: 30px 20px 10px;
        padding-top: 20px;
        box-sizing: border-box;

        .register {
          margin-top: 30px;
          text-align: right;
          a {
            color: #101010;
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" >
.login {
  .ivu-form-item-required .ivu-form-item-label:before {
    display: none;
  }

  .ivu-form .ivu-form-item-label {
    text-align: center;
    padding-right: 0;
    color: #101010;
  }
}
  .loing.form{
    margin-top: 5px;
  }
</style>
