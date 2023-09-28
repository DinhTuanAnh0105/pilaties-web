import CommonStyles from 'components/CommonStyles';
import TextFieldLabel from 'components/CustomFields/TextFieldLabel';
import Modal from 'components/Modal';
import { Field, Form, Formik } from 'formik';

const ModalCreateTypeExercise = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  //! define

  //! state

  //! function

  //! useEffect

  //! render
  return (
    <Modal
      open={open}
      modalTitle='Thêm mới loại hình tập luyện'
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
                  component={TextFieldLabel}
                  name='name'
                  label='Tên loại hình tập luyện'
                  placeholder='Nhập tên loại hình tập luyện'
                  required
                  fullWidth
                />
                <Field
                  component={TextFieldLabel}
                  name='des'
                  label='Mô tả ngắn'
                  placeholder='Nhập mô tả ngắn'
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

export default ModalCreateTypeExercise;
