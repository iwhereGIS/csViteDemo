import type {
  AddAccountDTO,
  AddApiDTO,
  AddCompanyDTO,
  AddDepartmentDTO,
  AddResourceDTO,
  AddRoleDTO,
  AddSecretDTO,
  ApiBindDTO,
  ApiBindSearchDTO,
  ApiListDTO,
  ApiResourceBindDTO,
  BindWechatMiniAppPhoneDTO,
  BindWechatUserInfoDTO,
  CompanyAddUsersDTO,
  CompanyPageDTO,
  CompanyRemoveUsersDTO,
  DeleteApiDTO,
  DeleteBindDTO,
  DeleteSecretDTO,
  DepartmentAddUsersDTO,
  DepartmentRemoveUsersDTO,
  EditAccountDTO,
  EditApiDTO,
  EditCompanyDTO,
  EditDepartmentDTO,
  EditResourceDTO,
  EditRoleDTO,
  EditSecretDTO,
  GetDepartmentDTO,
  MenuDTO,
  OpenApiDTO,
  PageApiBindDTO,
  PageCaptchaDTO,
  PageSecretDTO,
  PageSecretRoleBindDTO,
  RAccountVO,
  RApiCheckStatus,
  RCompanyVO,
  RDepartmentVO,
  RImageCaptchaVO,
  RListApiBindVO,
  RListApiResourceVO,
  RListApiTagVO,
  RListDepartmentUserDetailVO,
  RListDepartmentVO,
  RListString,
  RListTreeNodeVO,
  RListUserCompanyVO,
  RLoginUserInfoVO,
  RLoginVO,
  RLogoutVO,
  RLong,
  ROAuth2AccessTokenVO,
  ROAuth2AuthorizationCodeRequestVO,
  RObject,
  RPageVOCaptchaVO,
  RPageVOCompanyUserVO,
  RPageVOCompanyVO,
  RPageVODepartmentUserVO,
  RPageVOLoginInfoVO,
  RPageVORoleBindVO,
  RPageVORoleCompanyVO,
  RPageVORoleDepartmentVO,
  RPageVORoleUserVO,
  RPageVORoleVO,
  RPageVOSecretVO,
  RPageVOUserDetailVO,
  RResourceVO,
  RRoleVO,
  RSecretDetailVO,
  RShortTokenVO,
  RString,
  RUserVO,
  RefRoleCompaniesDTO,
  RefRoleDepartmentsDTO,
  RefRoleResourcesDTO,
  RefRoleUsersDTO,
  ResetPasswordDTO,
  RoleCompanyPageDTO,
  RoleDepartmentPageDTO,
  RolePageDTO,
  RoleUserPageDTO,
  SecretBindDTO,
  SetCompanyEnabledDTO,
  SetDepartmentEnabledDTO,
  SetEnabledDTO,
  SetPasswordDTO,
  SetRoleEnabledDTO,
  SetUserEnabledDTO,
  UserInfoEditDTO,
} from "./types";
import { env } from "../../env";
import { config } from "../../config";
import { type AxiosExRequestOptions, createHttp } from "@iw/request-lib";
/**
 * http
 */
const http = createHttp({
  ...config,
  baseURL: env.auth,
});
/**
 * @description IWhere 认证授权系统
 * @version 1.1.3
 */
