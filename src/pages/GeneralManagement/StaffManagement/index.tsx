import { Grid } from '@mui/material';
import CommonStyles from 'components/CommonStyles';
import CustomToggle from 'components/CustomToggle';
import TablePaging from 'components/TablePaging';
import TableWrapper from 'components/TableWrapper';
import WrapperBlock from 'components/WrapperBlock';
import { IconEdit } from 'components/assets/icons';
import { DEFAULT_PARAMSPAGE } from 'consts';
import { IParamsPage } from 'interfaces/global';
import { useMemo, useState } from 'react';
import ModalCreateStaff from './components/ModalCreate';
import SearchForm from './components/SearchForm';
import useGetListUser from 'hooks/users/useGetListUser';
import useGetListDepartment from 'hooks/category_department/useGetListDepartment';

const tableHeader = [
  'STT',
  'Mã trung tâm',
  'Ảnh đại diện',
  'Tên trung tâm',
  'Địa chỉ',
  'Số điện thoại',
  'Người quản lý',
  'Hành động',
];

const dataFake = [
  {
    id: 1,
    code: 'TT213213',
    logo: '',
    name: 'Trung tâm cầu giấy',
    address: 'Số 48, Xuân Thuỷ, Cầu Giấy',
    phoneNumber: '0934355643',
    manager: 'Nguyễn Thị Anh',
  },
  {
    id: 2,
    code: 'TT213213',
    logo: '',
    name: 'Trung tâm cầu giấy',
    address: 'Số 48, Xuân Thuỷ, Cầu Giấy',
    phoneNumber: '0934355643',
    manager: 'Nguyễn Thị Anh',
  },
  {
    id: 3,
    code: 'TT213213',
    logo: '',
    name: 'Trung tâm cầu giấy',
    address: 'Số 48, Xuân Thuỷ, Cầu Giấy',
    phoneNumber: '0934355643',
    manager: 'Nguyễn Thị Anh',
  },
];

const PageStaffManagement = () => {
  //! state
  const [paramsPage, setParamsPage] = useState<IParamsPage>(DEFAULT_PARAMSPAGE);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { data: listUser } = useGetListUser();

  console.log('data', listUser);

  const { data: listDepartment } = useGetListDepartment({ page: 0, size: 1000 });

  console.log('listDepartment', listDepartment);

  //! function
  const rows = useMemo(() => {
    return listUser.map((staff, index) => {
      const { id, code, phoneNumber, departmentId } = staff;

      return [
        {
          value: index + 1,
        },
        {
          value: () => {
            console.log('departmentId', departmentId);

            return {};
          },
        },
        // {
        //   value: logo,
        // },
        {
          value: name,
        },
        // {
        //   value: address,
        // },
        {
          value: phoneNumber,
        },
        // {
        //   value: manager,
        // },
        {
          value: (
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CommonStyles.Box onClick={() => setOpenModal(true)} sx={{ cursor: 'pointer' }}>
                <IconEdit />
              </CommonStyles.Box>
              <CustomToggle />
            </Grid>
          ),
        },
      ];
    });
  }, [dataFake]);

  //! useEffect

  //! render
  return (
    <WrapperBlock title='Danh sách nhân viên' count={10}>
      <SearchForm />
      <CommonStyles.Box>
        <TableWrapper rows={rows} headers={tableHeader} />
        <TablePaging count={100} paramsPage={paramsPage} setParamsPage={setParamsPage} />
      </CommonStyles.Box>
      {openModal && <ModalCreateStaff open={openModal} onClose={() => setOpenModal(false)} />}
    </WrapperBlock>
  );
};

export default PageStaffManagement;
