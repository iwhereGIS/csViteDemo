/**
 * @description 用户信息编辑请求
 */
export interface UserInfoEditDTO {
  /**
   * @description 用户昵称
   */
  nickname?: string;
  /**
   * @description 用户头像
   */
  avatar?: string;
  /**
   * @description 性别：[unknow(0): 未知, man(1): 男, woman(2): 女]
   */
  gender?: number;
  /**
   * @description 用户邮箱
   */
  email?: string;
  /**
   * @description 手机号码
   */
  phone?: string;
  /**
   * @description 用户真实姓名
   */
  realName?: string;
  /**
   * @description 身份号码，原始数据
   */
  idNoRaw?: string;
}

/**
 * @description 接口返回封装
 */
export interface RObject {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description 返回数据
   */
  data?: object;
}

/**
 * @description 社会化登录绑定微信用户信息请求
 */
export interface BindWechatUserInfoDTO {
  /**
   * @description 用户昵称
   */
  nickname?: string;
  /**
   * @description 用户头像
   */
  avatarUrl?: string;
  /**
   * @description 用户性别：0：未知、1：男性、2：女性
   */
  gender?: number;
}

/**
 * @description 接口返回封装
 */
export interface RString {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description 返回数据
   */
  data?: string;
}

/**
 * @description 社会化登录绑定微信手机信息请求
 */
export interface BindWechatMiniAppPhoneDTO {
  /**
   * @description 微信小程序appId
   */
  appId: string;
  /**
   * @description 微信小程序手机号组件Code
   */
  code: string;
}

/**
 * @description 重置密码请求
 */
export interface ResetPasswordDTO {
  /**
   * @description 旧密码
   */
  oldPassword: string;
  /**
   * @description 新密码
   */
  newPassword: string;
}

/**
 * @description OAuth2 Authorization code内部令牌
 */
export interface OAuth2AccessTokenVO {
  /**
   * @description 令牌
   */
  accessToken?: string;
  /**
   * @description 过期时间
   */
  expiresIn?: number;
}

/**
 * @description 接口返回封装
 */
export interface ROAuth2AccessTokenVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: OAuth2AccessTokenVO;
}

/**
 * @description 设置启用状态请求体
 */
export interface SetEnabledDTO {
  /**
   * @description clientId
   */
  clientId: string;
  /**
   * @description 启用状态：[enable(1): 启用, disable(0): 禁用]
   */
  enabled: string;
}

/**
 * @description 密钥分页请求
 */
export interface PageSecretDTO {
  /**
   * @description 当前页码
   */
  page: number;
  /**
   * @description 分页大小
   */
  pageSize: number;
  /**
   * @description 密钥名称
   */
  clientName?: string;
  /**
   * @description accessKey
   */
  accessKey?: string;
  /**
   * @description 是否系统内置[yes(1): 是, no(0): 否]
   */
  isSys?: string;
  /**
   * @description 是否启用[yes(1): 是, no(0): 否]
   */
  enabled?: string;
}

/**
 * @description 分页返回
 */
export interface PageVOSecretVO {
  /**
   * @description 数据总数
   */
  count?: number;
  /**
   * @description 数据列表
   */
  list?: SecretVO[];
}

/**
 * @description 接口返回封装
 */
export interface RPageVOSecretVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: PageVOSecretVO;
}

/**
 * @description 密钥 详情
 */
export interface SecretVO {
  /**
   * @description 密钥 ID
   */
  id?: number;
  /**
   * @description 密钥名称
   */
  clientName?: string;
  /**
   * @description AccessKey
   */
  clientId?: string;
  /**
   * @description SecretKey
   */
  clientSecret?: string;
  /**
   * @description 是否启用[yes(1): 是, no(0): 否]
   */
  enabled?: string;
  /**
   * @description 是否系统内置[yes(1): 是, no(0): 否]
   */
  isSys?: string;
  /**
   * @description 过期时间
   */
  gmtExpires?: string;
  /**
   * @description 创建时间
   */
  gmtCreate?: string;
}

/**
 * @description 密钥绑定分页请求
 */
export interface PageSecretRoleBindDTO {
  /**
   * @description 角色名称
   */
  name?: string;
  /**
   * @description 是否系统内置[yes(1): 是, no(0): 否]
   */
  isSys?: string;
  /**
   * @description clientId
   */
  clientId?: string;
}

/**
 * @description 分页返回
 */
export interface PageVORoleBindVO {
  /**
   * @description 数据总数
   */
  count?: number;
  /**
   * @description 数据列表
   */
  list?: RoleBindVO[];
}

/**
 * @description 接口返回封装
 */
export interface RPageVORoleBindVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: PageVORoleBindVO;
}

/**
 * @description 角色详情
 */
export interface RoleBindVO {
  /**
   * @description 角色ID
   */
  id?: number;
  /**
   * @description 角色名称
   */
  name?: string;
  /**
   * @description 角色编码
   */
  code?: string;
  /**
   * @description 启用状态：[enable(1): 启用, disable(0): 禁用]
   */
  enabled?: string;
  /**
   * @description 系统角色[yes(1): 是, no(0): 否]
   */
  isSys?: string;
}

/**
 * @description 接口编辑请求
 */
export interface EditSecretDTO {
  /**
   * @description 公司ID
   */
  companyId?: number;
  /**
   * @description AccessKey
   */
  clientId: string;
  /**
   * @description SecretKey
   */
  clientSecret: string;
  /**
   * @description 客户端名称
   */
  clientName: string;
  /**
   * @description 客户端支持的认证类型
   */
  authorizationGrantTypes: string[];
  /**
   * @description Client 设置信息
   */
  clientSettings: object;
  /**
   * @description 令牌 设置信息
   */
  tokenSettings: object;
  /**
   * @description 回调地址
   */
  redirectUris?: string[];
  /**
   * @description 认证令牌有效期
   */
  accessTokenTimeToLive: number;
  /**
   * @description 刷新令牌有效期
   */
  refreshTokenTimeToLive: number;
  /**
   * @description 授权码有效期
   */
  authorizationCodeTimeToLive: number;
  /**
   * @description 过期时间
   */
  gmtExpires: string;
  /**
   * @description 是否系统内置[yes(1): 是, no(0): 否]
   */
  isSys: string;
  /**
   * @description 密钥ID
   */
  id: number;
}

