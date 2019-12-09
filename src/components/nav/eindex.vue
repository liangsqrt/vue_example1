<template>
    <div>
        <el-row>
            <el-menu
                    :default-active="activeIndex2"
                    class=" headder-top d-lg-flex justify-content-between align-items-center py-3 px-sm-3"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color=""
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    active-background-color=""
            >
                <el-col :span="6">
                    <div id="logo">
                        <h1>
                            <a href="index.html">HLZZ</a>
                        </h1>
                    </div>
                </el-col>
                <el-col :span="14">
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
                        <el-menu-item index="3" disabled>消息中心</el-menu-item>
                        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                    </el-row>
                </el-col>
                <el-col :span="4">
                    <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
                </el-col>
            </el-menu>
        </el-row>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    @import "../../style/nav/nav.scss";
    @import "../../assets/css/bootstrap.min.css";
    @import "../../assets/css/style.css";

    .el-menu-item:focus, .el-menu-item:hover {
        outline: 0;
         background-color: #006666 !important;
    }

    .el-submenu__title:hover {
         background: #006666 !important;
    }
    .el-submenu.is-opened{
        background: #006666;
    }



    /*@media (min-width: 576px) {*/
    /*    .pl-sm-3, .px-sm-3 {*/
    /*        padding-left: 1rem!important;*/
    /*    }*/
    /*}*/


    /*#logo a {*/
    /*    float: left;*/
    /*    display: initial;*/
    /*    fonts-size: 32px;*/
    /*    color: #fff;*/
    /*    text-shadow: 2px 5px 3px rgba(0, 0, 0, 0.06);*/
    /*    padding: 0;*/
    /*    fonts-weight: 600;*/
    /*}*/

</style>
