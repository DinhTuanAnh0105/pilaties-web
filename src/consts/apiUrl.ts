export const BASE_URL = process.env.REACT_APP_PILATIES_URL;

export const USER_URL = `${BASE_URL}/auth/login`;
export const TODO_URL = `https://jsonplaceholder.typicode.com/photos`;

//! auth
export const AuthApi = {
  LOGIN: 'auth/login',
};

export const UserApi = {
  SEARCH: 'users/searchUser',
  INSERT: 'users/insertUser',
  UPDATE: 'users/updateUser',
};

export const DepartmentApi = {
  SEARCH: 'category/department/search',
  UPDATE: 'category/department/update',
  INSERT: 'category/department/insert',
  FINDBYID: 'category/department/findById',
};
