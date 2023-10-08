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
  'Tên gói tập',
  'Nội dung gói tập',
  'Thời hạn',
  'Giá bán(VND)',
  'Trung tâm',
  'Cơ sở',
  'Hành động',
];

const dataFake = [
  {
    id: 1,
    code: 'Gói tập GX1',
    content: 'GX: 20 buổi PT: 20 buổi',
    time: '1 năm',
    name: 'Trung tâm cầu giấy',
    price: '2.000.000',
    place: 'Cơ sở Cầu giấy',
  },
  {
    id: 2,
    code: 'Gói tập GX1',
    content: 'GX: 20 buổi PT: 20 buổi',
    time: '1 năm',
    name: 'Trung tâm cầu giấy',
    price: '2.000.000',
    place: 'Cơ sở Cầu giấy',
  },
  {
    id: 3,
    code: 'Gói tập GX1',
    content: 'GX: 20 buổi PT: 20 buổi',
    time: '1 năm',
    name: 'Trung tâm cầu giấy',
    price: '2.000.000',
    place: 'Cơ sở Cầu giấy',
  },
];

const PagePackageExerciseManagement = () => {
  //! define
  const navigate = useNavigate();

  //! state
  const [paramsPage, setParamsPage] = useState<IParamsPage>(DEFAULT_PARAMSPAGE);

  const [openModal, setOpenModal] = useState<string>('');

  //! function
  const rows = useMemo(() => {
    return dataFake.map((staff, index) => {
      const { id, code, content, name, price, time, place } = staff;

      return [
        {
          value: <Box onClick={() => {}}>{index + 1}</Box>,
        },
        {
          value: code,
        },
        {
          value: content,
        },
        {
          value: time,
        },
        {
          value: price,
        },
        {
          value: name,
        },
        {
          value: place,
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
    <WrapperBlock title='Danh sách gói tập' count={100}>
      <SearchForm openModal={openModal} setOpenModal={setOpenModal} />
      <CommonStyles.Box>
        <TableWrapper rows={rows} headers={tableHeader} />
        <TablePaging count={100} paramsPage={paramsPage} setParamsPage={setParamsPage} />
      </CommonStyles.Box>

      {openModal && <ModalCreate open={openModal} onClose={() => setOpenModal('')} />}
    </WrapperBlock>
  );
};

export default PagePackageExerciseManagement;
