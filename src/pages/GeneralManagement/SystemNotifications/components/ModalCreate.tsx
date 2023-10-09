import CommonStyles from 'components/CommonStyles';
import SelectFieldLabel from 'components/CustomFields/SelectFieldLabel';
import TextFieldLabel from 'components/CustomFields/TextFieldLabel';
import TextEditor from 'components/CustomTextEditor';
import Modal from 'components/Modal';
import { IconAddImage } from 'components/assets/icons';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { handleReadImage } from 'utils/handleReadImage';

const ModalCreateNotifications = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  //! define

  //! state
  const [selectedImage, setSelectedImage] = useState<any>(null);

  //! function

  //! useEffect

  //! render
  return (
    <Modal
      open={open}
      modalTitle='Thêm mới thông báo'
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
                  name='title'
                  label='Tiêu đề'
                  placeholder='Nhập tiêu đề'
                  required
                  fullWidth
                />
                <Field
                  component={TextEditor}
                  name='content'
                  label='Nội dung'
                  placeholder='Nhập nội dung'
                  required
                  fullWidth
                />
                <Field
                  component={TextFieldLabel}
                  name='date'
                  label='Ngày gửi'
                  placeholder='Nhập ngày gửi'
                  required
                  fullWidth
                />
                <Field
                  component={TextFieldLabel}
                  name='time'
                  label='Giờ gửi'
                  placeholder='Nhập giờ gửi'
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

export default ModalCreateNotifications;
