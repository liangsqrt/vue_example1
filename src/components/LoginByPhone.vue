<template>
  <div>

          <Form
            ref="formValidate"
            :model="formValidate"
            :rules="ruleValidate"
            :label-width="70"
          >
            <FormItem
              label="手机号码"
              prop="name"
            >
              <Input
                v-model="formValidate.name"
                placeholder="手机号"
              />
            </FormItem>

            <FormItem
              label="验证码"
              prop="captcha"
            >
              <Input
                v-model="formValidate.captcha"
                placeholder="验证码"
              />
              <img :src="path + picPath" alt="请输入验证码" @click="loginVefify()" class="vPic">
            </FormItem>

            <FormItem
              label="手机验证码"
              prop="verifyCode"
            >
              <Input
                type="text"
                v-model="formValidate.verifyCode"
                placeholder="短信验证码"
              />
            </FormItem>

            <FormItem class="loginformbtn">
              <Button
                long
                type="warning"
                @click="handleSubmit('formValidate')"
              >获取验证码</Button>
            </FormItem>

            <FormItem class="loginformbtn">
              <Button
                long
                type="primary"
                @click="handleSubmit('formValidate')"
              >登录</Button>
            </FormItem>
          </Form>
          <div class="register">
            <a href="javascript:;">忘记密码</a>
            <a href="javascript:;">注册</a>
          </div>
        </div>
</template>

<script>
  import {captcha} from "@/api/user"
  import {login} from "../api/user";
  const path = process.env.VUE_APP_BASE_API;

  export default {
    name: "loginByPhone",
    created() {
      this.loginVefify()
    },
    data() {
      return {
        formValidate: {
          name: "",
          verifyCode: "",
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
          verifyCode: [
            {
              required: true,
              message: "请输入短信验证码",
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

        path:path,
        logVerify:'',
        picPath:''
      };
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            login(this.$refs[name]).then(

            ).catch(
              this.$Message.error("登录失败")
            )
            this.$Message.success("Success!");
          } else {
            this.$Message.error("Fail!");
          }
        });

      },

      loginVefify() {
        window.console.log(process.env)
        captcha({}).then(ele=>{
          // 点击登录过后  变化一下验证码
          this.picPath = ele.data.picPath
          this.formValidate.captchaId = ele.data.captchaId
        })
      }
    },

  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/base.scss";

  .vPic{
    position: absolute;
    right: 10px;
    bottom: 0px;   // 适配ie
  }

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
    .loginformbtn{
      margin: 0;
    }
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
          height: 286px;
          border-radius: 6px;
          box-shadow: 2px 2px 5px #666;
          background-color: #fff;
          padding: 30px 20px 10px;
          padding-top: 50px;
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
