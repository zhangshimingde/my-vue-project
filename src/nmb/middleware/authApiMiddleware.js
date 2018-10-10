import rely from "../oauth2/oauth2rely";
import { modalTip } from "../ModalTip";

const error = err => {
  modalTip.error(err);
};

const actionWidthAuthorization = (action, accessToken) => {
  action.payload.headers = { Authorization: `Bearer ${accessToken}` };
};

export default async action => {
  // 只有api请求才去做验证
  if (action.type.endsWith("Api")) {
    action.payload.data = { ...action.payload };
    // 获取 store 中的tokens
    const tokens = rely.getTokens();
    if (rely.isTokenValid(tokens)) {
      actionWidthAuthorization(action, tokens.access_token);
    } else {
      // 刷新token
      rely.prepareRefresh(
        () => {
          rely.refresh(newAccessToken => {
            actionWidthAuthorization(action, newAccessToken);
          }, error);
        },
        () => {
          const newTokens = rely.getTokens();
          actionWidthAuthorization(action, newTokens.access_token);
        }
      );
    }
  }
};

export const authApiBefore = async () => {
  const opts = new Promise(resovle => {
    let headers = {};
    // 获取 store 中的tokens
    const tokens = rely.getTokens();
    if (rely.isTokenValid(tokens)) {
      headers = { Authorization: `Bearer ${tokens.access_token}` };
    } else {
      // 刷新token
      rely.prepareRefresh(
        () => {
          rely.refresh(newAccessToken => {
            headers = { Authorization: `Bearer ${newAccessToken}` };
          }, error);
        },
        () => {
          const newTokens = rely.getTokens();
          headers = { Authorization: `Bearer ${newTokens.access_token}` };
        }
      );
    }
    resovle({ headers });
  });

  return opts;
};
