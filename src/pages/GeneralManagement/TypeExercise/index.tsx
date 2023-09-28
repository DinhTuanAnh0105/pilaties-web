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
import SearchForm from './components/SearchForm';

const tableHeader = ['STT', 'Loại hình tập luyện', 'Số loại lớp tập', 'Mô tả ngắn', 'Hành động'];

const dataFake = [
  {
    id: 1,
    type: 'PT',
    number: '6',
    des: 'PT là loại hình tập luyện 1-1 dành cho hội viên',
  },
  {
    id: 2,
    type: 'DT',
    number: '6',
    des: 'PT là loại hình tập luyện 1-1 dành cho hội viên',
  },
  {
    id: 3,
    type: 'GX',
    number: '6',
    des: 'PT là loại hình tập luyện 1-1 dành cho hội viên',
  },
];

const TypeExercise = () => {
  //! define

  //! state
  const [paramsPage, setParamsPage] = useState<IParamsPage>(DEFAULT_PARAMSPAGE);

  //! function
  const rows = useMemo(() => {
    return dataFake.map((typeExercise, index) => {
      const { id, type, number, des } = typeExercise;

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
          value: des,
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
    <WrapperBlock title='Danh sách loại hình tập luyện' count={10}>
      <SearchForm />
      <CommonStyles.Box>
        <TableWrapper rows={rows} headers={tableHeader} />
        <TablePaging count={100} paramsPage={paramsPage} setParamsPage={setParamsPage} />
      </CommonStyles.Box>
    </WrapperBlock>
  );
};

export default TypeExercise;
