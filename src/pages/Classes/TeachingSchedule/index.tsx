import { Grid } from '@mui/material';
import CommonStyles from 'components/CommonStyles';
import TablePaging from 'components/TablePaging';
import TableWrapper from 'components/TableWrapper';
import WrapperBlock from 'components/WrapperBlock';
import { DEFAULT_PARAMSPAGE } from 'consts';
import { IParamsPage } from 'interfaces/global';
import React, { useMemo, useState } from 'react';
import { renderStatus } from 'utils/renderStatus';
import SearchForm from './components/SearchForm';

const tableHeader = [
  'STT',
  'Huấn luyện viên',
  'Tên lớp',
  'Ngày diễn ra',
  'Thời gian diễn ra',
  'Số hội viên thực tế đặt chỗ',
  'Trung tâm',
  'Cơ sở',
  'Trạng thái',
];

const dataFake = [
  {
    id: 1,
    coach: 'Bob - TT213213',
    className: 'GX Dance',
    date: '02/02/2023',
    time: '18:00 - 19:00',
    number: '5/6',
    position: 'Trung tâm 1',
    place: 'Cơ sở Cầu Giấy',
    status: 4,
  },
  {
    id: 2,
    coach: 'Bob - TT213213',
    className: 'GX Dance',
    date: '02/02/2023',
    time: '18:00 - 19:00',
    number: '5/6',
    position: 'Trung tâm 1',
    place: 'Cơ sở Cầu Giấy',
    status: 2,
  },
  {
    id: 3,
    coach: 'Bob - TT213213',
    className: 'GX Dance',
    date: '02/02/2023',
    time: '18:00 - 19:00',
    number: '5/6',
    position: 'Trung tâm 1',
    place: 'Cơ sở Cầu Giấy',
    status: 5,
  },
  {
    id: 4,
    coach: 'Bob - TT213213',
    className: 'GX Dance',
    date: '02/02/2023',
    time: '18:00 - 19:00',
    number: '5/6',
    position: 'Trung tâm 1',
    place: 'Cơ sở Cầu Giấy',
    status: 3,
  },
  {
    id: 5,
    coach: 'Bob - TT213213',
    className: 'GX Dance',
    date: '02/02/2023',
    time: '18:00 - 19:00',
    number: '5/6',
    position: 'Trung tâm 1',
    place: 'Cơ sở Cầu Giấy',
    status: 3,
  },
  {
    id: 6,
    coach: 'Bob - TT213213',
    className: 'GX Dance',
    date: '02/02/2023',
    time: '18:00 - 19:00',
    number: '5/6',
    position: 'Trung tâm 1',
    place: 'Cơ sở Cầu Giấy',
    status: 4,
  },
  {
    id: 7,
    coach: 'Bob - TT213213',
    className: 'GX Dance',
    date: '02/02/2023',
    time: '18:00 - 19:00',
    number: '5/6',
    position: 'Trung tâm 1',
    place: 'Cơ sở Cầu Giấy',
    status: 1,
  },
  {
    id: 8,
    coach: 'Bob - TT213213',
    className: 'GX Dance',
    date: '02/02/2023',
    time: '18:00 - 19:00',
    number: '5/6',
    position: 'Trung tâm 1',
    place: 'Cơ sở Cầu Giấy',
    status: 5,
  },
];

const TeachingSchedule = () => {
  //! define

  //! state
  const [paramsPage, setParamsPage] = useState<IParamsPage>(DEFAULT_PARAMSPAGE);

  //! function
  const rows = useMemo(() => {
    return dataFake.map((schedule, index) => {
      const { id, coach, className, date, time, number, position, place, status } = schedule;

      return [
        {
          value: index + 1,
        },
        {
          value: coach,
        },
        {
          value: className,
        },
        {
          value: date,
        },
        {
          value: time,
        },
        {
          value: number,
        },
        {
          value: position,
        },
        {
          value: place,
        },
        {
          value: renderStatus(status),
        },
      ];
    });
  }, [dataFake]);

  //! useEffect

  //! render
  return (
    <WrapperBlock title='Danh sách lịch dạy của huấn luyện viên' count={10}>
      <SearchForm />
      <CommonStyles.Box>
        <TableWrapper rows={rows} headers={tableHeader} />
        <TablePaging count={100} paramsPage={paramsPage} setParamsPage={setParamsPage} />
      </CommonStyles.Box>
    </WrapperBlock>
  );
};

export default TeachingSchedule;
