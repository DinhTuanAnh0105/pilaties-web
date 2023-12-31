import { DialogActions } from '@mui/material';
import { IconAddImage } from 'components/assets/icons';
import CommonStyles from 'components/CommonStyles';
import ButtonCancel from 'components/CustomButton/ButtonCancel';
import ButtonSave from 'components/CustomButton/ButtonSave';
import SelectFieldLabel from 'components/CustomFields/SelectFieldLabel';
import TextFieldLabel from 'components/CustomFields/TextFieldLabel';
import WrapperBlock from 'components/WrapperBlock';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { handleReadImage } from 'utils/handleReadImage';

const AccountInfo = () => {
  //! define

  //! state
  const [selectedImage, setSelectedImage] = useState<any>(null);

  //! function

  //! useEffect

  //! render
  return (
    <CommonStyles.Box sx={{ maxWidth: '750px', margin: 'auto' }}>
      <WrapperBlock title='Thông tin tài khoản'>
        <Formik onSubmit={() => {}} initialValues={{}}>
          {() => {
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
                          objectFit: 'cover',
                        }}
                      />
                    ) : (
                      <IconAddImage />
                    )}
                  </label>

                  <Field
                    component={TextFieldLabel}
                    name='username'
                    label='Tên nhân viên'
                    placeholder='Nhập tên nhân viên'
                    required
                    fullWidth
                  />
                  <Field
                    component={TextFieldLabel}
                    name='usercode'
                    label='Mã nhân viên'
                    placeholder='Nhập mã nhân viên'
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
                    name='role'
                    label='Chức vụ'
                    placeholder='Vui lòng chọn'
                    options={[
                      {
                        label: 'Giám đốc',
                        value: 1,
                      },
                      {
                        label: 'Nhân viên',
                        value: 2,
                      },
                    ]}
                    required
                    fullWidth
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
        <DialogActions>
          <ButtonCancel handleClick={() => {}} />
          <ButtonSave handleClick={() => {}} />
        </DialogActions>
      </WrapperBlock>
    </CommonStyles.Box>
  );
};

export default AccountInfo;
