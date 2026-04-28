import type { AxiosExOptions } from "@iw/request-lib";

import { getToken } from "@iw/iwhere-common-auth-library";

/**
 * 请求配置
 */
export const config: AxiosExOptions = {
  /**
   * 获取令牌
   */
  getBearerToken: () => {
    return getToken() || undefined;
  },
  /**
   * 异常处理器
   *
   * @param code 异常码
   * @param error 异常
   */
  errorHandler: (code: number | undefined, error: Error) => {
    console.error(code, error);
  },
};
