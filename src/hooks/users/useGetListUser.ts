import { useEffect, useState } from 'react';
import httpService from 'services/httpService';
import UserService, { ResponseGetListUser } from 'services/userService/getListUser';

const useGetListUser = () => {
  //! state
  const profile = httpService.getUserStorage();

  const [data, setData] = useState<ResponseGetListUser[]>([]);

  //! function
  const body = {
    fullName: profile && profile.fullName,
    username: profile && profile.username,
    page: 0,
    size: 15,
  };

  const getListUser = async () => {
    try {
      const response = await UserService.getListUser(body);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log('');
    }
  };

  const refresh = () => {
    getListUser();
  };

  //! useEffect
  useEffect(() => {
    getListUser();
  }, []);

  //! render
  return { data, refresh };
};

export default useGetListUser;
