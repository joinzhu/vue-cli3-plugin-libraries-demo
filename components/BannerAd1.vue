<template>
    <div class="bannerAd">
        <h2>THIS IS BANNERAD---1</h2>
        <p>{{type}}</p>
    </div>
</template>

<script>
    export default {
        props: ['type'],
        mounted(){
            console.log(this)
        }
    }
</script>

<style lang="css" scoped>
.bannerAd{
    width: 100%;
    height: 60px;
    background-color: blue;
    color: white;
    text-align: center;
}
</style>