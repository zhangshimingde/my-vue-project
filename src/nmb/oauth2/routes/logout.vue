<template>
    <div><p>登出处理中</p><p>请稍候</p></div>
</template>
<script>
import rely from "../oauth2rely.js";
export default {
  mounted() {
    rely.doLogout();
  }
};
</script>
