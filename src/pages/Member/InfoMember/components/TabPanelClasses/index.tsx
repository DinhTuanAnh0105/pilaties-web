import WrapperBlock from 'components/WrapperBlock';
import React, { useMemo, useState } from 'react';
import SearchForm from './SearchForm';
import CommonStyles from 'components/CommonStyles';
import TableWrapper from 'components/TableWrapper';
import TablePaging from 'components/TablePaging';
import { IParamsPage } from 'interfaces/global';
import { DEFAULT_PARAMSPAGE } from 'consts';
import { renderStatusClasses } from 'utils/renderStatus';

const tableHeader = ['STT', 'Tên lớp', 'Huấn luyện viên', 'Thời gian', 'Cơ sở', 'Trạng thái'];

const dataFake = [
  {
    id: 1,
    name: 'Dance',
    coach: 'Bob',
    time: '02/02/2023 20:30 - 21:30',
    place: 'Cơ sở Cầu Giấy',
    status: 4,
  },
  {
    id: 6,
    name: 'Dance',
    coach: 'Bob',
    time: '02/02/2023 20:30 - 21:30',
    place: 'Cơ sở Cầu Giấy',
    status: 3,
  },
  {
    id: 2,
    name: 'Dance',
    coach: 'Bob',
    time: '02/02/2023 20:30 - 21:30',
    place: 'Cơ sở Cầu Giấy',
    status: 5,
  },
  {
    id: 3,
    name: 'Dance',
    coach: 'Bob',
    time: '02/02/2023 20:30 - 21:30',
    place: 'Cơ sở Cầu Giấy',
    status: 6,
  },
  {
    id: 4,
    name: 'Dance',
    coach: 'Bob',
    time: '02/02/2023 20:30 - 21:30',
    place: 'Cơ sở Cầu Giấy',
    status: 1,
  },
  {
    id: 5,
    name: 'Dance',
    coach: 'Bob',
    time: '02/02/2023 20:30 - 21:30',
    place: 'Cơ sở Cầu Giấy',
    status: 2,
  },
];

const TabPanelClasses = () => {
  //! define

  //! state
  const [paramsPage, setParamsPage] = useState<IParamsPage>(DEFAULT_PARAMSPAGE);

  //! function
  const rows = useMemo(() => {
    return dataFake.map((classes, index) => {
      const { id, name, coach, time, place, status } = classes;

      return [
        {
          value: index + 1,
        },
        {
          value: name,
        },
        {
          value: coach,
        },
        {
          value: time,
        },
        {
          value: place,
        },
        {
          value: renderStatusClasses(status),
        },
      ];
    });
  }, [dataFake]);

  //! useEffect

  //! render
  return (
    <WrapperBlock>
      <SearchForm />
      <CommonStyles.Box>
        <TableWrapper rows={rows} headers={tableHeader} />
        <TablePaging count={100} paramsPage={paramsPage} setParamsPage={setParamsPage} />
      </CommonStyles.Box>
    </WrapperBlock>
  );
};
export default TabPanelClasses;
