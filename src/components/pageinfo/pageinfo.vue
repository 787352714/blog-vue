<template>
  <div>
    <!-- 文章主题头部 -->
    <div class="info-container">
      <div class="top-container">
        <h2>{{info.article_title}}</h2>
        <img :src="info.article_imgurl" alt="头图">
      </div>
      <!-- 文章主题 -->
      <div class="info-body" v-html = info.article_contain>
        
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      info: {}
    };
  },
  mounted() {
    this.getinfo();
  },
  methods: {
    getinfo() {
      axios.get("api/article/" + this.id + "/?format=json").then(result => {
        if (result.status === 200) {
          this.info = result.data;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.info-container {
  margin-left: 5px;
  width: 85%;
  height: 100%;
  .top-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
      width: 100%;
      max-height: 450px;
    }
  }
  .info-body {
    text-align: left;
    margin: 5px 5px;
  }
}
</style>
