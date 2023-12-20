import { Axios, AxiosResponse } from 'axios';
import { BASE_URL, UserApi } from 'consts/apiUrl';
import httpService from 'services/httpService';

export interface RequestGetListUser {
  fullName: string | null;
  username: string | null;
  page: number;
  size: number;
}
export interface ResponseGetListUser {
  accessToken: string | null;
  actived: number;
  adminType: number;
  birthday: number;
  code: string;
  createdBy: number;
  createdDate: string;
  departmentId: number;
  email: string;
  fullName: string;
  gender: number;
  id: number;
  modifiedBy: number;
  modifiedDate: string;
  page: number | null;
  phoneNumber: string;
  positionId: number;
  privilegeList: any;
  roleList: any;
  rolePrivilegeList: any;
  size: number | null;
  sort: any;
  total: number;
  type: number;
  username: string;
}

class UserService {
  getListUser(body: RequestGetListUser): Promise<AxiosResponse<ResponseGetListUser[]>> {
    return httpService.post(`${BASE_URL}/${UserApi.SEARCH}`, body);
  }
}

export default new UserService();
