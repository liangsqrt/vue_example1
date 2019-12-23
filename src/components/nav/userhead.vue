<template>
    <div  class="user header ">
        <div v-if="user.isLogIn">
            <div>

                    <h2 is="sui-header" size="small" class="user avatar">

                        <el-avatar shape="square" size="medium" :src="avatarUrl"></el-avatar> 
                        <a>{{ user.username }}</a>
                    </h2>
            </div>
        </div>
        <div v-else>
            <el-button size="large" class="login button" @click.native="handleLoginClick">登陆</el-button>
            <el-button size="large" class="login sign in button">注册</el-button>
        </div>
        <div>
            <el-dialog
                    title="提示"
                    :visible.sync="loginDialogVisible"
                    width="30%"
                    :before-close="handleLoginBeforeClose"
                    >
                <el-form :model="form">
                    <el-form-item label="用户名" :label-width="formLabelWidth">
                    <el-input v-model="userLoginInput.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input v-model="userLoginInput.password" autocomplete="off" type="password"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="loginDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="loginDialogVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userhead",
        data(){
            return {
                loginDialogVisible:true,
                avatarUrl:'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
                userLoginInput:{
                    username:'',
                    password:'',
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
                this.loginDialogVisible = !this.loginDialogVisible;
            },
            handleLoginBeforeClose(){
                this.userLoginInput.username = ""
                this.userLoginInput.password = ""
                this.loginDialogVisible = false
            }
        },
        watch:{
            user(newValue, oldValue){
                console.log("the new value is:")
                console.log(newValue)
                console.log("the old value is:")
                console.log(oldValue)
            }
        }
    }
</script>

<style scoped>
    .user .img{
    /*padding: ;*/
}
    .user.header{
        display: inline-block;
        /* line-height:3em !important;
        padding: 10px 0 10px 0 */
        
    }
    .user.avatar{
        /* line-height:1.5em;
        padding: 10px 0 10px 0 ; */
        position: absolute;
        /* padding-top: 10px; */
    }
    .user.header.my.header{
        padding: 20px 0px 0px 0px;
    }
    .login.button{
        background: #00ccff;
        padding-right: 12px;
        padding-left: 12px;
        border: 0px;
    }
    .login.button:hover{
        background: #00BBFF;
    }
</style>
