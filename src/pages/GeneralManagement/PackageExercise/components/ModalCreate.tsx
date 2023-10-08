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

const tableHeader = ['Tên cơ sở', 'Địa chỉ', 'Phân quyền tập'];

const dataFake = [
  {
    id: 1,
    name: 'Tất cả',
    address: 'Số 48, Xuân Thủy, Cầu Giấy, Hà Nội',
  },
  {
    id: 2,
    name: 'Cơ sở 1',
    address: 'Số 48, Xuân Thủy, Cầu Giấy, Hà Nội',
  },
  {
    id: 3,
    name: 'Cơ sở 2',
    address: 'Số 48, Xuân Thủy, Cầu Giấy, Hà Nội',
  },
];
const ModalCreate = ({ open, onClose }: { open: string; onClose: () => void }) => {
  //! define

  //! state

  //! function
  const rows = useMemo(() => {
    return dataFake.map((staff, index) => {
      const { name, address } = staff;

      return [
        {
          value: name,
        },
        {
          value: address,
        },
        {
          value: (
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CommonStyles.Box onClick={() => {}} sx={{ cursor: 'pointer' }}>
                <Checkbox
                  color='primary'
                  // indeterminate={numSelected > 0 && numSelected < rowCount}
                  // checked={}
                  // onChange={}
                  inputProps={{
                    'aria-label': 'select all desserts',
                  }}
                />
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
    <Modal
      open={open === 'create' || open === 'edit'}
      modalTitle={open === 'create' ? 'Thêm mới gói tập' : 'Sửa thông tin gói tập'}
      onClose={() => onClose()}
      onSubmit={() => {}}
    >
      <Formik onSubmit={() => {}} initialValues={{ type: '1' }}>
        {({ values }) => {
          return (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    component={TextFieldLabel}
                    name='username'
                    label='Tên gói tập'
                    placeholder='Vui lòng nhập'
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    component={TextFieldLabel}
                    name='numberPT'
                    label='Số buổi PT'
                    placeholder='Vui lòng nhập'
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    component={TextFieldLabel}
                    name='numberDT'
                    label='Số buổi DT'
                    placeholder='Vui lòng nhập'
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    component={TextFieldLabel}
                    name='numberGX'
                    label='Số buổi GX'
                    placeholder='Vui lòng nhập'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={TextFieldLabel}
                    name='time'
                    label='Thời hạn'
                    placeholder='Vui lòng nhập'
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={TextFieldLabel}
                    name='price'
                    label='Giá niêm yết'
                    placeholder='Vui lòng nhập'
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={RadioField}
                    name='type'
                    label='Phân loại'
                    placeholder='Vui lòng nhập'
                    required
                    fullWidth
                    values={[
                      { value: '1', label: 'Chỉ 1 cơ sở' },
                      { value: '2', label: 'Nhiều cơ sở' },
                    ]}
                  />
                </Grid>
                {open === 'edit' && (
                  <Grid item xs={12}>
                    <Field
                      component={SelectFieldLabel}
                      name='location'
                      label='Cơ sở'
                      options={[]}
                      required
                      fullWidth
                    />
                  </Grid>
                )}
                {values.type === '2' && (
                  <Grid item xs={12}>
                    <TableWrapper rows={rows} headers={tableHeader} />
                  </Grid>
                )}
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default ModalCreate;