/**
 * @description 删除请求
 */
export interface DeleteSecretDTO {
  /**
   * @description 密钥id
   */
  ids: number[];
}

/**
 * @description 密钥角色删除绑定请求体
 */
export interface DeleteBindDTO {
  /**
   * @description clientId
   */
  clientId: string;
  /**
   * @description 角色id
   */
  roleId: number;
}

/**
 * @description 密钥角色绑定请求体
 */
export interface SecretBindDTO {
  /**
   * @description clientId
   */
  clientId: string;
  /**
   * @description 角色id集合 所有需要关联的编码
   */
  roleIds: number[];
}

/**
 * @description 密钥 注册信息
 */
export interface AddSecretDTO {
  /**
   * @description 公司ID
   */
  companyId?: number;
  /**
   * @description AccessKey
   */
  clientId: string;
  /**
   * @description SecretKey
   */
  clientSecret: string;
  /**
   * @description 客户端名称
   */
  clientName: string;
  /**
   * @description 客户端支持的认证类型
   */
  authorizationGrantTypes: string[];
  /**
   * @description Client 设置信息
   */
  clientSettings: object;
  /**
   * @description 令牌 设置信息
   */
  tokenSettings: object;
  /**
   * @description 回调地址
   */
  redirectUris?: string[];
  /**
   * @description 认证令牌有效期
   */
  accessTokenTimeToLive: number;
  /**
   * @description 刷新令牌有效期
   */
  refreshTokenTimeToLive: number;
  /**
   * @description 授权码有效期
   */
  authorizationCodeTimeToLive: number;
  /**
   * @description 过期时间
   */
  gmtExpires: string;
  /**
   * @description 是否系统内置[yes(1): 是, no(0): 否]
   */
  isSys: string;
}

/**
 * @description 设置启用状态请求体
 */
export interface SetRoleEnabledDTO {
  /**
   * @description 角色id
   */
  id: number;
  /**
   * @description 启用状态：[enable(1): 启用, disable(0): 禁用]
   */
  enabled: string;
}

/**
 * @description 关联用户角色请求体
 */
export interface RefRoleUsersDTO {
  /**
   * @description 角色id
   */
  roleId: number;
  /**
   * @description 用户id集合
   */
  userIds: number[];
  /**
   * @description 操作：1（绑定角色），0（解绑角色）
   */
  type: number;
}

/**
 * @description 关联资源角色请求体
 */
export interface RefRoleResourcesDTO {
  /**
   * @description 角色id
   */
  roleId: number;
  /**
   * @description 绑定的所有资源id集合（包含已绑定的）
   */
  resourceIds: number[];
}

/**
 * @description 关联部门角色请求体
 */
export interface RefRoleDepartmentsDTO {
  /**
   * @description 角色id
   */
  roleId: number;
  /**
   * @description 部门id集合
   */
  departmentIds: number[];
  /**
   * @description 操作：1（绑定角色），0（解绑角色）
   */
  type: number;
}

/**
 * @description 关联公司角色请求体
 */
export interface RefRoleCompaniesDTO {
  /**
   * @description 角色id
   */
  roleId: number;
  /**
   * @description 公司id集合
   */
  companyIds: number[];
  /**
   * @description 操作：1（绑定角色），0（解绑角色）
   */
  type: number;
}

/**
 * @description 查询角色关联用户列表请求体
 */
export interface RoleUserPageDTO {
  /**
   * @description 当前页码
   */
  page: number;
  /**
   * @description 分页大小
   */
  pageSize: number;
  /**
   * @description 角色id
   */
  roleId: number;
  /**
   * @description 用户账号
   */
  account?: string;
  /**
   * @description 开始时间
   */
  startTime?: string;
  /**
   * @description 结束时间
   */
  endTime?: string;
  /**
   * @description 启用状态
   */
  enabled?: string;
}

/**
 * @description 分页返回
 */
export interface PageVORoleUserVO {
  /**
   * @description 数据总数
   */
  count?: number;
  /**
   * @description 数据列表
   */
  list?: RoleUserVO[];
}

/**
 * @description 接口返回封装
 */
export interface RPageVORoleUserVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: PageVORoleUserVO;
}

/**
 * @description 关联用户列表查询返回体
 */
export interface RoleUserVO {
  /**
   * @description 用户ID
   */
  id?: number;
  /**
   * @description 用户名
   */
  username?: string;
  /**
   * @description 用户昵称
   */
  nickname?: string;
  /**
   * @description 用户头像
   */
  avatar?: string;
  /**
   * @description 手机号码
   */
  phone?: string;
  /**
   * @description 性别：[unknow(0): 未知, man(1): 男, woman(2): 女]
   */
  gender?: number;
  /**
   * @description 账号启用状态：[enable(1): 启用, disable(0): 禁用]
   */
  enabled?: string;
  /**
   * @description 注册日期
   */
  gmtCreate?: string;
}

/**
 * @description 角色分页请求
 */
export interface RolePageDTO {
  /**
   * @description 当前页码
   */
  page: number;
  /**
   * @description 分页大小
   */
  pageSize: number;
  /**
   * @description 角色编码
   */
  code?: string;
  /**
   * @description 角色名称
   */
  name?: string;
  /**
   * @description 启用状态：[enable(1): 启用, disable(0): 禁用]
   */
  enabled?: string;
  /**
   * @description 系统角色[yes(1): 是, no(0): 否]
   */
  isSys?: string;
}

/**
 * @description 分页返回
 */
export interface PageVORoleVO {
  /**
   * @description 数据总数
   */
  count?: number;
  /**
   * @description 数据列表
   */
  list?: RoleVO[];
}

