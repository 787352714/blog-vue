<template>
  <div>
    <div class="top-bar-container">
      <router-link class="logo" to="/home" tag="span">
        <div class="iconfont">&#xe642;</div>
      </router-link>
      <div class="search">
        <span>
          <span class="search-font">搜索</span>
        </span>
        <span class="search-link">
          <span class="search-box"></span>
        </span>
      </div>
      <div class="login">
        <span>登陆</span>
      </div>
    </div>
    <div class="body-container">
      <ul class="left-category">
        <router-link class="category-title" tag="li" to="/home">All about Study:</router-link>
        <hr>
        <router-link class="font" tag="li" to="/font">前端</router-link>
        <hr>
        <li class="python">Python</li>
        <hr>
        <li class="algorithm">算法与数据结构</li>
        <hr>
        <li class="other">其他</li>
      </ul> 
        <router-view class="view"></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #4d4d4d;
  .iconfont {
    font-size: 60px;
  }
  .search {
    display: flex;
    .search-link {
      width: 240px;
      min-width: 178px;
      border-bottom: 1px solid #4d4d4d;
    }
    .search-font {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .login {
    font-size: 10px;
  }
}
.body-container {
  color: #4d4d4d;
  display: flex;
  justify-content: space-between;
  .left-category {
    padding-left: 10px;
    width: 15%;
    .category-title {
      font-size: 25px;
      font-weight: bold;
    }
    li {
      list-style: none;
      text-align: right;
    }
  }
  .view {
    border-top: 10px;
    width: 85%;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.blog-body {
  width: 100%;
  margin-left: 30px;
  margin-top: 18px;
  img {
    width: 100%;
  }
}
</style>
