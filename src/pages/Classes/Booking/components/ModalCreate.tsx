import CommonStyles from 'components/CommonStyles';
import SelectFieldLabel from 'components/CustomFields/SelectFieldLabel';
import TextFieldLabel from 'components/CustomFields/TextFieldLabel';
import Modal from 'components/Modal';
import { Field, Form, Formik } from 'formik';

const ModalCreate = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  //! define

  //! state

  //! function

  //! useEffect

  //! render
  return (
    <Modal
      open={open}
      modalTitle='Thêm mới booking'
      onClose={() => onClose()}
      onSubmit={() => {}}
      // maxWidth='md'
    >
      <Formik onSubmit={() => {}} initialValues={{}}>
        {(props) => {
          return (
            <Form>
              <CommonStyles.Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Field
                  component={SelectFieldLabel}
                  name='name'
                  label='Chọn hội viên'
                  placeholder='Vui lòng chọn'
                  required
                  fullWidth
                  options={[]}
                />
                <Field
                  component={SelectFieldLabel}
                  name='position'
                  label='Trung tâm'
                  placeholder='Vui lòng chọn'
                  options={[
                    {
                      label: 'Trung tâm 1',
                      value: 1,
                    },
                    {
                      label: 'Trung tâm 2',
                      value: 2,
                    },
                  ]}
                  required
                  fullWidth
                />
                <Field
                  component={SelectFieldLabel}
                  name='place'
                  label='Cơ sở'
                  placeholder='Vui lòng chọn'
                  options={[]}
                  required
                  fullWidth
                />
                <Field
                  component={TextFieldLabel}
                  name='time'
                  label='Chọn ngày tập'
                  placeholder='Vui lòng chọn'
                  required
                  fullWidth
                />
                <Field
                  component={SelectFieldLabel}
                  name='classes'
                  label='Chọn lớp tham gia'
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

export default ModalCreate;