/**
 * @description 接口返回封装
 */
export interface RPageVORoleVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: PageVORoleVO;
}

/**
 * @description 角色详情
 */
export interface RoleVO {
  /**
   * @description 角色ID
   */
  id?: number;
  /**
   * @description 角色名称
   */
  name?: string;
  /**
   * @description 角色编码
   */
  code?: string;
  /**
   * @description 启用状态：[enable(1): 启用, disable(0): 禁用]
   */
  enabled?: string;
  /**
   * @description 系统角色[yes(1): 是, no(0): 否]
   */
  isSys?: string;
  /**
   * @description 数据更新时间
   */
  gmtModified?: string;
  /**
   * @description 角色描述
   */
  remark?: string;
}

/**
 * @description 分页获取部门角色列表
 */
export interface RoleDepartmentPageDTO {
  /**
   * @description 当前页码
   */
  page: number;
  /**
   * @description 分页大小
   */
  pageSize: number;
  /**
   * @description 角色id
   */
  roleId: number;
  /**
   * @description 公司名称
   */
  companyName?: string;
}

/**
 * @description 分页返回
 */
export interface PageVORoleDepartmentVO {
  /**
   * @description 数据总数
   */
  count?: number;
  /**
   * @description 数据列表
   */
  list?: RoleDepartmentVO[];
}

/**
 * @description 接口返回封装
 */
export interface RPageVORoleDepartmentVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: PageVORoleDepartmentVO;
}

/**
 * @description 角色部门返回体
 */
export interface RoleDepartmentVO {
  /**
   * @description 部门id
   */
  id?: number;
  /**
   * @description 公司id
   */
  companyId?: number;
  /**
   * @description 公司名称
   */
  companyName?: string;
  /**
   * @description 父id
   */
  parentId?: number;
  /**
   * @description 部门名称
   */
  name?: string;
  /**
   * @description 注册时间
   */
  gmtCreate?: string;
}

/**
 * @description 分页获取角色关联公司请求体
 */
export interface RoleCompanyPageDTO {
  /**
   * @description 当前页码
   */
  page: number;
  /**
   * @description 分页大小
   */
  pageSize: number;
  /**
   * @description 角色id
   */
  roleId: number;
  /**
   * @description 公司名称
   */
  companyName?: string;
  /**
   * @description 是否启用[yes(1): 是, no(0): 否]
   */
  enabled?: string;
}

/**
 * @description 分页返回
 */
export interface PageVORoleCompanyVO {
  /**
   * @description 数据总数
   */
  count?: number;
  /**
   * @description 数据列表
   */
  list?: RoleCompanyVO[];
}

/**
 * @description 接口返回封装
 */
export interface RPageVORoleCompanyVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: PageVORoleCompanyVO;
}

/**
 * @description 分页获取角色关联公司返回体
 */
export interface RoleCompanyVO {
  /**
   * @description 公司id
   */
  id?: number;
  /**
   * @description 公司名称
   */
  companyName?: string;
  /**
   * @description 统一社会信用代码
   */
  uscc?: string;
  /**
   * @description 是否启用[yes(1): 是, no(0): 否]
   */
  enabled?: string;
  /**
   * @description 注册日期
   */
  gmtCreate?: string;
}

/**
 * @description 角色Api绑定查询请求
 */
export interface ApiBindSearchDTO {
  /**
   * @description 角色ID
   */
  roleId: number;
  /**
   * @description 接口名称
   */
  summary?: string;
  /**
   * @description 接口路径
   */
  path?: string;
}

/**
 * @description API 详情
 */
export interface ApiBindVO {
  /**
   * @description API ID
   */
  id?: number;
  /**
   * @description 服务名称
   */
  serviceName?: string;
  /**
   * @description 接口名称
   */
  summary?: string;
  /**
   * @description 接口路径
   */
  path?: string;
  /**
   * @description 接口请求方法
   */
  methods?: string;
  /**
   * @description 是否为开放接口[yes(1): 是, no(0): 否]
   */
  isOpen?: string;
}

/**
 * @description 接口返回封装
 */
export interface RListApiBindVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description 返回数据
   */
  data?: ApiBindVO[];
}

/**
 * @description 编辑角色请求
 */
export interface EditRoleDTO {
  /**
   * @description 角色编码
   */
  code: string;
  /**
   * @description 角色名称
   */
  name: string;
  /**
   * @description 角色描述
   */
  remark?: string;
  /**
   * @description 系统角色[yes(1): 是, no(0): 否]
   */
  isSys: string;
  /**
   * @description 角色ID
   */
  id: number;
}

/**
 * @description 角色API绑定请求体
 */
export interface ApiBindDTO {
  /**
   * @description 角色id
   */
  roleId: number;
  /**
   * @description 接口id集合
   */
  apiIds: number[];
}

/**
 * @description 新增角色请求
 */
export interface AddRoleDTO {
  /**
   * @description 角色编码
   */
  code: string;
  /**
   * @description 角色名称
   */
  name: string;
  /**
   * @description 角色描述
   */
  remark?: string;
  /**
   * @description 系统角色[yes(1): 是, no(0): 否]
   */
  isSys: string;
}

/**
 * @description 菜单树请求体
 */
export interface MenuDTO {
  /**
   * @description 父id 不传查询所有
   */
  parentId?: number;
  /**
   * @description 应用平台id
   */
  platformId?: number;
}

/**
 * @description 接口返回封装
 */
export interface RListTreeNodeVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description 返回数据
   */
  data?: TreeNodeVO[];
}

/**
 * @description 树节点
 */
export interface TreeNodeVO {
  /**
   * @description 节点ID
   */
  id?: number;
  /**
   * @description 父节点ID
   */
  parentId?: number;
  /**
   * @description 节点名称
   */
  name?: string;
  /**
   * @description 排序
   */
  sort?: number;
  /**
   * @description 节点层次级别从0开始，快速分级查询，根据层级缩进
   */
  treeLevel?: string;
  /**
   * @description 子节点
   */
  children?: TreeNodeVO[];
  /**
   * @description 是否有子节点
   */
  hasChildren?: boolean;
  /**
   * @description 是否为叶子节点
   */
  isLeaf?: boolean;
  /**
   * @description 节点附加信息
   */
  metadata?: object;
}

