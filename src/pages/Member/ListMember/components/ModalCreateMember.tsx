import CommonStyles from 'components/CommonStyles';
import SelectFieldLabel from 'components/CustomFields/SelectFieldLabel';
import TextFieldLabel from 'components/CustomFields/TextFieldLabel';
import Modal from 'components/Modal';
import { IconAddImage } from 'components/assets/icons';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { handleReadImage } from 'utils/handleReadImage';

interface IProp {
  open: boolean;
  onClose: () => void;
}

const ModalCreateMember = (props: IProp) => {
  //! define
  const { open, onClose } = props;

  //! state
  const [selectedImage, setSelectedImage] = useState<any>(null);

  //! function

  //! useEffect

  //! render
  return (
    <Modal
      open={open}
      modalTitle='Thêm mới hội viên'
      onClose={() => onClose()}
      onSubmit={() => {}}
      // maxWidth='md'
    >
      <Formik onSubmit={() => {}} initialValues={{}}>
        {(props) => {
          return (
            <Form>
              <CommonStyles.Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <input
                  type='file'
                  id='modal-create-staff'
                  onChange={(event) => handleReadImage(event, setSelectedImage)}
                />
                <label
                  htmlFor='modal-create-staff'
                  style={{
                    cursor: 'pointer',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                  }}
                >
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt='Avatar'
                      style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        border: '1px solid #d9d9d9',
                      }}
                    />
                  ) : (
                    <IconAddImage />
                  )}
                </label>

                <Field
                  component={TextFieldLabel}
                  name='username'
                  label='Tên hội viên'
                  placeholder='Nhập tên hội viên'
                  required
                  fullWidth
                />
                <Field
                  component={TextFieldLabel}
                  name='usercode'
                  label='Mã hội viên'
                  placeholder='Nhập mã hội viên'
                  required
                  fullWidth
                />
                <Field
                  component={TextFieldLabel}
                  name='phoneNumber'
                  label='Số điện thoại'
                  placeholder='Nhập số điện thoại'
                  required
                  fullWidth
                />
                <Field
                  component={SelectFieldLabel}
                  name='position'
                  label='Trung tâm'
                  placeholder='Vui lòng chọn trung tâm'
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
                  label='Cơ sở đăng ký'
                  placeholder='Vui lòng chọn cơ sở đăng ký'
                  options={[
                    {
                      label: 'Cơ sở 1',
                      value: 1,
                    },
                    {
                      label: 'Cơ sở 2',
                      value: 2,
                    },
                  ]}
                  required
                  fullWidth
                />
                <Field
                  component={TextFieldLabel}
                  name='email'
                  label='Email'
                  placeholder='Nhập email'
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

export default ModalCreateMember;