export const auth = {
  user: {
    userInfo: {
      edit: {
        /**
         * @description 编辑用户信息
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: UserInfoEditDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RObject> => {
          return http.postJson({
            url: `/user/userInfo/edit`,
            ...request,
          });
        },
      },
      /**
       * @description 获取用户信息
       */
      get: (
        request?: {
          params?: {
            /**
             * @description 用户ID
             */
            userId?: number;
            /**
             * @description 公司ID
             */
            companyId?: number;
          };
        } & Omit<AxiosExRequestOptions, "params">,
      ): Promise<RUserVO> => {
        return http.get({
          url: `/user/userInfo`,
          ...request,
        });
      },
    },
    social: {
      wechat: {
        miniApp: {
          bindUserInfo: {
            /**
             * @description 绑定微信用户信息
             */
            post: (
              request: {
                /**
                 * @description 用户信息编辑请求
                 */
                data: BindWechatUserInfoDTO;
              } & Omit<AxiosExRequestOptions, "data">,
            ): Promise<RString> => {
              return http.postJson({
                url: `/user/social/wechat/miniApp/bindUserInfo`,
                ...request,
              });
            },
          },
          bindPhone: {
            /**
             * @description 绑定微信手机号
             */
            post: (
              request: {
                /**
                 * @description 用户信息编辑请求
                 */
                data: BindWechatMiniAppPhoneDTO;
              } & Omit<AxiosExRequestOptions, "data">,
            ): Promise<RString> => {
              return http.postJson({
                url: `/user/social/wechat/miniApp/bindPhone`,
                ...request,
              });
            },
          },
        },
      },
    },
    resetPassword: {
      /**
       * @description 重置密码
       */
      post: (
        request: {
          /**
           * @description 用户信息编辑请求
           */
          data: ResetPasswordDTO;
        } & Omit<AxiosExRequestOptions, "data">,
      ): Promise<RObject> => {
        return http.postJson({
          url: `/user/resetPassword`,
          ...request,
        });
      },
    },
    bindCompany: {
      /**
       * @description 绑定用户公司
       */
      post: (
        request: {
          params: {
            /**
             * @description 用户ID
             */
            userId?: number;
            /**
             * @description 公司ID
             */
            companyId: number;
          };
        } & Omit<AxiosExRequestOptions, "params">,
      ): Promise<RObject> => {
        return http.post({
          url: `/user/bindCompany`,
          ...request,
        });
      },
    },
    roles: {
      /**
       * @description 获取角色列表
       */
      get: (request?: {} & AxiosExRequestOptions): Promise<RListString> => {
        return http.get({
          url: `/user/roles`,
          ...request,
        });
      },
    },
    permissions: {
      /**
       * @description 获取权限列表
       */
      get: (request?: {} & AxiosExRequestOptions): Promise<RListString> => {
        return http.get({
          url: `/user/permissions`,
          ...request,
        });
      },
    },
    company: {
      list: {
        /**
         * @description 公司列表
         */
        get: (
          request?: {} & AxiosExRequestOptions,
        ): Promise<RListUserCompanyVO> => {
          return http.get({
            url: `/user/company/list`,
            ...request,
          });
        },
      },
    },
  },
  oauth2: {
    token: {
      system: {
        /**
         * @description OAuth2 Authorization code获取内部令牌
         */
        post: (
          request: {
            params: {
              /**
               * @description 客户端ID
               */
              client_id: string;
              /**
               * @description 回调地址
               */
              redirect_uri?: string;
              /**
               * @description Authorization code
               */
              code: string;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<ROAuth2AccessTokenVO> => {
          return http.post({
            url: `/oauth2/token/system`,
            ...request,
          });
        },
      },
    },
    authorizationCode: {
      /**
       * @description 生成Authorization Code
       */
      post: (
        request: {
          params: {
            /**
             * @description 客户端ID
             */
            client_id: string;
            /**
             * @description 回调地址
             */
            redirect_uri?: string;
            /**
             * @description 认证时附加网页hash，方便vue项目定位到具体页面
             */
            hash?: string;
            /**
             * @description 客户端状态，用于客户端验证来源
             */
            state?: string;
          };
        } & Omit<AxiosExRequestOptions, "params">,
      ): Promise<RString> => {
        return http.post({
          url: `/oauth2/authorizationCode`,
          ...request,
        });
      },
    },
    authorize: {
      /**
       * @description OAuth2 用户授权码模式，获取授权码
       */
      get: (
        request: {
          params: {
            /**
             * @description 授权类型，固定为code
             */
            response_type: string;
            /**
             * @description 客户端ID
             */
            client_id: string;
            /**
             * @description 授权后重定向地址
             */
            redirect_uri?: string;
            /**
             * @description 客户端状态，用于客户端验证来源
             */
            state?: string;
            /**
             * @description 申请的授权范围
             */
            scope?: string;
          };
          headers?: {
            "IW-Authorization-Code"?: string;
          };
        } & Omit<AxiosExRequestOptions, "params">,
      ): Promise<ROAuth2AuthorizationCodeRequestVO> => {
        return http.get({
          url: `/oauth2/authorize`,
          ...request,
        });
      },
    },
  },
  manage: {
    secret: {
      setEnabled: {
        /**
         * @description 设置启用状态
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: SetEnabledDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/secret/setEnabled`,
            ...request,
          });
        },
      },
      getSecretPage: {
        /**
         * @description 获取密钥列表
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: PageSecretDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RPageVOSecretVO> => {
          return http.postJson({
            url: `/manage/secret/getSecretPage`,
            ...request,
          });
        },
      },
      getSecretBindPage: {
        /**
         * @description 获取密钥角色绑定列表
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: PageSecretRoleBindDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RPageVORoleBindVO> => {
          return http.postJson({
            url: `/manage/secret/getSecretBindPage`,
            ...request,
          });
        },
      },
      edit: {
        /**
         * @description 编辑密钥
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: EditSecretDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/secret/edit`,
            ...request,
          });
        },
      },
      delete: {
        /**
         * @description 删除密钥
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: DeleteSecretDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/secret/delete`,
            ...request,
          });
        },
      },
      deleteBind: {
        /**
         * @description 取消绑定
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: DeleteBindDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/secret/deleteBind`,
            ...request,
          });
        },
      },
      bind: {
        /**
         * @description 绑定密钥
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: SecretBindDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/secret/bind`,
            ...request,
          });
        },
      },
      add: {
        /**
         * @description 新增密钥
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: AddSecretDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/secret/add`,
            ...request,
          });
        },
      },
      detail: {
        /**
         * @description 密钥详情
         */
        get: (
          request: {
            params: {
              /**
               * @description 密钥id
               */
              id: number;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RSecretDetailVO> => {
          return http.get({
            url: `/manage/secret/detail`,
            ...request,
          });
        },
      },
    },
    role: {
      setEnabled: {
        /**
         * @description 设置启用状态
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: SetRoleEnabledDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RObject> => {
          return http.postJson({
            url: `/manage/role/setEnabled`,
            ...request,
          });
        },
      },
      refRoleUsers: {
        /**
         * @description 关联用户角色
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: RefRoleUsersDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RObject> => {
          return http.postJson({
            url: `/manage/role/refRoleUsers`,
            ...request,
          });
        },
      },
      refRoleResources: {
        /**
         * @description 角色关联资源菜单
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: RefRoleResourcesDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RObject> => {
          return http.postJson({
            url: `/manage/role/refRoleResources`,
            ...request,
          });
        },
      },
      refRoleDepartments: {
        /**
         * @description 关联部门角色
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: RefRoleDepartmentsDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RObject> => {
          return http.postJson({
            url: `/manage/role/refRoleDepartments`,
            ...request,
          });
        },
      },
      refRoleCompanies: {
        /**
         * @description 关联公司角色
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: RefRoleCompaniesDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RObject> => {
          return http.postJson({
            url: `/manage/role/refRoleCompanies`,
            ...request,
          });
        },
      },
      getRoleUsers: {
        /**
         * @description 分页获取角色关联的用户
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: RoleUserPageDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RPageVORoleUserVO> => {
          return http.postJson({
            url: `/manage/role/getRoleUsers`,
            ...request,
          });
        },
      },
      getRolePage: {
        /**
         * @description 获取角色列表
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: RolePageDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RPageVORoleVO> => {
          return http.postJson({
            url: `/manage/role/getRolePage`,
            ...request,
          });
        },
      },
      getRoleDepartments: {
        /**
         * @description 分页获取部门角色
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: RoleDepartmentPageDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RPageVORoleDepartmentVO> => {
          return http.postJson({
            url: `/manage/role/getRoleDepartments`,
            ...request,
          });
        },
      },
      getRoleCompanies: {
        /**
         * @description 分页获取角色关联公司
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: RoleCompanyPageDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RPageVORoleCompanyVO> => {
          return http.postJson({
            url: `/manage/role/getRoleCompanies`,
            ...request,
          });
        },
      },
      getApiBindList: {
        /**
         * @description 获取角色绑定接口列表
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: ApiBindSearchDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RListApiBindVO> => {
          return http.postJson({
            url: `/manage/role/getApiBindList`,
            ...request,
          });
        },
      },
      edit: {
        /**
         * @description 编辑角色
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: EditRoleDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RObject> => {
          return http.postJson({
            url: `/manage/role/edit`,
            ...request,
          });
        },
      },
      apiBind: {
        /**
         * @description 绑定角色API
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: ApiBindDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RObject> => {
          return http.postJson({
            url: `/manage/role/apiBind`,
            ...request,
          });
        },
      },
      add: {
        /**
         * @description 新增角色
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: AddRoleDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RObject> => {
          return http.postJson({
            url: `/manage/role/add`,
            ...request,
          });
        },
      },
      getRoleResources: {
        /**
         * @description 获取角色应用资源关联列表
         */
        get: (
          request: {
            params: {
              /**
               * @description 角色id
               */
              roleId: number;
              /**
               * @description 应用id
               */
              platformId: number;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RListTreeNodeVO> => {
          return http.get({
            url: `/manage/role/getRoleResources`,
            ...request,
          });
        },
      },
      detail: {
        /**
         * @description 角色详情
         */
        get: (
          request: {
            params: {
              /**
               * @description 角色id
               */
              id: number;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RRoleVO> => {
          return http.get({
            url: `/manage/role/detail`,
            ...request,
          });
        },
      },
      delete: {
        /**
         * @description 删除角色
         */
        delete: (
          request: {
            params: {
              /**
               * @description 删除角色
               */
              id: number;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RObject> => {
          return http.delete({
            url: `/manage/role/delete`,
            ...request,
          });
        },
      },
      deleteApiBind: {
        /**
         * @description 角色接口解绑
         */
        delete: (
          request: {
            params: {
              /**
               * @description 角色ID
               */
              roleId: number;
              /**
               * @description 接口ID
               */
              apiId: number;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RObject> => {
          return http.delete({
            url: `/manage/role/deleteApiBind`,
            ...request,
          });
        },
      },
    },
    resource: {
      setEnabled: {
        /**
         * @description 设置启用状态
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: SetEnabledDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/resource/setEnabled`,
            ...request,
          });
        },
      },
      getResourceTree: {
        /**
         * @description 获取资源树
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: MenuDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RListTreeNodeVO> => {
          return http.postJson({
            url: `/manage/resource/getResourceTree`,
            ...request,
          });
        },
      },
      getApiBindList: {
        /**
         * @description 获取资源绑定API列表
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: PageApiBindDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RListApiBindVO> => {
          return http.postJson({
            url: `/manage/resource/getApiBindList`,
            ...request,
          });
        },
      },
      edit: {
        /**
         * @description 编辑资源
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: EditResourceDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/resource/edit`,
            ...request,
          });
        },
      },
      deleteBind: {
        /**
         * @description 资源API解绑
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: ApiResourceBindDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/resource/deleteBind`,
            ...request,
          });
        },
      },
      apiResourceBind: {
        /**
         * @description 绑定资源API
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: ApiResourceBindDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/resource/apiResourceBind`,
            ...request,
          });
        },
      },
      add: {
        /**
         * @description 新增资源
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: AddResourceDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RLong> => {
          return http.postJson({
            url: `/manage/resource/add`,
            ...request,
          });
        },
      },
      refreshTreeStructure: {
        /**
         * @description 刷新资源树结构
         */
        get: (request?: {} & AxiosExRequestOptions): Promise<RObject> => {
          return http.get({
            url: `/manage/resource/refreshTreeStructure`,
            ...request,
          });
        },
      },
      detail: {
        id: {
          /**
           * @description 资源详情
           */
          get: (
            request: {
              paths: {
                /**
                 * @description 资源id
                 */
                id: number;
              };
            } & AxiosExRequestOptions,
          ): Promise<RResourceVO> => {
            return http.get({
              url: `/manage/resource/detail/${request.paths.id}`,
              ...request,
            });
          },
        },
      },
      delete: {
        /**
         * @description 删除资源
         */
        delete: (
          request: {
            params: {
              /**
               * @description 删除资源
               */
              id: number;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RString> => {
          return http.delete({
            url: `/manage/resource/delete`,
            ...request,
          });
        },
      },
    },
    department: {
      setEnabled: {
        /**
         * @description 设置部门启用状态
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: SetDepartmentEnabledDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/department/setEnabled`,
            ...request,
          });
        },
      },
      removeUsers: {
        /**
         * @description 批量移除用户
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: DepartmentRemoveUsersDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RObject> => {
          return http.postJson({
            url: `/manage/department/removeUsers`,
            ...request,
          });
        },
      },
      getDepartments: {
        /**
         * @description 获取部门列表
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: GetDepartmentDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RListDepartmentVO> => {
          return http.postJson({
            url: `/manage/department/getDepartments`,
            ...request,
          });
        },
      },
      edit: {
        /**
         * @description 编辑部门
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: EditDepartmentDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/department/edit`,
            ...request,
          });
        },
      },
      add: {
        /**
         * @description 新增部门
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: AddDepartmentDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/department/add`,
            ...request,
          });
        },
      },
      addUsers: {
        /**
         * @description 批量添加用户
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: DepartmentAddUsersDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RObject> => {
          return http.postJson({
            url: `/manage/department/addUsers`,
            ...request,
          });
        },
      },
      users: {
        /**
         * @description 获取部门用户列表
         */
        get: (
          request: {
            params: {
              /**
               * @description 部门id
               */
              departmentId: number;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RListDepartmentUserDetailVO> => {
          return http.get({
            url: `/manage/department/users`,
            ...request,
          });
        },
      },
      refreshTreeStructure: {
        /**
         * @description 刷新部门树结构
         */
        get: (request?: {} & AxiosExRequestOptions): Promise<RObject> => {
          return http.get({
            url: `/manage/department/refreshTreeStructure`,
            ...request,
          });
        },
      },
      getDeptTree: {
        /**
         * @description 获取指定公司的部门tree
         */
        get: (
          request: {
            params: {
              /**
               * @description 公司id
               */
              companyId: number;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RListTreeNodeVO> => {
          return http.get({
            url: `/manage/department/getDeptTree`,
            ...request,
          });
        },
      },
      detail: {
        /**
         * @description 获取部门详情
         */
        get: (
          request: {
            params: {
              /**
               * @description 部门id
               */
              id: number;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RDepartmentVO> => {
          return http.get({
            url: `/manage/department/detail`,
            ...request,
          });
        },
      },
      departmentUsers: {
        /**
         * @description 分页获取部门用户列表
         */
        get: (
          request: {
            params: {
              /**
               * @description 部门ID
               */
              departmentId: string;
              /**
               * @description 用户名
               */
              username?: string;
              /**
               * @description 是否启用
               */
              enabled?: string;
              /**
               * @description 当前页码
               */
              page: string;
              /**
               * @description 分页大小
               */
              pageSize: string;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RPageVODepartmentUserVO> => {
          return http.get({
            url: `/manage/department/departmentUsers`,
            ...request,
          });
        },
      },
      delete: {
        /**
         * @description 删除部门
         */
        delete: (
          request: {
            params: {
              /**
               * @description 部门id
               */
              id: number;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RString> => {
          return http.delete({
            url: `/manage/department/delete`,
            ...request,
          });
        },
      },
    },
    company: {
      setEnabled: {
        /**
         * @description 设置公司启用状态
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: SetCompanyEnabledDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/company/setEnabled`,
            ...request,
          });
        },
      },
      removeUsers: {
        /**
         * @description 批量移除用户
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: CompanyRemoveUsersDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RObject> => {
          return http.postJson({
            url: `/manage/company/removeUsers`,
            ...request,
          });
        },
      },
      getCompanyPage: {
        /**
         * @description 分页获取公司列表
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: CompanyPageDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RPageVOCompanyVO> => {
          return http.postJson({
            url: `/manage/company/getCompanyPage`,
            ...request,
          });
        },
      },
      edit: {
        /**
         * @description 编辑公司
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: EditCompanyDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/company/edit`,
            ...request,
          });
        },
      },
      add: {
        /**
         * @description 新增公司
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: AddCompanyDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RLong> => {
          return http.postJson({
            url: `/manage/company/add`,
            ...request,
          });
        },
      },
      addUsers: {
        /**
         * @description 批量添加用户
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: CompanyAddUsersDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RObject> => {
          return http.postJson({
            url: `/manage/company/addUsers`,
            ...request,
          });
        },
      },
      getCompanyMenu: {
        /**
         * @description 获取公司menu
         */
        get: (
          request?: {
            params?: {
              companyName?: string;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RListTreeNodeVO> => {
          return http.get({
            url: `/manage/company/getCompanyMenu`,
            ...request,
          });
        },
      },
      detail: {
        /**
         * @description 获取公司详情
         */
        get: (
          request: {
            params: {
              /**
               * @description 公司id
               */
              id: number;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RCompanyVO> => {
          return http.get({
            url: `/manage/company/detail`,
            ...request,
          });
        },
      },
      detailByUscc: {
        /**
         * @description 统一社会信用代码获取公司详情
         */
        get: (
          request: {
            params: {
              /**
               * @description 统一社会信用代码
               */
              uscc: string;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RCompanyVO> => {
          return http.get({
            url: `/manage/company/detailByUscc`,
            ...request,
          });
        },
      },
      companyUsers: {
        /**
         * @description 分页获取公司用户列表
         */
        get: (
          request: {
            params: {
              /**
               * @description 公司ID
               */
              companyId: string;
              /**
               * @description 用户名
               */
              username?: string;
              /**
               * @description 手机号
               */
              phone?: string;
              /**
               * @description 姓名
               */
              realName?: string;
              /**
               * @description 是否启用
               */
              enabled?: string;
              /**
               * @description 当前页码
               */
              page: string;
              /**
               * @description 分页大小
               */
              pageSize: string;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RPageVOCompanyUserVO> => {
          return http.get({
            url: `/manage/company/companyUsers`,
            ...request,
          });
        },
      },
      delete: {
        /**
         * @description 删除公司
         */
        delete: (
          request: {
            params: {
              /**
               * @description 公司id
               */
              id: number;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RString> => {
          return http.delete({
            url: `/manage/company/delete`,
            ...request,
          });
        },
      },
    },
    api: {
      syncService: {
        /**
         * @description 同步微服务接口
         */
        post: (
          request: {
            params: {
              serviceId: string;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RString> => {
          return http.post({
            url: `/manage/api/syncService`,
            ...request,
          });
        },
      },
      openApi: {
        /**
         * @description 设置开放状态
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: OpenApiDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/api/openApi`,
            ...request,
          });
        },
      },
      getApiList: {
        /**
         * @description 获取接口应用关联列表
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: ApiListDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RListApiTagVO> => {
          return http.postJson({
            url: `/manage/api/getApiList`,
            ...request,
          });
        },
      },
      editApi: {
        /**
         * @description 编辑接口
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: EditApiDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/api/editApi`,
            ...request,
          });
        },
      },
      deleteApi: {
        /**
         * @description 删除接口
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: DeleteApiDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/api/deleteApi`,
            ...request,
          });
        },
      },
      addApi: {
        /**
         * @description 新增接口
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: AddApiDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RString> => {
          return http.postJson({
            url: `/manage/api/addApi`,
            ...request,
          });
        },
      },
    },
    account: {
      uploadAvatar: {
        /**
         * @description 上传头像
         */
        post: (
          request: {
            params: {
              /**
               * @description 文件
               */
              file: any;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RString> => {
          return http.post({
            url: `/manage/account/uploadAvatar`,
            ...request,
          });
        },
      },
      setPassword: {
        /**
         * @description 设置用户密码
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: SetPasswordDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RObject> => {
          return http.postJson({
            url: `/manage/account/setPassword`,
            ...request,
          });
        },
      },
      setEnabled: {
        /**
         * @description 设置用户启用状态
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: SetUserEnabledDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RObject> => {
          return http.postJson({
            url: `/manage/account/setEnabled`,
            ...request,
          });
        },
      },
      edit: {
        /**
         * @description 编辑用户
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: EditAccountDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RObject> => {
          return http.postJson({
            url: `/manage/account/edit`,
            ...request,
          });
        },
      },
      add: {
        /**
         * @description 新增用户
         */
        post: (
          request: {
            /**
             * @description 用户信息编辑请求
             */
            data: AddAccountDTO;
          } & Omit<AxiosExRequestOptions, "data">,
        ): Promise<RObject> => {
          return http.postJson({
            url: `/manage/account/add`,
            ...request,
          });
        },
      },
      users: {
        /**
         * @description 分页查询用户列表
         */
        get: (
          request: {
            params: {
              /**
               * @description 用户名
               */
              username?: string;
              /**
               * @description 手机号
               */
              phone?: string;
              /**
               * @description 姓名
               */
              realName?: string;
              /**
               * @description 是否启用
               */
              enabled?: string;
              /**
               * @description 开始时间
               */
              startTime?: string;
              /**
               * @description 结束时间
               */
              endTime?: string;
              /**
               * @description 当前页码
               */
              page: string;
              /**
               * @description 分页大小
               */
              pageSize: string;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RPageVOUserDetailVO> => {
          return http.get({
            url: `/manage/account/users`,
            ...request,
          });
        },
      },
      detail: {
        /**
         * @description 用户详情
         */
        get: (
          request: {
            params: {
              /**
               * @description 用户id
               */
              id: number;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RAccountVO> => {
          return http.get({
            url: `/manage/account/detail`,
            ...request,
          });
        },
      },
      delete: {
        /**
         * @description 删除用户
         */
        delete: (
          request: {
            params: {
              /**
               * @description 用户id
               */
              id: number;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RObject> => {
          return http.delete({
            url: `/manage/account/delete`,
            ...request,
          });
        },
      },
    },
    login: {
      info: {
        online: {
          list: {
            /**
             * @description 获取在线用户列表
             */
            get: (
              request: {
                params: {
                  /**
                   * @description 登录地址
                   */
                  addr?: string;
                  /**
                   * @description 用户名称
                   */
                  username?: string;
                  /**
                   * @description 登录状态
                   */
                  status?: string;
                  /**
                   * @description 开始时间
                   */
                  startTime?: string;
                  /**
                   * @description 结束时间
                   */
                  endTime?: string;
                  /**
                   * @description 当前页码
                   */
                  page: string;
                  /**
                   * @description 分页大小
                   */
                  pageSize: string;
                };
              } & Omit<AxiosExRequestOptions, "params">,
            ): Promise<RPageVOLoginInfoVO> => {
              return http.get({
                url: `/manage/login/info/online/list`,
                ...request,
              });
            },
          },
        },
        list: {
          /**
           * @description 获取登录日志列表
           */
          get: (
            request: {
              params: {
                /**
                 * @description 登录地址
                 */
                addr?: string;
                /**
                 * @description 用户名称
                 */
                username?: string;
                /**
                 * @description 登录状态
                 */
                status?: string;
                /**
                 * @description 开始时间
                 */
                startTime?: string;
                /**
                 * @description 结束时间
                 */
                endTime?: string;
                /**
                 * @description 当前页码
                 */
                page: string;
                /**
                 * @description 分页大小
                 */
                pageSize: string;
              };
            } & Omit<AxiosExRequestOptions, "params">,
          ): Promise<RPageVOLoginInfoVO> => {
            return http.get({
              url: `/manage/login/info/list`,
              ...request,
            });
          },
        },
      },
    },
  },
  logout: {
    /**
     * @description 登出
     */
    get: (request?: {} & AxiosExRequestOptions): Promise<RString> => {
      return http.get({
        url: `/logout`,
        ...request,
      });
    },

    /**
     * @description 登出
     */
    post: (request?: {} & AxiosExRequestOptions): Promise<RLogoutVO> => {
      return http.post({
        url: `/logout`,
        ...request,
      });
    },
  },
  login: {
    usernamePassword: {
      captcha: {
        /**
         * @description 用户名密码+验证码登录
         */
        post: (
          request: {
            params: {
              /**
               * @description 用户名
               */
              username: string;
              /**
               * @description 密码
               */
              password: string;
              /**
               * @description 验证码ID
               */
              captchaId: string;
              /**
               * @description 验证码
               */
              captchaCode: string;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RLoginVO> => {
          return http.post({
            url: `/login/usernamePassword/captcha`,
            ...request,
          });
        },
      },
    },
    social: {
      wechat: {
        miniApp: {
          /**
           * @description 社会化登录(微信小程序)
           */
          post: (
            request: {
              params: {
                /**
                 * @description 微信小程序appId
                 */
                appId: string;
                /**
                 * @description 微信小程序Code
                 */
                jsCode: string;
              };
            } & Omit<AxiosExRequestOptions, "params">,
          ): Promise<RLoginVO> => {
            return http.post({
              url: `/login/social/wechat/miniApp`,
              ...request,
            });
          },

          phone: {
            /**
             * @description 社会化登录(微信小程序手机号)
             */
            post: (
              request: {
                params: {
                  /**
                   * @description 微信小程序appId
                   */
                  appId: string;
                  /**
                   * @description 微信小程序手机号组件Code
                   */
                  code: string;
                };
              } & Omit<AxiosExRequestOptions, "params">,
            ): Promise<RLoginVO> => {
              return http.post({
                url: `/login/social/wechat/miniApp/phone`,
                ...request,
              });
            },
          },
        },
      },
    },
    smsCaptcha: {
      /**
       * @description 手机验证码登录
       */
      post: (
        request: {
          params: {
            /**
             * @description 手机号码
             */
            phone: string;
            /**
             * @description 手机验证码
             */
            captcha: string;
          };
        } & Omit<AxiosExRequestOptions, "params">,
      ): Promise<RLoginVO> => {
        return http.post({
          url: `/login/smsCaptcha`,
          ...request,
        });
      },
    },
    getCaptchaList: {
      /**
       * @description 获取短信验证码列表
       */
      post: (
        request: {
          /**
           * @description 用户信息编辑请求
           */
          data: PageCaptchaDTO;
        } & Omit<AxiosExRequestOptions, "data">,
      ): Promise<RPageVOCaptchaVO> => {
        return http.postJson({
          url: `/login/getCaptchaList`,
          ...request,
        });
      },
    },
    company: {
      /**
       * @description 公司登录
       */
      post: (
        request: {
          params: {
            /**
             * @description 公司ID
             */
            companyId: string;
          };
        } & Omit<AxiosExRequestOptions, "params">,
      ): Promise<RLoginVO> => {
        return http.post({
          url: `/login/company`,
          ...request,
        });
      },
    },
    captcha: {
      sms: {
        /**
         * @description 获取短信验证码
         */
        post: (
          request: {
            params: {
              /**
               * @description 手机号码
               */
              phone: string;
              /**
               * @description 图片验证码ID
               */
              captchaId: string;
              /**
               * @description 图片验证码Code
               */
              captchaCode: string;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RString> => {
          return http.post({
            url: `/login/captcha/sms`,
            ...request,
          });
        },
      },
      image: {
        /**
         * @description 获取图片验证码
         */
        get: (
          request?: {
            params?: {
              /**
               * @description 验证码图片宽度
               */
              width?: string;
              /**
               * @description 验证码图片高度
               */
              height?: string;
              /**
               * @description 背景图片颜色
               */
              backgroundColor?: string;
            };
          } & Omit<AxiosExRequestOptions, "params">,
        ): Promise<RImageCaptchaVO> => {
          return http.get({
            url: `/login/captcha/image`,
            ...request,
          });
        },
      },
    },
    userInfo: {
      /**
       * @description 获取登录用户信息
       */
      get: (
        request: {
          params: {
            /**
             * @description 用户ID
             */
            userId: number;
            /**
             * @description 公司ID
             */
            companyId?: number;
          };
        } & Omit<AxiosExRequestOptions, "params">,
      ): Promise<RLoginUserInfoVO> => {
        return http.get({
          url: `/login/userInfo`,
          ...request,
        });
      },
    },
  },
  access: {
    check: {
      /**
       * @description 检查是否有权限
       */
      post: (
        request: {
          params: {
            /**
             * @description 令牌
             */
            token?: string;
            /**
             * @description 微服务ID
             */
            serviceId: string;
            /**
             * @description 请求方法
             */
            method: string;
            /**
             * @description 接口路径
             */
            uri: string;
          };
        } & Omit<AxiosExRequestOptions, "params">,
      ): Promise<RApiCheckStatus> => {
        return http.post({
          url: `/access/check`,
          ...request,
        });
      },
    },
    shortToken: {
      /**
       * @description 认证令牌换取短时短令牌
       */
      get: (request?: {} & AxiosExRequestOptions): Promise<RShortTokenVO> => {
        return http.get({
          url: `/access/shortToken`,
          ...request,
        });
      },
    },
  },
  avatar: {
    /**
     * @description 用户头像
     */
    get: (request?: {} & AxiosExRequestOptions): Promise<string> => {
      return http.get({
        url: `/avatar/**`,
        ...request,
      });
    },
  },
  api: {
    resources: {
      all: {
        /**
         * @description 获取接口列表
         */
        get: (
          request?: {} & AxiosExRequestOptions,
        ): Promise<RListApiResourceVO> => {
          return http.get({
            url: `/api/resources/all`,
            ...request,
          });
        },
      },
    },
  },
};
