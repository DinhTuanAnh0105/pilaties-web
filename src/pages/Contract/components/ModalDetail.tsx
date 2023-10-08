import { Checkbox, Grid } from '@mui/material';
import CommonStyles from 'components/CommonStyles';
import RadioField from 'components/CustomFields/RadioField';
import SelectField from 'components/CustomFields/SelectField';
import SelectFieldLabel from 'components/CustomFields/SelectFieldLabel';
import TextFieldLabel from 'components/CustomFields/TextFieldLabel';
import Modal from 'components/Modal';
import TableWrapper from 'components/TableWrapper';
import { Field, Form, Formik } from 'formik';
import { useMemo } from 'react';

const tableHeader = ['STT', 'Thời gian cập nhật', 'Nội dung'];

const dataFake = [
  {
    id: 1,
    time: 'Tất cả',
    content: 'Số 48, Xuân Thủy, Cầu Giấy, Hà Nội',
  },
  {
    id: 2,
    time: 'Cơ sở 1',
    content: 'Số 48, Xuân Thủy, Cầu Giấy, Hà Nội',
  },
  {
    id: 3,
    time: 'Cơ sở 2',
    content: 'Số 48, Xuân Thủy, Cầu Giấy, Hà Nội',
  },
];
const ModalDetail = ({ open, onClose }: { open: string; onClose: () => void }) => {
  //! define

  //! state

  //! function
  const rows = useMemo(() => {
    return dataFake.map((staff, index) => {
      const { time, content } = staff;

      return [
        {
          value: index + 1,
        },
        {
          value: time,
        },
        {
          value: content,
        },
      ];
    });
  }, [dataFake]);

  //! useEffect

  //! render
  return (
    <Modal
      open={open === 'create' || open === 'edit'}
      modalTitle={open === 'create' ? 'Thêm mới gói tập' : 'Sửa thông tin gói tập'}
      onClose={() => onClose()}
      onSubmit={() => {}}
    >
      <Grid item xs={12}>
        <TableWrapper rows={rows} headers={tableHeader} />
      </Grid>
    </Modal>
  );
};

export default ModalDetail;
