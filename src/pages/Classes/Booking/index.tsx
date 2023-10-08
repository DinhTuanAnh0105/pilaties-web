import { Grid } from '@mui/material';
import CommonStyles from 'components/CommonStyles';
import CustomToggle from 'components/CustomToggle';
import TablePaging from 'components/TablePaging';
import TableWrapper from 'components/TableWrapper';
import WrapperBlock from 'components/WrapperBlock';
import { IconAgree, IconDisagree, IconEdit } from 'components/assets/icons';
import { DEFAULT_PARAMSPAGE } from 'consts';
import { IParamsPage } from 'interfaces/global';
import { useMemo, useState } from 'react';
import SearchForm from './components/SearchForm';
import { renderStatusBooking } from 'utils/renderStatus';
import ModalCreate from './components/ModalCreate';

const tableHeader = [
  'STT',
  'Tên hội viên',
  'Lớp tập',
  'Trung tâm',
  'Cơ sở',
  'Thời gian đặt',
  'Lý do huỷ đặt chỗ',
  'Trạng thái',
  'Hành động',
];

const dataFake = [
  {
    id: 1,
    name: 'Nguyễn Thị Anh',
    classes: 'GX Dance',
    location: 'Trung tâm 1',
    place: 'Cơ sở 1',
    time: '00:00 20/02/2023',
    reason: null,
    status: 1,
  },
  {
    id: 2,
    name: 'Nguyễn Thị Anh',
    classes: 'GX Dance',
    location: 'Trung tâm 1',
    place: 'Cơ sở 1',
    time: '00:00 20/02/2023',
    reason: null,
    status: 1,
  },
  {
    id: 3,
    name: 'Nguyễn Thị Anh',
    classes: 'GX Dance',
    location: 'Trung tâm 1',
    place: 'Cơ sở 1',
    time: '00:00 20/02/2023',
    reason: 'Hội viên đi khám bệnh',
    status: 1,
  },
  {
    id: 4,
    name: 'Nguyễn Thị Anh',
    classes: 'GX Dance',
    location: 'Trung tâm 1',
    place: 'Cơ sở 1',
    time: '00:00 20/02/2023',
    reason: null,
    status: 2,
  },
  {
    id: 5,
    name: 'Nguyễn Thị Anh',
    classes: 'GX Dance',
    location: 'Trung tâm 1',
    place: 'Cơ sở 1',
    time: '00:00 20/02/2023',
    reason: null,
    status: 4,
  },
  {
    id: 6,
    name: 'Nguyễn Thị Anh',
    classes: 'GX Dance',
    location: 'Trung tâm 1',
    place: 'Cơ sở 1',
    time: '00:00 20/02/2023',
    reason: null,
    status: 3,
  },
  {
    id: 7,
    name: 'Nguyễn Thị Anh',
    classes: 'GX Dance',
    location: 'Trung tâm 1',
    place: 'Cơ sở 1',
    time: '00:00 20/02/2023',
    reason: 'Hội viên đi khám bệnh',
    status: 5,
  },
  {
    id: 8,
    name: 'Nguyễn Thị Anh',
    classes: 'GX Dance',
    location: 'Trung tâm 1',
    place: 'Cơ sở 1',
    time: '00:00 20/02/2023',
    reason: null,
    status: 1,
  },
];

const Booking = () => {
  //! define

  //! state
  const [paramsPage, setParamsPage] = useState<IParamsPage>(DEFAULT_PARAMSPAGE);
  const [openModal, setOpenModal] = useState<boolean>(false);

  //! function
  const rows = useMemo(() => {
    return dataFake.map((staff, index) => {
      const { id, name, classes, location, place, time, reason, status } = staff;

      return [
        {
          value: index + 1,
        },
        {
          value: name,
        },
        {
          value: classes,
        },
        {
          value: location,
        },
        {
          value: place,
        },
        {
          value: time,
        },
        {
          value: reason && (
            <CommonStyles.Box
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
            >
              {reason}
              {status === 5 && (
                <CommonStyles.Box>
                  <IconAgree />
                  <IconDisagree />
                </CommonStyles.Box>
              )}
            </CommonStyles.Box>
          ),
        },
        {
          value: renderStatusBooking(status),
        },
        {
          value: (
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CommonStyles.Box onClick={() => setOpenModal(true)} sx={{ cursor: 'pointer' }}>
                <IconEdit />
              </CommonStyles.Box>
              <CommonStyles.Box>
                <IconDisagree />
              </CommonStyles.Box>
            </Grid>
          ),
        },
      ];
    });
  }, [dataFake]);

  //! useEffect

  //! render
  return (
    <WrapperBlock title='Danh sách booking' count={120}>
      <SearchForm />
      <CommonStyles.Box>
        <TableWrapper rows={rows} headers={tableHeader} />
        <TablePaging count={100} paramsPage={paramsPage} setParamsPage={setParamsPage} />
      </CommonStyles.Box>
      {openModal && <ModalCreate open={openModal} onClose={() => setOpenModal(false)} />}
    </WrapperBlock>
  );
};

export default Booking;
