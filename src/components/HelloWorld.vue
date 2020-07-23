<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <banner-ad1 :type="'aaa'"></banner-ad1>
    <banner-ad2></banner-ad2>
    <banner-ad3></banner-ad3>
  </div>
</template>

<script>
import { BannerAd1, BannerAd2, BannerAd3 } from "BannerAd";
// import components from "BannerAd";
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    mounted(){
        console.log(BannerAd1)
        console.log(BannerAd2)
        console.log(BannerAd3)
        // console.log(components)
    },
    components:{
        BannerAd1,
        BannerAd2,
        BannerAd3,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
