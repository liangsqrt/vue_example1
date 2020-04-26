<template>

<!--   一个奇怪的bug， 为什么子组件的值是undifine! 此页面留作问题在线，求大侠解决！ -->
<!--    此功能由longin2 代替-->


    <div class="login_div">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="user">
                <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item prop="sidentify">
                <el-col :span="14">
                    <el-input placeholder="sidentify" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
                    </el-input>
                </el-col>
                <el-col :span="8" >
<!--                    <img src="/api/v1/verifycode?u">-->
                    <v-sidentify :identify-code="ruleForm.verify_code"></v-sidentify>
                </el-col>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
<!--        <v-sidentify identify-code="1233" ref="verifyComponent" ></v-sidentify>-->

    </div>
</template>

<script>
    import verifyCode from "../verifycode/drawverifyCode";

    export default {
        name:"login",
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validUser = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入正确用户名'));
                }  else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    user: '',
                    password: '',
                    verify_code: '1233',
                },
                verify_code_time: '',
                verifyShow:true,
                rules: {
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    user: [
                        { validator: validUser, trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        window.console.log(this.ruleForm)

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            async GenVerifyCode(){
                var timestamp = (new Date()).valueOf();
                this.verify_code_time = timestamp
                var salt = String(Math.random()).slice(0,5)
                var salt2 = eval(salt) * 1000
                var salt3 = String(timestamp) + "_" + String(salt2)
                var encrypt1 = btoa(salt3)

                const r = await this.$http.get("/api/v1/verifycode?u="+ encrypt1)
                window.console.log(r)
                if (r.status == 200){
                    this.ruleForm.verify_code = String(r.data["code"])

                    // window.console.log(this.$ref.verifyComponent.identifyCode)
                    // this.$ref.verifyComponent.identifyCode = ""
                }
            },

        },
        components: {
            'v-sidentify':verifyCode
        },
        mounted() {
            this.GenVerifyCode()
        }
    }
</script>

<style scoped>
.login_div {
    border: 1px solid rebeccapurple;
    padding: 10px 20px 10px;
}
</style>