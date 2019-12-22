<template>
    <div>
        <div class="container">
            <el-header>
                <my-nav></my-nav>
            </el-header>
            <el-main>
                <router-view>

                </router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </div>
    </div>
</template>

<script>
import myNav from '../components/nav/index'



export default {
    name: "home",
    components:{
         myNav
    }

}
</script>

<style>

</style>
