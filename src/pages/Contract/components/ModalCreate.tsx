import { Grid } from '@mui/material';
import SelectFieldLabel from 'components/CustomFields/SelectFieldLabel';
import TextFieldLabel from 'components/CustomFields/TextFieldLabel';
import Modal from 'components/Modal';
import { Field, Form, Formik } from 'formik';

const ModalCreate = ({ open, onClose }: { open: string; onClose: () => void }) => {
  //! define

  //! state

  //! function

  //! useEffect

  //! render
  return (
    <Modal
      open={open === 'create' || open === 'edit'}
      modalTitle={open === 'create' ? 'Thêm mới hợp đồng' : 'Sửa thông tin hợp đồng'}
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
                    component={SelectFieldLabel}
                    name='location'
                    label='Khách hàng'
                    placeholder='Vui lòng chọn'
                    options={[]}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={SelectFieldLabel}
                    name='location'
                    label='Tên gói tập'
                    placeholder='Vui lòng chọn'
                    options={[]}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextFieldLabel}
                    name='username'
                    label='Giá trị hoá đơn'
                    placeholder='Vui lòng nhập'
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={SelectFieldLabel}
                    name='location'
                    label='Phương thức thanh toán'
                    placeholder='Vui lòng chọn'
                    options={[]}
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
                <Grid item xs={12}>
                  <Field
                    component={TextFieldLabel}
                    name='time'
                    label='Thời hạn'
                    placeholder='Vui lòng nhập'
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextFieldLabel}
                    name='price'
                    label='Hiệu lức'
                    placeholder='Vui lòng nhập'
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={SelectFieldLabel}
                    name='location'
                    label='Cơ sở đăng ký'
                    placeholder='Vui lòng chọn'
                    options={[]}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={SelectFieldLabel}
                    name='location'
                    label='Loại hợp đồng'
                    placeholder='Vui lòng chọn'
                    options={[]}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextFieldLabel}
                    name='price'
                    label='Ghi chú'
                    placeholder='Vui lòng nhập'
                    required
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default ModalCreate;
