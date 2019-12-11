<template>
    <div>
        <Nav></Nav>
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from '../components/nav/index2'



export default {
    name: "home",
    components:{
        Nav,

    }

}
</script>

<style>

</style>
