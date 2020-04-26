<template>
    <div class="login_mini_comp showline">
        <el-form :model="Login" status-icon :rules="rules" ref="Login" label-width="10px" class="demo-ruleForm">
            <el-form-item  prop="mobilephone">

                <el-input type="text" v-model="Login.mobilephone" placeholder="手机号码" autocomplete="off">
                    <i slot="prefix" class="el-input__icon el-icon-plus">86</i>
                </el-input>
            </el-form-item>
            <el-form-item  prop="verifycode">
                <el-row>
                    <el-col :span="6">
                        <el-button type="primary" class="verify btn" @click="GenVerifyCode('Login')">获取验证码</el-button>
                    </el-col>
                    <el-col :span="3">
                        <p></p>
                    </el-col>
                    <el-col :span="15">
                        <el-input type="text" v-model="Login.verify_code" placeholder="验证码" autocomplete="off">
                        </el-input>
                    </el-col>
                </el-row>
            </el-form-item>

            <el-form-item>

            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="login btn" @click="submitForm('Login')">登录/注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name:"loginByPhone",
        data() {
            var validatePhone = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入手机号码'));
                } else {
                    if (this.Login.mobilephone !== '') {
                        if(this.Login.mobilephone.length !== 11){
                            callback(new Error("手机号码错误！"))
                        }else if(!this.Login.mobilephone.startsWith("1")){
                            callback(new Error("手机格式不对"))
                        }else {
                            window.console.log("手机格式检测通过！")
                        }
                    }
                    callback();
                }
            };
            var validCode = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入正确用户名'));
                }  else {
                    callback();
                }
            };
            return {
                Login: {
                    mobilephone: '',
                    verify_code: '',
                },
                rules: {
                    mobilephone: [
                        { validator: validatePhone, trigger: 'blur' }
                    ],
                    verify_code: [
                        { validator: validCode, trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        window.console.log(this.Login)

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            GenVerifyCode(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid){
                        window.console.log("手机检验通过")
                    }else {
                        console.log("error submit!!!!")
                        return false
                    }
                });
            },

        },
        mounted() {
            this.GenVerifyCode('Login')
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

    /*黑科技， css 深度穿透  使用 scoped 后，父组件的样式将不会渗透到子组件中。不过一个子组件的！根节点！会同时受其父组件的
     scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。 也就局限于根节点，
     想要更加的穿肉，就需要黑科技！*/
    .el-input--prefix >>> .el-input__inner{
        padding-left: 45px;
    }

</style>