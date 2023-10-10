import { Box, Checkbox, Dialog, DialogActions, DialogContent, Grid } from '@mui/material';
import CommonStyles from 'components/CommonStyles';
import RadioField from 'components/CustomFields/RadioField';
import SelectField from 'components/CustomFields/SelectField';
import SelectFieldLabel from 'components/CustomFields/SelectFieldLabel';
import TextFieldLabel from 'components/CustomFields/TextFieldLabel';
import Modal from 'components/Modal';
import TableWrapper from 'components/TableWrapper';
import { Field, Form, Formik } from 'formik';
import { useMemo, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { minWidth } from '@mui/system';
import Typography from 'components/CommonStyles/Typography';
import ButtonClose from 'components/CustomButton/ButtonClose';
import TablePaging from 'components/TablePaging';
import { IParamsPage } from 'interfaces/global';
import { DEFAULT_PARAMSPAGE } from 'consts';

const tableHeader = ['STT', 'Thời gian cập nhật', 'Nội dung'];

const dataFake = [
  {
    id: 1,
    time: 'Tất cả',
    content1: 'Đỗ Mai Phương',
    content2: 'Trung tâm 1',
    content3: 'Gói tập 1, Gói tập 2',
    content4: 'PT: 1, DT: 10, GX: 2',
    content5: '0989877666',
    content6: '3 tháng',
    content7: 'Cơ sở Cầu giấy',
    content8: 'Đăng ký mới',
  },
  {
    id: 2,
    time: 'Cơ sở 1',
    content1: 'Đỗ Mai Phương',
    content2: 'Trung tâm 1',
    content3: 'Gói tập 1, Gói tập 2',
    content4: 'PT: 1, DT: 10, GX: 2',
    content5: '0989877666',
    content6: '3 tháng',
    content7: 'Cơ sở Cầu giấy',
    content8: 'Đăng ký mới',
  },
  {
    id: 3,
    time: 'Cơ sở 2',
    content1: 'Đỗ Mai Phương',
    content2: 'Trung tâm 1',
    content3: 'Gói tập 1, Gói tập 2',
    content4: 'PT: 1, DT: 10, GX: 2',
    content5: '0989877666',
    content6: '3 tháng',
    content7: 'Cơ sở Cầu giấy',
    content8: 'Đăng ký mới',
  },
];
const ModalDetail = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  //! define
  const theme = useTheme();

  //! state
  const [paramsPage, setParamsPage] = useState<IParamsPage>(DEFAULT_PARAMSPAGE);

  //! function
  const renderContent = (title: string, values: string) => {
    return (
      <>
        <Box
          sx={{
            flex: 1,
            color: theme.colors?.textColor?.text1,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '18px',
          }}
        >
          {title}
        </Box>
        <Box
          sx={{
            flex: 1,
            color: theme.colors?.textColor?.text1,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '18px',
          }}
        >
          {values}
        </Box>
      </>
    );
  };
  const rows = useMemo(() => {
    return dataFake.map((staff, index) => {
      const {
        time,
        content1,
        content2,
        content3,
        content4,
        content5,
        content6,
        content7,
        content8,
      } = staff;

      return [
        {
          value: index + 1,
        },
        {
          value: <Box sx={{ minWidth: 150 }}> {time}</Box>,
        },
        {
          value: (
            <Grid container spacing={2}>
              <Grid item xs={6} sx={{ display: 'flex', textAlign: 'start' }}>
                {renderContent('Khách hàng', content1)}
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', textAlign: 'start' }}>
                {renderContent('Phương thức thanh toán', content2)}
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', textAlign: 'start' }}>
                {renderContent('Tên gói tập', content3)}
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', textAlign: 'start' }}>
                {renderContent('Số buổi tập', content4)}
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', textAlign: 'start' }}>
                {renderContent('Giá trị hoá đơn', content5)}
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', textAlign: 'start' }}>
                {renderContent('Thời hạn', content6)}
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', textAlign: 'start' }}>
                {renderContent('Cơ sở đăng ký', content7)}
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', textAlign: 'start' }}>
                {renderContent('Loại hợp đồng', content8)}
              </Grid>
            </Grid>
          ),
        },
      ];
    });
  }, [dataFake]);

  //! useEffect

  //! render
  return (
    <Dialog open={open} onClose={onClose} fullWidth sx={{ zIndex: 1201 }} maxWidth='lg'>
      <CommonStyles.Box sx={{ margin: '24px' }}>
        <Typography sx={{ fontSize: '32px', fontWeight: 700, lineHeight: '48px' }}>
          Thông tin gói tập
        </Typography>
        <DialogContent sx={{ p: 1 }}>
          <Grid item xs={12}>
            <TableWrapper rows={rows} headers={tableHeader} />
            <TablePaging count={100} paramsPage={paramsPage} setParamsPage={setParamsPage} />
          </Grid>
        </DialogContent>
        <DialogActions>
          <ButtonClose handleClick={onClose} />
        </DialogActions>
      </CommonStyles.Box>
    </Dialog>
  );
};

export default ModalDetail;
