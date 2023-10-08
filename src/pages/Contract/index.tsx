import { Grid } from '@mui/material';
import { IconEdit } from 'components/assets/icons';
import CommonStyles from 'components/CommonStyles';
import Box from 'components/CommonStyles/Box';
import CustomToggle from 'components/CustomToggle';
import TablePaging from 'components/TablePaging';
import TableWrapper from 'components/TableWrapper';
import WrapperBlock from 'components/WrapperBlock';
import { DEFAULT_PARAMSPAGE } from 'consts';
import BaseUrl from 'consts/baseUrl';
import { IParamsPage } from 'interfaces/global';
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalCreate from './components/ModalCreate';
import SearchForm from './components/SearchForm';

const tableHeader = [
  'STT',
  'Mã hợp đồng',
  'Tên hội viên',
  'Tên gói đăng ký',
  'Nội dung gói tập',
  'Hiệu lực',
  'Giá bán(VND)',
  'Trung tâm',
  'Cơ sở',
  'Thời gian cập nhật',
  'Trạng thái duyệt',
  'Trạng thái kích hoạt',
  'Hành động',
];

const dataFake = [
  {
    id: 1,
    code: 'HD173987',
    nameMember: 'Nguyễn Thị Anh',
    packageName: 'Gói tập luyện 1',
    content: 'GX: 20 buổi PT: 20 buổi',
    effect: '02/02/2023-02/02/2023',
    price: '2.000.000',
    position: 'Trung tâm 1',
    place: 'Cơ sở 1',
    timeUpdate: '02/02/2023',
  },
  {
    id: 2,
    code: 'HD173987',
    nameMember: 'Nguyễn Thị Anh',
    packageName: 'Gói tập luyện 1',
    content: 'GX: 20 buổi PT: 20 buổi',
    effect: '02/02/2023-02/02/2023',
    price: '2.000.000',
    position: 'Trung tâm 1',
    place: 'Cơ sở 1',
    timeUpdate: '02/02/2023',
  },
  {
    id: 3,
    code: 'HD173987',
    nameMember: 'Nguyễn Thị Anh',
    packageName: 'Gói tập luyện 1',
    content: 'GX: 20 buổi PT: 20 buổi',
    effect: '02/02/2023-02/02/2023',
    price: '2.000.000',
    position: 'Trung tâm 1',
    place: 'Cơ sở 1',
    timeUpdate: '02/02/2023',
  },
];

const Contract = () => {
  //! define
  const navigate = useNavigate();

  //! state
  const [paramsPage, setParamsPage] = useState<IParamsPage>(DEFAULT_PARAMSPAGE);

  const [openModal, setOpenModal] = useState<string>('');

  //! function
  const rows = useMemo(() => {
    return dataFake.map((staff, index) => {
      const {
        id,
        code,
        content,
        effect,
        nameMember,
        packageName,
        price,
        position,
        timeUpdate,
        place,
      } = staff;

      return [
        {
          value: <Box onClick={() => {}}>{index + 1}</Box>,
        },
        {
          value: code,
        },
        {
          value: nameMember,
        },
        {
          value: packageName,
        },
        {
          value: content,
        },
        {
          value: effect,
        },
        {
          value: price,
        },
        {
          value: position,
        },
        {
          value: place,
        },
        {
          value: timeUpdate,
        },
        {
          value: '',
        },
        {
          value: '',
        },
        {
          value: (
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CommonStyles.Box onClick={() => setOpenModal('edit')} sx={{ cursor: 'pointer' }}>
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
    <WrapperBlock title='Danh sách hợp đồng' count={100}>
      <SearchForm openModal={openModal} setOpenModal={setOpenModal} />
      <CommonStyles.Box>
        <TableWrapper rows={rows} headers={tableHeader} />
        <TablePaging count={100} paramsPage={paramsPage} setParamsPage={setParamsPage} />
      </CommonStyles.Box>

      {openModal && <ModalCreate open={openModal} onClose={() => setOpenModal('')} />}
    </WrapperBlock>
  );
};

export default Contract;
