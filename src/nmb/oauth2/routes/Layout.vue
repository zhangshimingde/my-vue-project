<template>
  <div class="_oauth2">
    <div class="_loading" v-loading="loading" />
    <el-button>q</el-button>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true
    };
  }
};
</script>

<style lang='less'>
* {
  padding: 0;
  margin: 0;
}
.el-loading-mask {
  position: absolute;
  z-index: 2000;
  background-color: #ececec;
}
._oauth2 {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -60px 0 0 -100px;
  width: 150px;
  height: 100px;
  text-align: center;
}
._loading {
  margin-bottom: 20px;
}
</style>