/**
 * @description Api绑定列表请求
 */
export interface PageApiBindDTO {
  /**
   * @description 资源ID
   */
  resourceId: number;
  /**
   * @description 微服务ID
   */
  serviceId?: string;
  /**
   * @description 接口名称
   */
  summary?: string;
  /**
   * @description 接口路径
   */
  path?: string;
  /**
   * @description 是否为开放接口[yes(1): 是, no(0): 否]
   */
  isOpen?: string;
  /**
   * @description 是否为自动生成[yes(1): 是, no(0): 否]
   */
  isGenerate?: string;
}

/**
 * @description 编辑资源请求
 */
export interface EditResourceDTO {
  /**
   * @description 父资源ID
   */
  parentId?: number;
  /**
   * @description 应用平台ID
   */
  platformId: number;
  /**
   * @description 资源名称
   */
  name: string;
  /**
   * @description 资源描述
   */
  description?: string;
  /**
   * @description 资源排序
   */
  sort: number;
  /**
   * @description 资源类型[menu(0): 菜单, action(1): 按钮, group(2): 分组]
   */
  type: number;
  /**
   * @description 资源
   */
  resource?: string;
  /**
   * @description 资源ID
   */
  id: number;
}

/**
 * @description 资源接口绑定请求体
 */
export interface ApiResourceBindDTO {
  /**
   * @description 资源id
   */
  resourceId: number;
  /**
   * @description 接口id集合 所有需要关联的接口id
   */
  apiIds?: number[];
}

/**
 * @description 新增资源请求
 */
export interface AddResourceDTO {
  /**
   * @description 父资源ID
   */
  parentId?: number;
  /**
   * @description 应用平台ID
   */
  platformId: number;
  /**
   * @description 资源名称
   */
  name: string;
  /**
   * @description 资源描述
   */
  description?: string;
  /**
   * @description 资源排序
   */
  sort: number;
  /**
   * @description 资源类型[menu(0): 菜单, action(1): 按钮, group(2): 分组]
   */
  type: number;
  /**
   * @description 资源
   */
  resource?: string;
}

/**
 * @description 接口返回封装
 */
export interface RLong {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description 返回数据
   */
  data?: number;
}

/**
 * @description 设置启用状态请求体
 */
export interface SetDepartmentEnabledDTO {
  /**
   * @description 部门id
   */
  id: number;
  /**
   * @description 启用状态：[enable(1): 启用, disable(0): 禁用]
   */
  enabled: string;
}

/**
 * @description 公司批量移除用户请求
 */
export interface DepartmentRemoveUsersDTO {
  /**
   * @description 公司ID
   */
  companyId: number;
  /**
   * @description 部门ID
   */
  departmentId: number;
  /**
   * @description 用户ID列表
   */
  userIds: number[];
}

/**
 * @description 获取部门列表请求体
 */
export interface GetDepartmentDTO {
  /**
   * @description 公司id
   */
  companyId: number;
  /**
   * @description 角色id（传入时返回对应部门是否已于角色关联）
   */
  roleId?: number;
  /**
   * @description 父id（传入时表示获取对应父id的下级子节点）
   */
  parentId?: number;
  /**
   * @description 是否启用[yes(1): 是, no(0): 否]
   */
  enabled?: string;
}

/**
 * @description 部门详情
 */
export interface DepartmentVO {
  /**
   * @description 部门id
   */
  id?: number;
  /**
   * @description 部门父id
   */
  parentId?: number;
  /**
   * @description 排序
   */
  sort?: number;
  /**
   * @description 部门名称
   */
  name?: string;
  /**
   * @description 是否启用[yes(1): 是, no(0): 否]
   */
  enabled?: string;
  /**
   * @description 公司id
   */
  companyId?: number;
  /**
   * @description 公司名称
   */
  companyName?: string;
  /**
   * @description 注册时间
   */
  gmtCreate?: string;
  /**
   * @description 更新时间
   */
  gmtModified?: string;
  /**
   * @description 是否有子节点{0：非叶子节点， 1：叶子节点}
   */
  hasChildren?: boolean;
}

/**
 * @description 接口返回封装
 */
export interface RListDepartmentVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description 返回数据
   */
  data?: DepartmentVO[];
}

/**
 * @description 编辑部门
 */
export interface EditDepartmentDTO {
  /**
   * @description 部门id
   */
  id: number;
  /**
   * @description 父id
   */
  parentId?: number;
  /**
   * @description 部门名称
   */
  name: string;
  /**
   * @description 排序
   */
  sort: number;
}

/**
 * @description 新增部门
 */
export interface AddDepartmentDTO {
  /**
   * @description 公司id
   */
  companyId: number;
  /**
   * @description 父id
   */
  parentId?: number;
  /**
   * @description 部门名称
   */
  name: string;
  /**
   * @description 排序
   */
  sort: number;
}

/**
 * @description 公司部门批量添加用户请求
 */
export interface DepartmentAddUsersDTO {
  /**
   * @description 公司ID
   */
  companyId: number;
  /**
   * @description 部门ID
   */
  departmentId: number;
  /**
   * @description 用户ID列表
   */
  userIds: number[];
}

/**
 * @description 设置启用状态请求体
 */
export interface SetCompanyEnabledDTO {
  /**
   * @description 公司id
   */
  id: number;
  /**
   * @description 启用状态：[enable(1): 启用, disable(0): 禁用]
   */
  enabled: string;
}

/**
 * @description 公司部门批量移除用户请求
 */
export interface CompanyRemoveUsersDTO {
  /**
   * @description 公司ID
   */
  companyId: number;
  /**
   * @description 用户ID列表
   */
  userIds: number[];
}

