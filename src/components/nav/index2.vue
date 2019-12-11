<template>
    <div>
        <el-row>
            <el-menu
                    :default-active="activeIndex2"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#0099ff"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    active-background-color=""
            >
                <el-col :span="6">
                    <div id="logo">
                        <h1>
                            <a href="index.html" class="logo index">HLZZ</a>
                        </h1>
                    </div>
                </el-col>
                <el-col :span="14" class="mynavmenu">
                    <el-row>
                        <el-menu-item index="1">处理中心</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                            <el-submenu index="2-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="2-4-1">选项1</el-menu-item>
                                <el-menu-item index="2-4-2">选项2</el-menu-item>
                                <el-menu-item index="2-4-3">选项3</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="3" >消息中心</el-menu-item>
                        <el-menu-item index="4"><a target="_blank">订单管理</a></el-menu-item>
                    </el-row>
                </el-col>
                <el-col :span="4">
                    <userlogin></userlogin>
                </el-col>
            </el-menu>
        </el-row>
    </div>
</template>

<script>
    import userlogin from "../userhead/userlogin";
    export default {
        components:{
            userlogin
        }

    }
</script>

<style>
    @import "../../style/nav/nav.scss";
    @import "../../assets/css/bootstrap.min.css";
    @import "../../assets/css/style.css";

    .mynavmenu .el-menu-item:focus, .el-menu-item:hover {
        outline: 0;
        background-color: #00ccff !important;
    }

    .mynavmenu .el-submenu__title:hover {
        background: #00ccff !important;
    }
    .mynavmenu .el-submenu.is-opened{
        background: #00ccff;
    }
    .logo.index{
        padding: 10px 0px 5px 20px !important;
    }

</style>
