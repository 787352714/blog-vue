<template>
    <div>
        <div class="background">
            <span contenteditable="true" @click="searchHtml">{{this.searchStart}}</span>
            <router-link to="/home" tag="p">回到首页</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchStart:"请输入你想搜索的文章",
            searchend:'',
        }
    },
    methods:{
       searchHtml(){
            this.searchStart=""
       } 
    }
}
</script>
<style lang="scss" scoped>
    .background{
        background-color: #fff;
        background-size: 100%;
        position: fixed;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
        span{
            color: darkgray;
            font-size: 20px;
            position: fixed;
            left: 42%;
            top:45%;
            border-bottom: 2px solid #000;
        };
        p{
            font-size: 20px;
            position: fixed;
            left: 45%;
            top:50%;
            
        }
        
    }

</style>
