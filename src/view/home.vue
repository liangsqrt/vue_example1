<template>
    <div>
        <Nav></Nav>
        <section1></section1>
        <section2></section2>
    </div>
</template>

<script>
import Nav from '../components/nav/eindex'
import section2 from "../components/indexbody/section2";
import section1 from "../components/indexbody/section1";


export default {
    name: "home",
    components:{
        Nav,
        section2,
        section1
    }

}
</script>

<style>

</style>
