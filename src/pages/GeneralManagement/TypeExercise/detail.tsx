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
import SearchFormDetail from './components/SearchFormDetail';

const tableHeader = [
  'STT',
  'Loại lớp',
  'Số lượng hội viên tối đa',
  'Thời gian diễn ra',
  'Hành động',
];

const dataFake = [
  {
    id: 1,
    type: 'GX Dance',
    number: '6',
    time: '60 phút',
  },
  {
    id: 2,
    type: 'GX Dance',
    number: '6',
    time: '60 phút',
  },
  {
    id: 3,
    type: 'PT 1-1',
    number: '6',
    time: '60 phút',
  },
];

const DetailTypeExercise = () => {
  //! define

  //! state
  const [paramsPage, setParamsPage] = useState<IParamsPage>(DEFAULT_PARAMSPAGE);

  //! function
  const rows = useMemo(() => {
    return dataFake.map((detail, index) => {
      const { id, type, number, time } = detail;

      return [
        {
          value: index + 1,
        },
        {
          value: type,
        },
        {
          value: number,
        },
        {
          value: time,
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
    <WrapperBlock title='Danh sách loại lớp học của loại hình PT (n)' count={10}>
      <SearchFormDetail />
      <CommonStyles.Box>
        <TableWrapper rows={rows} headers={tableHeader} />
        <TablePaging count={100} paramsPage={paramsPage} setParamsPage={setParamsPage} />
      </CommonStyles.Box>
    </WrapperBlock>
  );
};

export default DetailTypeExercise;
