<template>
    <div>
        <el-row>
            <div class="headder-top d-lg-flex justify-content-between align-items-center py-3 px-sm-3">
                <!-- logo -->
                <div id="logo">
                    <h1>
                        <a href="index.html">HLZZ</a>
                    </h1>
                </div>
                <nav>
                    <ul class="menu">
                        <li>
                            <a href="index.html" class="active">主页</a>
                        </li>
                        <li>
                            <a href="about.html">团队</a>
                        </li>
                        <li>
                            <a href="service.html">服务</a>
                        </li>
                        <li>
                            <!-- First Tier Drop Down -->
                            <label for="drop-2" class="toggle toogle-2">Dropdown
                                <span class="fa fa-angle-down" aria-hidden="true"></span>
                            </label>
                            <a href="#">成果
                                <span class="fa fa-angle-down" aria-hidden="true"></span>
                            </a>
                            <input type="checkbox" id="drop-2" />
                            <ul>
                                <li>
                                    <a href="gallery.html" class="drop-text">支援填报平台</a>
                                </li>
                                <li>
                                    <a href="error_page.html" class="drop-text">专家面对面</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="contact.html">在线咨询</a>
                        </li>
                    </ul>
                </nav>
                <!-- //nav -->
                <div class="d-flex mt-lg-1 mt-sm-2 mt-3 justify-content-center">
                    <!-- search -->
                    <div class="search-w3layouts">
                        <form action="#" method="post" class="search-bottom-wthree d-flex">
                            <input class="search" type="search" placeholder="Search Here..." required="">
                            <el-button icon="el-icon-search" plain></el-button>
                        </form>
                    </div>
                    <!-- //search -->

                </div>
            </div>
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