/**
 * @description 分页获取公司请求体
 */
export interface CompanyPageDTO {
  /**
   * @description 当前页码
   */
  page: number;
  /**
   * @description 分页大小
   */
  pageSize: number;
  /**
   * @description 公司名称
   */
  companyName?: string;
  /**
   * @description 关联角色id，传入时返回与角色关联状态
   */
  roleId?: number;
  /**
   * @description 开始时间
   */
  startTime?: string;
  /**
   * @description 结束时间
   */
  endTime?: string;
  /**
   * @description 启用状态
   */
  enabled?: string;
  /**
   * @description 统一社会信用代码
   */
  uscc?: string;
}

/**
 * @description 公司详情
 */
export interface CompanyVO {
  /**
   * @description 公司id
   */
  id?: number;
  /**
   * @description 公司名称
   */
  companyName?: string;
  /**
   * @description 统一社会信用代码
   */
  uscc?: string;
  /**
   * @description 是否启用[yes(1): 是, no(0): 否]
   */
  enabled?: string;
  /**
   * @description 注册时间
   */
  gmtCreate?: string;
  /**
   * @description 关联角色状态（传入角色id时）：1已绑定，0未绑定
   */
  refStatus?: number;
}

/**
 * @description 分页返回
 */
export interface PageVOCompanyVO {
  /**
   * @description 数据总数
   */
  count?: number;
  /**
   * @description 数据列表
   */
  list?: CompanyVO[];
}

/**
 * @description 接口返回封装
 */
export interface RPageVOCompanyVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: PageVOCompanyVO;
}

/**
 * @description 编辑公司请求体
 */
export interface EditCompanyDTO {
  /**
   * @description 公司id
   */
  id: number;
  /**
   * @description 公司名称
   */
  companyName: string;
  /**
   * @description 统一社会信用代码
   */
  uscc?: string;
}

/**
 * @description 新增公司请求体
 */
export interface AddCompanyDTO {
  /**
   * @description 公司名称
   */
  companyName: string;
  /**
   * @description 统一社会信用代码
   */
  uscc?: string;
}

/**
 * @description 公司批量添加用户请求
 */
export interface CompanyAddUsersDTO {
  /**
   * @description 公司ID
   */
  companyId: number;
  /**
   * @description 用户ID列表
   */
  userIds: number[];
}

/**
 * @description 开放接口请求
 */
export interface OpenApiDTO {
  /**
   * @description 接口ID列表
   */
  ids: number[];
  /**
   * @description 是否为开放接口[yes(1): 是, no(0): 否]
   */
  isOpen: string;
}

/**
 * @description Api列表请求
 */
export interface ApiListDTO {
  /**
   * @description 微服务ID
   */
  serviceId?: string;
  /**
   * @description 接口分组Tag
   */
  tag?: string;
  /**
   * @description 接口名称
   */
  summary?: string;
  /**
   * @description 接口路径
   */
  path?: string;
  /**
   * @description 是否为自动生成[yes(1): 是, no(0): 否]
   */
  isGenerate?: string;
  /**
   * @description 是否为开放接口[yes(1): 是, no(0): 否]
   */
  isOpen?: string;
}

/**
 * @description API 详情
 */
export interface ApiTagVO {
  /**
   * @description tagId
   */
  id?: string;
  /**
   * @description 接口分组Tag
   */
  tag?: string;
  /**
   * @description 接口分组列表
   */
  children?: ApiVO[];
}

/**
 * @description API 详情
 */
export interface ApiVO {
  /**
   * @description API ID
   */
  id?: number;
  /**
   * @description 微服务ID
   */
  serviceId?: string;
  /**
   * @description 接口分组Tag
   */
  tag?: string;
  /**
   * @description 接口名称
   */
  summary?: string;
  /**
   * @description 接口路径
   */
  path?: string;
  /**
   * @description 接口请求方式
   */
  methods?: string;
  /**
   * @description 是否为自动生成[yes(1): 是, no(0): 否]
   */
  isGenerate?: string;
  /**
   * @description 是否为开放接口[yes(1): 是, no(0): 否]
   */
  isOpen?: string;
  /**
   * @description 子级列表
   */
  children?: ApiVO[];
}

/**
 * @description 接口返回封装
 */
export interface RListApiTagVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description 返回数据
   */
  data?: ApiTagVO[];
}

/**
 * @description 接口编辑请求
 */
export interface EditApiDTO {
  /**
   * @description 微服务ID
   */
  serviceId: string;
  /**
   * @description 接口分组Tag
   */
  tag?: string;
  /**
   * @description 接口名称
   */
  summary: string;
  /**
   * @description 接口路径
   */
  path: string;
  /**
   * @description 接口请求方式
   */
  methods?: string;
  /**
   * @description 是否为开放接口[yes(1): 是, no(0): 否]
   */
  isOpen: string;
  /**
   * @description 接口ID
   */
  id: number;
}

/**
 * @description 删除接口请求
 */
export interface DeleteApiDTO {
  /**
   * @description 接口id
   */
  ids: number[];
}

/**
 * @description 新增接口请求
 */
export interface AddApiDTO {
  /**
   * @description 微服务ID
   */
  serviceId: string;
  /**
   * @description 接口分组Tag
   */
  tag?: string;
  /**
   * @description 接口名称
   */
  summary: string;
  /**
   * @description 接口路径
   */
  path: string;
  /**
   * @description 接口请求方式
   */
  methods?: string;
  /**
   * @description 是否为开放接口[yes(1): 是, no(0): 否]
   */
  isOpen: string;
}

/**
 * @description 设置用户密码请求
 */
export interface SetPasswordDTO {
  /**
   * @description 用户ID
   */
  id: number;
  /**
   * @description 用户密码
   */
  password: string;
}

/**
 * @description 设置启用状态请求体
 */
