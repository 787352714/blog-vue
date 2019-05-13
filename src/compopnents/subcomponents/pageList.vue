<template>
  <div class="pagelist-container">
    <div class="list-container">
      <div class="img-container">
        <img src="../../img/1.jpg">
        <p>文章的名字放在这里</p>
      </div>
      <div class="simple-articel">
        <p>文章的简介放在这里</p>
      </div>
      <div class="card-foot">
        <span class="datatime">2019-1-1</span>
        <span class="tag">vue，基础，框架</span>
      </div>
    </div>
    <div class="list-container">
      <div class="img-container">
        <img src="../../img/1.jpg">
        <p>文章的名字放在这里</p>
      </div>
      <div class="simple-articel">
        <p>文章的简介放在这里</p>
      </div>
      <div class="card-foot">
        <span class="datatime">2019-1-1</span>
        <span class="tag">vue，基础，框架</span>
      </div>
    </div>
    <div class="list-container">
      <div class="img-container">
        <img src="../../img/1.jpg">
        <p>文章的名字放在这里</p>
      </div>
      <div class="simple-articel">
        <p>文章的简介放在这里</p>
      </div>
      <div class="card-foot">
        <span class="datatime">2019-1-1</span>
        <span class="tag">vue，基础，框架</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.pagelist-container{
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
