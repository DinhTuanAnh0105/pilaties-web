import { AxiosResponse } from 'axios';
import { BASE_URL, DepartmentApi } from 'consts/apiUrl';
import httpService from 'services/httpService';

export interface RequestGetDepartment {
  page: number;
  size: number;
}

export interface ResponseGetDepartment {
  actived: number;
  address: string;
  backgroundCode: string | null;
  buttonCode: string | null;
  cityId: number;
  code: string;
  createdBy: string | null;
  createdDate: string | null;
  districtId: number;
  email: string;
  id: number;
  level: number;
  managerId: number;
  modifiedBy: string | null;
  name: string;
  page: number | null;
  parentId: number;
  path: string;
  phoneNumber: string;
  size: number | null;
  sort: any;
}

class DepartmentService {
  getListDepartment(body: RequestGetDepartment): Promise<AxiosResponse<ResponseGetDepartment[]>> {
    return httpService.post(`${BASE_URL}/${DepartmentApi.SEARCH}`, body);
  }
}

export default new DepartmentService();