export interface SetUserEnabledDTO {
  /**
   * @description 用户id
   */
  id: number;
  /**
   * @description 启用状态：[enable(1): 启用, disable(0): 禁用]
   */
  enabled: string;
}

/**
 * @description 编辑用户请求体
 */
export interface EditAccountDTO {
  /**
   * @description 用户id
   */
  id: number;
  /**
   * @description 用户名
   */
  username: string;
  /**
   * @description 昵称
   */
  nickname?: string;
  /**
   * @description 头像
   */
  avatar?: string;
  /**
   * @description 电话
   */
  phone?: string;
  /**
   * @description 性别：[unknow(0): 未知, man(1): 男, woman(2): 女]
   */
  gender: number;
}

/**
 * @description 新增用户请求体
 */
export interface AddAccountDTO {
  /**
   * @description 用户名
   */
  username: string;
  /**
   * @description 密码
   */
  password: string;
  /**
   * @description 昵称
   */
  nickname?: string;
  /**
   * @description 头像
   */
  avatar?: string;
  /**
   * @description 电话
   */
  phone?: string;
  /**
   * @description 性别：[unknow(0): 未知, man(1): 男, woman(2): 女]
   */
  gender: number;
}

/**
 * @description 登出结果
 */
export interface LogoutVO {
  /**
   * @description 登录页面
   */
  loginPage?: string;
}

/**
 * @description 接口返回封装
 */
export interface RLogoutVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: LogoutVO;
}

/**
 * @description 登录返回
 */
export interface LoginVO {
  /**
   * @description 用户令牌
   */
  accessToken?: string;
  /**
   * @description 令牌类型
   */
  tokenType?: string;
  /**
   * @description 令牌有效期
   */
  expiresIn?: number;
  /**
   * @description 绑定的公司数量
   */
  companyCount?: number;
  /**
   * @description 账号是否绑定了多家公司（大于1家）
   */
  multiCompany?: boolean;
  /**
   * @description 附加信息
   */
  extra?: object;
}

/**
 * @description 接口返回封装
 */
export interface RLoginVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: LoginVO;
}

/**
 * @description 验证码分页请求
 */
export interface PageCaptchaDTO {
  /**
   * @description 当前页码
   */
  page: number;
  /**
   * @description 分页大小
   */
  pageSize: number;
  /**
   * @description 手机号码
   */
  phone?: string;
  /**
   * @description ip
   */
  ip?: string;
  /**
   * @description 状态
   */
  status?: number;
}

/**
 * @description 短信验证码
 */
export interface CaptchaVO {
  /**
   * @description id
   */
  id?: number;
  /**
   * @description 手机号码
   */
  phone?: string;
  /**
   * @description 验证码
   */
  captcha?: string;
  /**
   * @description ip
   */
  ip?: string;
  /**
   * @description 登录地址
   */
  addr?: string;
  /**
   * @description 浏览器
   */
  browser?: string;
  /**
   * @description 操作系统
   */
  os?: string;
  /**
   * @description 提示消息
   */
  message?: string;
  /**
   * @description 登录状态[success(1): 成功, fail(0): 失败]
   */
  status?: number;
  /**
   * @description 有效期
   */
  expiresIn?: string;
  /**
   * @description 提交时间
   */
  gmtCreate?: string;
}

/**
 * @description 分页返回
 */
export interface PageVOCaptchaVO {
  /**
   * @description 数据总数
   */
  count?: number;
  /**
   * @description 数据列表
   */
  list?: CaptchaVO[];
}

/**
 * @description 接口返回封装
 */
export interface RPageVOCaptchaVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: PageVOCaptchaVO;
}

/**
 * @description 接口返回封装
 */
export interface RApiCheckStatus {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description 返回数据
   */
  data?: string;
}

/**
 * @description 登录用户公司信息
 */
export interface Company {
  /**
   * @description 公司ID
   */
  companyId?: number;
  /**
   * @description 公司名称
   */
  companyName?: string;
}

/**
 * @description 接口返回封装
 */
export interface RUserVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: UserVO;
}

/**
 * @description 用户信息
 */
export interface UserVO {
  /**
   * @description 用户ID
   */
  id?: number;
  /**
   * @description 用户名
   */
  username?: string;
  /**
   * @description 用户昵称
   */
  nickname?: string;
  /**
   * @description 用户真实姓名
   */
  realName?: string;
  /**
   * @description 用户头像
   */
  avatar?: string;
  /**
   * @description 手机号码
   */
  phone?: string;
  /**
   * @description 性别：[unknow(0): 未知, man(1): 男, woman(2): 女]
   */
  gender?: number;
  /**
   * @description 用户邮箱
   */
  email?: string;
  /**
   * @description 身份证号码，脱敏数据
   */
  idNo?: string;
  /**
   * @description 身份号码，原始数据
   */
  idNoRaw?: string;
  /**
   * @description 用户启用状态：1：启用
   */
  enabled?: boolean;
  /**
   * @description 绑定的公司数量
   */
  companyBindings?: number;
  /**
   * @description
   */
  company?: Company;
}

/**
 * @description 接口返回封装
 */
export interface RListString {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description 返回数据
   */
  data?: string[];
}

/**
 * @description 接口返回封装
 */
export interface RListUserCompanyVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description 返回数据
   */
  data?: UserCompanyVO[];
}

/**
 * @description 用户公司列表详情
 */
export interface UserCompanyVO {
  /**
   * @description 公司ID
   */
  companyId?: number;
  /**
   * @description 公司名称
   */
  companyName?: string;
}

/**
 * @description OAuth2 authentication response_type=code 返回
 */
export interface OAuth2AuthorizationCodeRequestVO {
  /**
   * @description 回调地址
   */
  redirectUri?: string;
  /**
   * @description 授权码模式Code
   */
  code?: string;
  /**
   * @description 授权码State
   */
  state?: string;
  /**
   * @description Url hash值
   */
  hash?: string;
}

/**
 * @description 接口返回封装
 */
export interface ROAuth2AuthorizationCodeRequestVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: OAuth2AuthorizationCodeRequestVO;
}

