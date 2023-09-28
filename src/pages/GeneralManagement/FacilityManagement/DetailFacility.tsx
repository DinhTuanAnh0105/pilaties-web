import { DialogActions } from '@mui/material';
import CommonStyles from 'components/CommonStyles';
import ButtonCancel from 'components/CustomButton/ButtonCancel';
import ButtonSave from 'components/CustomButton/ButtonSave';
import SelectFieldLabel from 'components/CustomFields/SelectFieldLabel';
import TextFieldLabel from 'components/CustomFields/TextFieldLabel';
import WrapperBlock from 'components/WrapperBlock';
import { Field, Form, Formik } from 'formik';
import React from 'react';

const DetailFacility = () => {
  //! define

  //! state

  //! function

  //! useEffect

  //! render
  return (
    <CommonStyles.Box sx={{ maxWidth: '750px', margin: 'auto' }}>
      <WrapperBlock title='Thông tin cơ sở'>
        <Formik onSubmit={() => {}} initialValues={{}}>
          {() => {
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
        <DialogActions>
          <ButtonCancel handleClick={() => {}} />
          <ButtonSave handleClick={() => {}} />
        </DialogActions>
      </WrapperBlock>
    </CommonStyles.Box>
  );
};

export default DetailFacility;
