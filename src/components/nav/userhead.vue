<template>
    <div  class="user header ">
        <div v-if="user.isLogIn">
            <div class="user avatar">
                <el-avatar shape="square" :src="avatarUrl">
                </el-avatar>
                <a>{{ user.username }}</a>
            </div>
        </div>
            <div v-else>
                <el-button size="large" class="login button" @click.native="handleLoginClick">登陆</el-button>
                <el-button size="large" class="login sign in button" @click="handleSignInClick">注册</el-button>
            </div>
        <div>
            <el-dialog
                title="提示"
                :visible.sync="dialogLogInVisible"
                width="30%"
                :before-close="handleLoginClick"
                :modal-append-to-body='false'
                >
                <el-form :model="userLoginInput">
                    <el-form-item label="用户名" :label-width="pageShowControl.formLabelWidth">
                    <el-input v-model="userLoginInput.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" :label-width="pageShowControl.formLabelWidth">
                    <el-input v-model="userLoginInput.password" autocomplete="off" type="password"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="handleLogin">登陆</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>

            <el-dialog
                title="用户注册"
                :visible.sync="dialogSignInVisible"
                width="30%"
                :before-close="handleSignInClick"
                :modal-append-to-body='false'
                >
                <el-form :model="userSignInInput" :rules="rules">
                    <el-form-item label="用户名" :label-width="pageShowControl.formLabelWidth">
                    <el-input v-model="userLoginInput.username" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="密码" :label-width="pageShowControl.formLabelWidth">
                    <el-input v-model="userLoginInput.password1" autocomplete="off" type="password"></el-input>
                    </el-form-item>

                    <el-form-item label="确认密码" :label-width="pageShowControl.formLabelWidth">
                    <el-input v-model="userLoginInput.password2" autocomplete="off" type="password"></el-input>
                    </el-form-item>

                    <el-form-item label="手机号码" :label-width="pageShowControl.formLabelWidth">
                    <el-input v-model="userLoginInput.mobile" autocomplete="off" type="password"></el-input>
                    </el-form-item>

                    <el-form-item label="验证码" :label-width="pageShowControl.formLabelWidth">
                    <el-input v-model="userLoginInput.verify_code" autocomplete="off" type="password"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userhead",
        data(){
            return {
                pageShowControl: {
                    formLabelWidth: "50"
                },

                dialogLogInVisible: false,
                dialogSignInVisible: false,
                avatarUrl:'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
                userLoginInput:{
                    username: '',
                    password: '',
                },
                userSignInInput:{
                    username: "",
                    password1: "",
                    password2: "",
                    mobile: "",
                    verify_code: "",
                },
                rules:{
                    username: [
                        {
                            required:true,
                            message: '请输入用户名',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        props: {
            user:{
                type: Object,
                default: () => {
                    return {isLogIn: false}
                }
            }
        },
        methods: {
            handleLoginClick(){
                this.dialogLogInVisible = !this.dialogLogInVisible;
            },
            handleSignInClick(){
                this.dialogSignInVisible = !this.dialogSignInVisible;
            },
            handleLoginBeforeClose(){
                this.userLoginInput.username = ""
                this.userLoginInput.password = ""
                this.loginDialogLogInVisible = false
            },
            handleLogin(){
                this.$store.dispatch("user/login", this.userLoginInput)
            }
        },
        // watch:{
        //     user(newValue, oldValue){
        //         console.log("the new value is:")
        //         console.log(newValue)
        //         console.log("the old value is:")
        //         console.log(oldValue)
        //     }
        // }
    }
</script>

<style scoped>
    .user .avatar{
        vertical-align: middle;
    }

</style>
