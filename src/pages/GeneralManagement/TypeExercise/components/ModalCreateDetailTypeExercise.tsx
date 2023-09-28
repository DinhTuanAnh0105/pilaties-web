import CommonStyles from 'components/CommonStyles';
import TextFieldLabel from 'components/CustomFields/TextFieldLabel';
import Modal from 'components/Modal';
import { Field, Form, Formik } from 'formik';

const ModalCreateDetailTypeExercise = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  //! define

  //! state

  //! function

  //! useEffect

  //! render
  return (
    <Modal
      open={open}
      modalTitle='Thêm mới loại lớp học'
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
                  label='Tên loại lớp học'
                  placeholder='Nhập tên loại lớp học'
                  required
                  fullWidth
                />
                <Field
                  component={TextFieldLabel}
                  name='type'
                  label='Loại hình tập luyện'
                  placeholder='Nhập Loại hình tập luyện'
                  required
                  fullWidth
                />
                <Field
                  component={TextFieldLabel}
                  name='time'
                  label='Thời gian diễn ra'
                  placeholder='Nhập thời gian diễn ra'
                  fullWidth
                  required
                />
                <Field
                  component={TextFieldLabel}
                  name='number'
                  label='Số lượng học viên tối da'
                  placeholder='Nhập số lượng học viên tối đa'
                  fullWidth
                  required
                />
              </CommonStyles.Box>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default ModalCreateDetailTypeExercise;
