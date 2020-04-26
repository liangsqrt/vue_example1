<template>
<!--    todo:1.怎么获取captcha中的id； 2.还要模拟form 提交表单  -->
    <div class="login_mini_comp showline">
        <el-form :model="LoginForm" status-icon ref="LoginForm" label-width="10px" class="demo-ruleForm" :rules="rules" >
            <el-form-item  prop="username">
                <el-input type="text" placeholder="请输入用户名" v-model="LoginForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item  prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="LoginForm.password" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item prop="verify_code">
                <el-col :span="16" >
<!--                    此步骤应当独立成一个组件-->
                    <el-input placeholder="请输入验证码" v-model="LoginForm.verify_code" >
                    </el-input>
                </el-col>
                <el-col :span="8">
                    <div v-html="verify_data.verify_html">
                    </div>
                </el-col>
            </el-form-item>

            <el-form-item>
                <el-button class="login btn" type="primary" @click="login('LoginForm')">登录</el-button>
<!--                下边还有很多按钮：忘记密码，注册，微信登陆，微博登陆-->
            </el-form-item>

        </el-form>
    </div>

</template>

<script>

    // import verifyCode from "@/components/login/verifyCode";
    export default {
        name: "login2",
        components: {
            // verifyCode
        },
        data() {
            var validVerifyCode = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入正确验证码'));
                } else {
                    var noright = true
                    window.console.log(this.ruleForm)
                    let verify = async function (this1, func1) {
                        const r = await this1.$http.post("api/v1/picverifycode", {
                                'captcha': this1.LoginForm.verify_code,
                                'captcha_id': this1.verify_data.verify_id
                            }
                        )
                        if(r.status===200){
                            if(r.data["status"]===1){
                                window.console.log("noriht的值是", noright)
                                window.console.log("验证码正确！")
                                noright = false
                                this1.verify_data.is_pass = true
                                window.console.log("noright is ", noright)
                            }else {
                                window.console.log("验证码不正确")

                            }
                        }else {
                            this1.$message.warn("验证码访问失败！")
                        }
                            func1()
                    }
                    let warming=function () {
                        window.console.log("final noright is ", noright)
                        if(noright){
                            callback(new Error("验证码不正确"))
                        }
                    }

                    verify(this, warming)

                }
            };

            var validUser = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入正确用户名'));
                } else {
                    callback();
                }
            };

            var validPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入正确密码'));
                } else {
                    callback();
                }
            };

            return {
                LoginForm:{
                    username: "",
                    password: "",
                    verify_code: "",
                },
                verify_data:{
                    verify_html: "<div id='verify_code'></div>",
                    verify_id: "",
                    is_pass:false,
                },

                rules: {
                    verify_code: [
                        { validator: validVerifyCode,  trigger:'blur'}
                    ],
                    password: [
                        { validator: validPassword, trigger: 'blur' }
                    ],
                    username: [
                        { validator: validUser, trigger: 'blur' }
                    ],
                },
            }
        },
        methods:{

             async login(dataname){
                window.console.log(dataname)
                if(this.verify_data.is_pass){
                    const r = await this.$http.post("/api/v1/acountlogin",this.LoginForm,)
                    if(r.status){
                        window.console.log("helloworld!")
                        console.log(r.data)
                    }
                }else {
                    this.$message.error("请检查输入")
                }

            },

            async showVerifyhtml(){
                const r =await  this.$http.get("/api/v1/picverifycode")
                if (r.status ===200){
                    this.verify_data.verify_html = r.data
                    var captchaids = this.verify_data.verify_html.match("captcha\\/(.*?)\\.png")
                    console.log(captchaids)
                    this.verify_data.verify_id = captchaids[1]
                }
            },

        },
        watch:{
            fatherData2(va1, va2){
                window.console.log(va2)
                window.console.log(va1)
                window.console.log("change")
            }
        },
        mounted() {
            this.showVerifyhtml()
        }

    }
</script>

<style scoped>
    .login_mini_comp{
        width: 360px;
        height: 320px;
        padding: 10px 20px 10px;
    }
    .showline{
        border: 1px red solid;
    }
    .login.btn{
        width: 350px;
    }

</style>