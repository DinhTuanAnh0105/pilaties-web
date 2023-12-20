export interface PrivilegeList {
  action: any;
  actived: number;
  code: string;
  id: number;
  meta: any;
  name: string;
  parentCode: any;
  path: string;
  type: any;
}

export interface RoleList {
  enabled: boolean;
  groupUser: any;
  id: number;
  name: string;
  type: number;
}

export interface RolePrivilegeList {
  action: string;
  id: number;
  privilegeId: number;
  roleId: number;
}

export interface UserInfo {
  accessToken: string;
  adminType: number;
  birthday: number;
  code: string;
  departmentId: number;
  email: string;
  fullName: string;
  gender: number;
  id: number;
  phoneNumber: string;
  positionId: number;
  privilegeList: PrivilegeList[];
  roleList: RoleList[];
  rolePrivilegeList: RolePrivilegeList[];
  type: number;
  username: string;
}
