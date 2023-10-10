import { Grid } from '@mui/material';
import CommonStyles from 'components/CommonStyles';
import ButtonCreate from 'components/CustomButton/ButtonCreate';
import ButtonExport from 'components/CustomButton/ButtonExport';
import Calendar from 'components/CustomCalendar/Calendar';
import Header from 'components/CustomCalendar/Header';
import TaskForm from 'components/CustomCalendar/TaskForm';
import CustomToggle from 'components/CustomToggle';
import TablePaging from 'components/TablePaging';
import TableWrapper from 'components/TableWrapper';
import WrapperBlock from 'components/WrapperBlock';
import { IconCalendarBlack, IconEdit, IconHomeBlack } from 'components/assets/icons';
import { DEFAULT_PARAMSPAGE } from 'consts';
import CalendarState from '../../../context/CalendarContext';
import { IParamsPage } from 'interfaces/global';
import { useMemo, useState } from 'react';
import { renderStatusClassSchedule } from 'utils/renderStatus';
import SearchForm from './components/SearchForm';
import { useTheme } from '@emotion/react';

const tableHeader = [
  'STT',
  'Thời gian lớp học',
  'Tên lớp học',
  'Huấn luyện viên',
  'Số lượng học viên',
  'Trạng thái',
  'Hành động',
];

const dataFake = [
  {
    id: 1,
    time: '18:00 19:00',
    name: 'Lớp fat burning',
    coach: 'Mai Hồng Nhung',
    number: '20/30',
    status: 4,
  },
  {
    id: 2,
    time: '18:00 19:00',
    name: 'Lớp fat burning',
    coach: 'Mai Hồng Nhung',
    number: '20/30',
    status: 1,
  },
  {
    id: 3,
    time: '18:00 19:00',
    name: 'Lớp fat burning',
    coach: 'Mai Hồng Nhung',
    number: '20/30',
    status: 3,
  },
  {
    id: 4,
    time: '18:00 19:00',
    name: 'Lớp fat burning',
    coach: 'Mai Hồng Nhung',
    number: '20/30',
    status: 3,
  },
  {
    id: 5,
    time: '18:00 19:00',
    name: 'Lớp fat burning',
    coach: 'Mai Hồng Nhung',
    number: '20/30',
    status: 5,
  },
  {
    id: 6,
    time: '18:00 19:00',
    name: 'Lớp fat burning',
    coach: 'Mai Hồng Nhung',
    number: '20/30',
    status: 2,
  },
  {
    id: 7,
    time: '18:00 19:00',
    name: 'Lớp fat burning',
    coach: 'Mai Hồng Nhung',
    number: '20/30',
    status: 3,
  },
];

const ClassSchedule = () => {
  //! define
  const theme = useTheme();

  //! state
  const [paramsPage, setParamsPage] = useState<IParamsPage>(DEFAULT_PARAMSPAGE);
  const [openModal, setOpenModal] = useState<boolean>(false);

  //! function
  const rows = useMemo(() => {
    return dataFake.map((schedule, index) => {
      const { id, time, name, coach, number, status } = schedule;

      return [
        {
          value: index + 1,
        },
        {
          value: time,
        },
        {
          value: name,
        },
        {
          value: coach,
        },
        {
          value: number,
        },
        {
          value: renderStatusClassSchedule(status),
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
    <WrapperBlock title='Lịch lớp tập'>
      <Grid container spacing={2}>
        <Grid item md={5}>
          <SearchForm />
          <CalendarState>
            {/* <Header /> */}
            <Calendar />
            {/* <TaskForm /> */}
          </CalendarState>
        </Grid>
        <Grid item md={7}>
          <CommonStyles.Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              //   marginBottom: '10px',
              padding: '5px 0',
              background: '#8428E64D',
            }}
          >
            <CommonStyles.Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <CommonStyles.Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconHomeBlack />
                <CommonStyles.Typography sx={{ fontSize: '20px', fontWeight: 600 }}>
                  Cơ sở Cầu Giấy
                </CommonStyles.Typography>
              </CommonStyles.Box>
              <CommonStyles.Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconCalendarBlack />
                <CommonStyles.Typography sx={{ fontSize: '20px', fontWeight: 600 }}>
                  02/03/2023
                </CommonStyles.Typography>
              </CommonStyles.Box>
            </CommonStyles.Box>
            <CommonStyles.Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ButtonCreate handleClick={() => {}} />
              <ButtonExport handleClick={() => {}} />
            </CommonStyles.Box>
          </CommonStyles.Box>
          <TableWrapper rows={rows} headers={tableHeader} />
          <TablePaging count={100} paramsPage={paramsPage} setParamsPage={setParamsPage} />
        </Grid>
      </Grid>
    </WrapperBlock>
  );
};

export default ClassSchedule;
