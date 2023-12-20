import { useEffect, useState } from 'react';
import DepartmentService, {
  RequestGetDepartment,
  ResponseGetDepartment,
} from 'services/categoryDepartment/getListDepartment';

const useGetListDepartment = (body: RequestGetDepartment) => {
  //! define

  const [data, setData] = useState<ResponseGetDepartment[]>([]);
  //! state

  //! function
  const getListDepartment = async () => {
    try {
      const response = await DepartmentService.getListDepartment(body);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log('');
    }
  };

  const refresh = () => {
    getListDepartment();
  };

  //! useEffect
  useEffect(() => {
    getListDepartment();
  }, []);

  //! render
  return { data, refresh };
};

export default useGetListDepartment;
