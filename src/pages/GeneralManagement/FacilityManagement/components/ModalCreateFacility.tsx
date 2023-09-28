import CommonStyles from 'components/CommonStyles';
import SelectFieldLabel from 'components/CustomFields/SelectFieldLabel';
import TextFieldLabel from 'components/CustomFields/TextFieldLabel';
import Modal from 'components/Modal';
import { Field, Form, Formik } from 'formik';

const ModalCreateFacility = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  //! define

  //! state

  //! function

  //! useEffect

  //! render
  return (
    <Modal open={open} modalTitle='Thêm mới cơ sở' onClose={() => onClose()} onSubmit={() => {}}>
      <Formik onSubmit={() => {}} initialValues={{}}>
        {(props) => {
          return (
            <Form>
              <CommonStyles.Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Field
                  component={TextFieldLabel}
                  name='username'
                  label='Tên cơ sở'
                  placeholder='Vui lòng nhập'
                  required
                  fullWidth
                />
                <Field
                  component={TextFieldLabel}
                  name='usercode'
                  label='Mã cơ sở'
                  placeholder='Vui lòng nhập'
                  required
                  fullWidth
                />
                <Field
                  component={TextFieldLabel}
                  name='phoneNumber'
                  label='Số điện thoại'
                  placeholder='Vui lòng nhập'
                  required
                  fullWidth
                />
                <Field
                  component={TextFieldLabel}
                  name='email'
                  label='Email'
                  placeholder='Vui lòng nhập'
                  fullWidth
                />
                <Field
                  component={TextFieldLabel}
                  name='Address'
                  label='Địa chỉ'
                  placeholder='Vui lòng nhập'
                  required
                  fullWidth
                />
                <Field
                  component={SelectFieldLabel}
                  name='role'
                  label='Tỉnh/Thành phố'
                  placeholder='Vui lòng chọn'
                  options={[]}
                  required
                  fullWidth
                />
                <Field
                  component={SelectFieldLabel}
                  name='role'
                  label='Quân/Huyện'
                  placeholder='Vui lòng chọn'
                  options={[]}
                  required
                  fullWidth
                />
                <Field
                  component={SelectFieldLabel}
                  name='position'
                  label='Người quản lý'
                  placeholder='Vui lòng chọn'
                  options={[]}
                  required
                  fullWidth
                />
              </CommonStyles.Box>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default ModalCreateFacility;
