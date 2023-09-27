import { IconButton, InputAdornment } from '@mui/material';
import { IconEye, IconEyeHide } from 'components/assets/icons';
import CommonStyles from 'components/CommonStyles';
import TextFieldLabel from 'components/CustomFields/TextFieldLabel';
import Modal from 'components/Modal';
import { Field, Form, Formik } from 'formik';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const ModalChangePass = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  //! define
  const initialValues = {
    password: '',
    newPassword: '',
    reNewPassword: '',
  };
  //! state
  const { t } = useTranslation();
  const formikref = useRef<any>();

  const [showPass, setShowPass] = useState<boolean>(false);
  const [showNewPass, setShowNewPass] = useState<boolean>(false);
  const [showReNewPass, setShowReNewPass] = useState<boolean>(false);

  //! function
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const handleShowNewPass = () => {
    setShowNewPass(!showNewPass);
  };
  const handleShowReNewPass = () => {
    setShowReNewPass(!showReNewPass);
  };
  const validationLoginSchema = Yup.object().shape({
    password: Yup.string().required(t('validation:v_password') || ''),
    newPassword: Yup.string().required(t('validation:v_password') || ''),
    reNewPassword: Yup.string().required(t('validation:v_password') || ''),
  });

  //! useEffect

  //! render
  return (
    <Modal
      open={open}
      modalTitle='Đổi mật khẩu'
      onClose={() => onClose()}
      onSubmit={() => formikref.current?.handleSubmit()}
      // maxWidth='md'
    >
      <Formik
        innerRef={formikref}
        onSubmit={() => {}}
        initialValues={initialValues}
        validationSchema={validationLoginSchema}
      >
        {() => {
          return (
            <Form>
              <CommonStyles.Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Field
                  component={TextFieldLabel}
                  name='password'
                  label='Mật khẩu hiện tại'
                  type={showPass ? 'text' : 'password'}
                  fullWidth
                  placeholder='Vui lòng nhập'
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleShowPass}>
                          {showPass ? <IconEyeHide /> : <IconEye />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Field
                  component={TextFieldLabel}
                  name='newPassword'
                  label='Mật khẩu mới'
                  type={showNewPass ? 'text' : 'password'}
                  fullWidth
                  placeholder='Vui lòng nhập'
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleShowNewPass}>
                          {showNewPass ? <IconEyeHide /> : <IconEye />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Field
                  component={TextFieldLabel}
                  name='reNewPassword'
                  label='Xác nhận mật khẩu mới'
                  type={showReNewPass ? 'text' : 'password'}
                  fullWidth
                  placeholder='Vui lòng nhập'
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleShowReNewPass}>
                          {showReNewPass ? <IconEyeHide /> : <IconEye />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </CommonStyles.Box>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default ModalChangePass;
