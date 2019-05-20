<template>
  <div class="pagelist-container">
    <router-link
      tag="div"
      :to="path+item.id"
      class="list-container"
      v-for="item in list"
      :key="item.id"
      v-show="item.article_tag==name"
    >
      <div class="img-container" >
        <img :src="item.article_imgurl">
        <p>{{item.article_title}}</p>
      </div>
      <div class="simple-articel">
        <p>{{item.article_header}}</p>
      </div>
      <div class="card-foot">
        <span class="datatime">{{item.article_time}}</span>
        <span class="tag">{{item.article_tag}}</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["name"],
  data() {
    return {
      path: "/" + this.name + "/pageinfo/",
      list:{},
    };
  },
  beforeMount() {
    this.getlist();
  },
  methods: {
    getlist() {
      axios.get("api/article/?format=json").then(result => {
        if (result.status === 200) {
          this.list = result.data;
        }
      });
    }
  },
};
</script>
<style lang="scss" scoped>
.pagelist-container {
  width: 65%;
}
.list-container {
  width: 100%;
  height: 430px;
  border: 1px solid #000000af;
  box-shadow: 3px 3px 2px #a9a9a942;
  margin-bottom: 10px;
  .img-container {
    height: 75%;
    img {
      height: 100%;
      width: 100%;
    }
    p {
      font-size: 18px;
      position: relative;
      bottom: 70px;
      color: aliceblue;
    }
  }
  .simple-articel {
    height: 15%;
    text-align: center;
    display: flex;
    align-items: center;
    margin: 0 5px;
    border-bottom: 1px solid #000000af;
    p {
      margin: 0;
    }
  }
  .card-foot {
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 5px;
    .tag {
      color: cornflowerblue;
    }
  }
}
</style>