/**
 * @description 接口返回封装
 */
export interface RSecretDetailVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: SecretDetailVO;
}

/**
 * @description 密钥 详情
 */
export interface SecretDetailVO {
  /**
   * @description 密钥 ID
   */
  id?: number;
  /**
   * @description 密钥名称
   */
  clientName?: string;
  /**
   * @description AccessKey
   */
  clientId?: string;
  /**
   * @description SecretKey
   */
  clientSecret?: string;
  /**
   * @description 是否启用[yes(1): 是, no(0): 否]
   */
  enabled?: string;
  /**
   * @description 是否系统内置[yes(1): 是, no(0): 否]
   */
  isSys?: string;
  /**
   * @description 过期时间
   */
  gmtExpires?: string;
  /**
   * @description 创建时间
   */
  gmtCreate?: string;
  /**
   * @description 公司ID
   */
  companyId?: number;
  /**
   * @description 客户端支持的认证类型
   */
  authorizationGrantTypes?: string[];
  /**
   * @description 回调地址
   */
  redirectUris?: string[];
  /**
   * @description 认证令牌有效期
   */
  accessTokenTimeToLive?: number;
  /**
   * @description 刷新令牌有效期
   */
  refreshTokenTimeToLive?: number;
  /**
   * @description 授权码有效期
   */
  authorizationCodeTimeToLive?: number;
}

/**
 * @description 接口返回封装
 */
export interface RRoleVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: RoleVO;
}

/**
 * @description 接口返回封装
 */
export interface RResourceVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: ResourceVO;
}

/**
 * @description 资源返回体
 */
export interface ResourceVO {
  /**
   * @description 资源id
   */
  id?: number;
  /**
   * @description 父id
   */
  parentId?: number;
  /**
   * @description 资源名称
   */
  name?: string;
  /**
   * @description 排序
   */
  sort?: number;
  /**
   * @description
   */
  treeParentIds?: string;
  /**
   * @description
   */
  treeLevel?: string;
  /**
   * @description
   */
  treeSorts?: string;
  /**
   * @description
   */
  treeNames?: string;
  /**
   * @description
   */
  treeLeaf?: string;
  /**
   * @description 父id名称
   */
  pidName?: string;
  /**
   * @description 平台应用id
   */
  platformId?: number;
  /**
   * @description 资源
   */
  resource?: string;
  /**
   * @description 描述
   */
  description?: string;
  /**
   * @description 资源类型[menu(0): 菜单, action(1): 按钮, group(2): 分组]
   */
  type?: number;
  /**
   * @description 启用状态：[enable(1): 启用, disable(0): 禁用]
   */
  enabled?: string;
  /**
   * @description 创建时间
   */
  gmtCreate?: string;
  /**
   * @description 更新时间
   */
  gmtModified?: string;
}

/**
 * @description 登录用户日志 详情
 */
export interface LoginInfoVO {
  /**
   * @description id
   */
  id?: string;
  /**
   * @description 公司ID
   */
  companyId?: number;
  /**
   * @description 用户ID
   */
  userId?: number;
  /**
   * @description 用户名
   */
  username?: string;
  /**
   * @description 公司名称
   */
  companyName?: string;
  /**
   * @description ip
   */
  ip?: string;
  /**
   * @description 登录地址
   */
  addr?: string;
  /**
   * @description 浏览器
   */
  browser?: string;
  /**
   * @description 操作系统
   */
  os?: string;
  /**
   * @description 提示消息
   */
  message?: string;
  /**
   * @description 登录状态[success(1): 登录成功, fail(0): 登录失败, register(2): 注册, logout(3): 登出]
   */
  status?: number;
  /**
   * @description 提交时间
   */
  gmtCreate?: string;
}

/**
 * @description 分页返回
 */
export interface PageVOLoginInfoVO {
  /**
   * @description 数据总数
   */
  count?: number;
  /**
   * @description 数据列表
   */
  list?: LoginInfoVO[];
}

/**
 * @description 接口返回封装
 */
export interface RPageVOLoginInfoVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: PageVOLoginInfoVO;
}

/**
 * @description 部门用户信息
 */
export interface DepartmentUserDetailVO {
  /**
   * @description 公司ID
   */
  companyId?: number;
  /**
   * @description 公司名称
   */
  companyName?: string;
  /**
   * @description 部门ID
   */
  departmentId?: number;
  /**
   * @description 部门名称
   */
  departmentName?: string;
  /**
   * @description 用户ID
   */
  id?: number;
  /**
   * @description 用户名
   */
  username?: string;
  /**
   * @description 用户昵称
   */
  nickname?: string;
  /**
   * @description 用户真实姓名
   */
  realName?: string;
  /**
   * @description 用户头像
   */
  avatar?: string;
  /**
   * @description 手机号码
   */
  phone?: string;
  /**
   * @description 性别：[unknow(0): 未知, man(1): 男, woman(2): 女]
   */
  gender?: number;
  /**
   * @description 用户邮箱
   */
  email?: string;
  /**
   * @description 身份证号码，脱敏数据
   */
  idNo?: string;
  /**
   * @description 用户启用状态：1：启用
   */
  enabled?: boolean;
}

/**
 * @description 接口返回封装
 */
export interface RListDepartmentUserDetailVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description 返回数据
   */
  data?: DepartmentUserDetailVO[];
}

/**
 * @description 接口返回封装
 */
export interface RDepartmentVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: DepartmentVO;
}

/**
 * @description 部门用户信息
 */
export interface DepartmentUserVO {
  /**
   * @description 用户ID
   */
  id?: number;
  /**
   * @description 用户名
   */
  username?: string;
  /**
   * @description 用户昵称
   */
  nickname?: string;
  /**
   * @description 用户真实姓名
   */
  realName?: string;
  /**
   * @description 用户头像
   */
  avatar?: string;
  /**
   * @description 手机号码
   */
  phone?: string;
  /**
   * @description 性别：[unknow(0): 未知, man(1): 男, woman(2): 女]
   */
  gender?: number;
  /**
   * @description 用户邮箱
   */
  email?: string;
  /**
   * @description 身份证号码，脱敏数据
   */
  idNo?: string;
  /**
   * @description 用户启用状态：1：启用
   */
  enabled?: string;
}

