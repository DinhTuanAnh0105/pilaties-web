import { Grid } from '@mui/material';
import CustomToggle from 'components/CustomToggle';
import TablePaging from 'components/TablePaging';
import TableWrapper from 'components/TableWrapper';
import { IconEdit } from 'components/assets/icons';
import { DEFAULT_PARAMSPAGE } from 'consts';
import { IParamsPage } from 'interfaces/global';
import React, { ChangeEvent, useMemo, useState } from 'react';
import SearchForm from './components/SearchForm';
import CommonStyles from 'components/CommonStyles';
import BlockTitle from 'components/BlockTitle';
import WrapperBlock from 'components/WrapperBlock';
import Modal from 'components/Modal';
import ModalCreateStaff from './components/ModalCreate';

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
  // {
  //   id: 4,
  //   code: 'TT213213',
  //   logo: '',
  //   name: 'Trung tâm cầu giấy',
  //   address: 'Số 48, Xuân Thuỷ, Cầu Giấy',
  //   phoneNumber: '0934355643',
  //   manager: 'Nguyễn Thị Anh',
  // },
];

const PageStaffManagement = () => {
  //! define

  //! state
  const [paramsPage, setParamsPage] = useState<IParamsPage>(DEFAULT_PARAMSPAGE);
  const [openModal, setOpenModal] = useState<boolean>(false);

  //! function
  const rows = useMemo(() => {
    return dataFake.map((staff, index) => {
      const { id, code, logo, name, address, phoneNumber, manager } = staff;

      return [
        {
          value: index + 1,
        },
        {
          value: code,
        },
        {
          value: logo,
        },
        {
          value: name,
        },
        {
          value: address,
        },
        {
          value: phoneNumber,
        },
        {
          value: manager,
        },
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
