import { Grid } from '@mui/material';
import CommonStyles from 'components/CommonStyles';
import CustomToggle from 'components/CustomToggle';
import TablePaging from 'components/TablePaging';
import TableWrapper from 'components/TableWrapper';
import WrapperBlock from 'components/WrapperBlock';
import { IconEdit } from 'components/assets/icons';
import { DEFAULT_PARAMSPAGE } from 'consts';
import { IParamsPage } from 'interfaces/global';
import React, { useMemo, useState } from 'react';
import { renderStatusContract } from 'utils/renderStatus';
import SearchForm from './components/SearchForm';

const tableHeader = [
  'STT',
  'Mã hội viên',
  'Ảnh đại diện',
  'Tên hội viên',
  'Số điện thoại',
  'Email',
  'Trung tâm',
  'Cơ sở đăng ký',
  'Số buổi còn lại',
  'Trạng thái kích hoạt HĐ',
  'Hoạt động gần nhất',
  'Ngày hết hạn',
  'Hành động',
];

const dataFake = [
  {
    id: 1,
    code: 'TT213213',
    avatar: '',
    name: 'Nguyễn Thị Anh',
    phoneNumber: '0934355643',
    email: 'anhnt@gmail.com',
    position: 'Pilates Lab',
    place: 'Cơ sở 2',
    remain: '20/30',
    statusContract: 3,
    recent: '20 ngày trước',
    expired: '22/12/2022',
  },
  {
    id: 2,
    code: 'TT213213',
    avatar: '',
    name: 'Nguyễn Thị Anh',
    phoneNumber: '0934355643',
    email: 'anhnt@gmail.com',
    position: 'Pilates Lab',
    place: 'Cơ sở 2',
    remain: '20/30',
    statusContract: 2,
    recent: '20 ngày trước',
    expired: '22/12/2022',
  },
  {
    id: 3,
    code: 'TT213213',
    avatar: '',
    name: 'Nguyễn Thị Anh',
    phoneNumber: '0934355643',
    email: 'anhnt@gmail.com',
    position: 'Pilates Lab',
    place: 'Cơ sở 2',
    remain: '20/30',
    statusContract: 1,
    recent: '20 ngày trước',
    expired: '22/12/2022',
  },
  {
    id: 4,
    code: 'TT213213',
    avatar: '',
    name: 'Nguyễn Thị Anh',
    phoneNumber: '0934355643',
    email: 'anhnt@gmail.com',
    position: 'Pilates Lab',
    place: 'Cơ sở 2',
    remain: '20/30',
    statusContract: 1,
    recent: '20 ngày trước',
    expired: '22/12/2022',
  },
];

const ListMember = () => {
  //! define

  //! state
  const [paramsPage, setParamsPage] = useState<IParamsPage>(DEFAULT_PARAMSPAGE);

  //! function
  const rows = useMemo(() => {
    return dataFake.map((member, index) => {
      const {
        id,
        code,
        avatar,
        name,
        phoneNumber,
        email,
        position,
        place,
        remain,
        statusContract,
        recent,
        expired,
      } = member;

      return [
        {
          value: index + 1,
        },
        {
          value: code,
        },
        {
          value: avatar,
        },
        {
          value: name,
        },
        {
          value: phoneNumber,
        },
        {
          value: email,
        },
        {
          value: position,
        },
        {
          value: place,
        },
        {
          value: remain,
        },
        {
          value: renderStatusContract(statusContract),
        },
        {
          value: recent,
        },
        {
          value: expired,
        },
        {
          value: (
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CommonStyles.Box sx={{ cursor: 'pointer' }}>
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
    <WrapperBlock title='Danh sách hội viên' count={13454}>
      <SearchForm />
      <CommonStyles.Box>
        <TableWrapper rows={rows} headers={tableHeader} />
        <TablePaging count={100} paramsPage={paramsPage} setParamsPage={setParamsPage} />
      </CommonStyles.Box>
    </WrapperBlock>
  );
};

export default ListMember;
