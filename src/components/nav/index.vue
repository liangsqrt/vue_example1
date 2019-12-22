<template>
    <div class="headerWrapper">
        <header class="header">
            <el-container class="container">
                <h1 class="logo">
                </h1>
                <ul class="nav">
                    <li class="nav-item nav-algolia-search">
                        <div class="el-autocomplete">
                            <el-input v-model="select">

                            </el-input>
                        </div>
                    </li>
                    <li class="nav-item">

                    </li>
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                </ul>
            </el-container>
        </header>
    </div>
</template>

<script>
    export default {
        name: "myNav",
        data(){
            return {
                select: ""
            }
        }
    }
</script>




<style scoped   type="text/scss" lang="scss">
    .logo{
        line-height: 80px;
    }
    .headerWrapper .container {
        padding: 0;
    }

    header {
        display: block;
    }

    .container .nav{
        align-content: center;
    }

    .header .container{
        height: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid #dcdfe6;
    }


    .headerWrapper {
        position: fixed;
        width: 100%;
        height: 80px;
        left: 0;
        top: 0;
        z-index: 1500;
    }


    .header{
        height: 80px;
        background-color: #00ccff;
        /*width: 100%;*/
        color: #ffffff;
        top: 0;
        left: 0;
        position: relative;
        line-height: 80px;
        z-index: 100
    }


    .header .nav-item{
        display:inline;
    }
    .header .nav-item.nav-algolia-search{
        cursor: default;
        list-style: none;
    }
</style>