/**
 * @description 分页返回
 */
export interface PageVODepartmentUserVO {
  /**
   * @description 数据总数
   */
  count?: number;
  /**
   * @description 数据列表
   */
  list?: DepartmentUserVO[];
}

/**
 * @description 接口返回封装
 */
export interface RPageVODepartmentUserVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: PageVODepartmentUserVO;
}

/**
 * @description 接口返回封装
 */
export interface RCompanyVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: CompanyVO;
}

/**
 * @description 公司用户信息
 */
export interface CompanyUserVO {
  /**
   * @description 用户ID
   */
  id?: number;
  /**
   * @description 用户名
   */
  username?: string;
  /**
   * @description 用户昵称
   */
  nickname?: string;
  /**
   * @description 用户真实姓名
   */
  realName?: string;
  /**
   * @description 用户头像
   */
  avatar?: string;
  /**
   * @description 手机号码
   */
  phone?: string;
  /**
   * @description 性别：[unknow(0): 未知, man(1): 男, woman(2): 女]
   */
  gender?: number;
  /**
   * @description 用户邮箱
   */
  email?: string;
  /**
   * @description 身份证号码，脱敏数据
   */
  idNo?: string;
  /**
   * @description 用户启用状态：1：启用
   */
  enabled?: string;
}

/**
 * @description 分页返回
 */
export interface PageVOCompanyUserVO {
  /**
   * @description 数据总数
   */
  count?: number;
  /**
   * @description 数据列表
   */
  list?: CompanyUserVO[];
}

/**
 * @description 接口返回封装
 */
export interface RPageVOCompanyUserVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: PageVOCompanyUserVO;
}

/**
 * @description 分页返回
 */
export interface PageVOUserDetailVO {
  /**
   * @description 数据总数
   */
  count?: number;
  /**
   * @description 数据列表
   */
  list?: UserDetailVO[];
}

/**
 * @description 接口返回封装
 */
export interface RPageVOUserDetailVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: PageVOUserDetailVO;
}

/**
 * @description 用户信息
 */
export interface UserDetailVO {
  /**
   * @description 用户ID
   */
  id?: number;
  /**
   * @description 用户名
   */
  username?: string;
  /**
   * @description 用户昵称
   */
  nickname?: string;
  /**
   * @description 用户真实姓名
   */
  realName?: string;
  /**
   * @description 用户头像
   */
  avatar?: string;
  /**
   * @description 手机号码
   */
  phone?: string;
  /**
   * @description 性别：[unknow(0): 未知, man(1): 男, woman(2): 女]
   */
  gender?: number;
  /**
   * @description 用户邮箱
   */
  email?: string;
  /**
   * @description 身份证号码，脱敏数据
   */
  idNo?: string;
  /**
   * @description 用户启用状态：1：启用
   */
  enabled?: string;
  /**
   * @description 注册日期
   */
  gmtCreate?: string;
}

/**
 * @description 用户返回体
 */
export interface AccountVO {
  /**
   * @description 用户id
   */
  id?: number;
  /**
   * @description 用户名
   */
  username?: string;
  /**
   * @description 昵称
   */
  nickname?: string;
  /**
   * @description 头像
   */
  avatar?: string;
  /**
   * @description 电话
   */
  phone?: string;
  /**
   * @description 性别：[unknow(0): 未知, man(1): 男, woman(2): 女]
   */
  gender?: number;
  /**
   * @description 真实姓名
   */
  realName?: string;
  /**
   * @description 账号启用状态：[enable(1): 启用, disable(0): 禁用]
   */
  enabled?: string;
  /**
   * @description 注册时间
   */
  gmtCreate?: string;
  /**
   * @description 关联角色状态（传入角色id时）：1已绑定，0未绑定
   */
  refStatus?: number;
}

/**
 * @description 接口返回封装
 */
export interface RAccountVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: AccountVO;
}

/**
 * @description 登录信息（用于记录登录日志）
 */
export interface LoginUserInfoVO {
  /**
   * @description 用户ID
   */
  userId?: number;
  /**
   * @description 用户名
   */
  username?: string;
  /**
   * @description 公司ID
   */
  companyId?: number;
  /**
   * @description 公司名称
   */
  companyName?: string;
}

/**
 * @description 接口返回封装
 */
export interface RLoginUserInfoVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: LoginUserInfoVO;
}

/**
 * @description 图片验证码
 */
export interface ImageCaptchaVO {
  /**
   * @description 图片验证码ID
   */
  captchaId?: string;
  /**
   * @description 图片验证码Base64
   */
  captchaImage?: string;
}

/**
 * @description 接口返回封装
 */
export interface RImageCaptchaVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: ImageCaptchaVO;
}

/**
 * @description API 资源信息
 */
export interface ApiResourceVO {
  /**
   * @description 请求路径
   */
  paths?: string[];
  /**
   * @description 请求方法
   */
  methods?: string[];
  /**
   * @description 接口描述
   */
  summary?: string;
  /**
   * @description 接口分组
   */
  tag?: string;
}

/**
 * @description 接口返回封装
 */
export interface RListApiResourceVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description 返回数据
   */
  data?: ApiResourceVO[];
}

/**
 * @description 接口返回封装
 */
export interface RShortTokenVO {
  /**
   * @description 返回状态
   */
  code?: number;
  /**
   * @description 返回消息
   */
  msg?: string;
  /**
   * @description
   */
  data?: ShortTokenVO;
}

/**
 * @description 短令牌
 */
export interface ShortTokenVO {
  /**
   * @description 认证令牌
   */
  accessToken?: string;
  /**
   * @description 令牌有效期
   */
  expiresIn?: number;
}
