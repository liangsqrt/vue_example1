<template>
    <div  class="user header ">
        <div v-if="user.isLogIn">
            <div>

<!--                    <a is="sui-menu-item">-->
<!--                        <sui-icon name="mail" /> Messages-->
<!--                        <sui-label color="red" floating>-->
<!--                            22-->
<!--                        </sui-label>-->
<!--                    </a>-->
<!--                    <a is="sui-menu-item">-->
<!--                        <sui-icon name="users" /> Friends-->
<!--                        <sui-label color="teal" floating>-->
<!--                            22-->
<!--                        </sui-label>-->
<!--                    </a>-->
                    <h2 is="sui-header" size="small" class="my header">
<!--                        <sui-label color="red" floating>20</sui-label>-->
                        <sui-image circular src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" /> {{ user.username }}
                    </h2>


<!--                <a is="sui-label" image size="huge" color="blue">-->
<!--                    <img src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" >-->

<!--                </a>-->
            </div>
        </div>
        <div v-else>
            <el-button size="large" class="login button" @click.native="clickLogin">登陆</el-button>
            <el-button size="large" class="login sign in button">注册</el-button>
        </div>
        <div>
            <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                <span>这是一段信息</span>
                <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userhead",
        data(){
            return {
                showLogin:false
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
            clickLogin(){
                this.showLogin = !this.showLogin;
            },
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
