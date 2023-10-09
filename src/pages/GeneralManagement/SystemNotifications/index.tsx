import { Grid } from '@mui/material';
import CommonStyles from 'components/CommonStyles';
import TablePaging from 'components/TablePaging';
import TableWrapper from 'components/TableWrapper';
import WrapperBlock from 'components/WrapperBlock';
import { IconDelete, IconEdit } from 'components/assets/icons';
import { DEFAULT_PARAMSPAGE } from 'consts';
import { IParamsPage } from 'interfaces/global';
import React, { useMemo, useState } from 'react';
import SearchForm from './components/SearchForm';
import ModalCreateNotifications from './components/ModalCreate';

const tableHeader = ['STT', 'Tiêu đề', 'Nội dung', 'Thời gian gửi', 'Cơ sở', 'Hành động'];

const dataFake = [
  {
    id: 1,
    title: 'Chương trình ưu đãi tháng 7 dành cho thành viên',
    content: 'Giảm giá 30% cho cấc hội viên từ 30/06 - 30/7',
    time: '00:00 20/02/2023',
    place: 'Cơ sở Cầu Giấy',
  },
  {
    id: 2,
    title: 'Chương trình ưu đãi tháng 7 dành cho thành viên',
    content: 'Giảm giá 30% cho cấc hội viên từ 30/06 - 30/7',
    time: '00:00 20/02/2023',
    place: 'Cơ sở Cầu Giấy',
  },
  {
    id: 3,
    title: 'Chương trình ưu đãi tháng 7 dành cho thành viên',
    content: 'Giảm giá 30% cho cấc hội viên từ 30/06 - 30/7',
    time: '00:00 20/02/2023',
    place: 'Cơ sở Cầu Giấy',
  },
  {
    id: 4,
    title: 'Chương trình ưu đãi tháng 7 dành cho thành viên',
    content: 'Giảm giá 30% cho cấc hội viên từ 30/06 - 30/7',
    time: '00:00 20/02/2023',
    place: 'Cơ sở Cầu Giấy',
  },
  {
    id: 5,
    title: 'Chương trình ưu đãi tháng 7 dành cho thành viên',
    content: 'Giảm giá 30% cho cấc hội viên từ 30/06 - 30/7',
    time: '00:00 20/02/2023',
    place: 'Cơ sở Cầu Giấy',
  },
];

const SystemNotifications = () => {
  //! define

  //! state
  const [paramsPage, setParamsPage] = useState<IParamsPage>(DEFAULT_PARAMSPAGE);
  const [openModal, setOpenModal] = useState<boolean>(false);

  //! function
  const rows = useMemo(() => {
    return dataFake.map((noti, index) => {
      const { id, title, content, time, place } = noti;

      return [
        {
          value: index + 1,
        },
        {
          value: title,
        },
        {
          value: content,
        },
        {
          value: time,
        },
        {
          value: place,
        },

        {
          value: (
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CommonStyles.Box onClick={() => setOpenModal(true)} sx={{ cursor: 'pointer' }}>
                <IconEdit />
              </CommonStyles.Box>
              <CommonStyles.Box>
                <IconDelete />
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
    <WrapperBlock title='Thông báo hệ thống' count={10}>
      <SearchForm />
      <CommonStyles.Box>
        <TableWrapper rows={rows} headers={tableHeader} />
        <TablePaging count={100} paramsPage={paramsPage} setParamsPage={setParamsPage} />
      </CommonStyles.Box>
      {openModal && (
        <ModalCreateNotifications open={openModal} onClose={() => setOpenModal(false)} />
      )}
    </WrapperBlock>
  );
};

export default SystemNotifications;
