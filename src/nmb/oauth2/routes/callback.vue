<template>
  <div>
    <p>登录信息处理中</p>
    <p>请稍候</p>
  </div>
</template>
<script>
import rely from "../oauth2rely";
import app from "../../app.js";
export default {
  beforeMount() {
    const authResult = rely.resolveAuthCallback();
    if (authResult && authResult.result) {
      rely.token(authResult.code, this.tokenSuccess, this.error);
    } else {
      this.error(authResult.error);
    }
  },
  methods: {
    error(err) {
      app.showError(err);
    },
    tokenSuccess(access_token) {
      rely.userInfo(access_token, this.userInfoSuccess, this.error);
    },
    userInfoSuccess() {
      rely.returnToRedirectUrl();
    }
  }
};
</script>
