import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment, useTheme } from '@mui/material';
import {
  IconEye,
  IconEyeHide,
  IconFlagEngland,
  IconFlagKorea,
  IconFlagVN,
} from 'components/assets/icons';
import { ImageLogo } from 'components/assets/images';
import CommonStyles from 'components/CommonStyles';
import TextFieldLabel from 'components/CustomFields/TextFieldLabel';
import TextField from 'components/CustomFields/TextFieldLabel';
import BaseUrl from 'consts/baseUrl';
import { Field, Form, Formik } from 'formik';
import { showError } from 'helpers/toast';
import { useAuth } from 'providers/AuthenticationProvider';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';
import * as Yup from 'yup';
// import logo from 'assets/images/logo.svg';

const Login = () => {
  //! State
  const { t } = useTranslation();
  const auth = useAuth();
  const theme = useTheme();
  const { login } = useAuth();

  const [language, setLanguage] = useState<string>('vietnamese');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  //! Function
  const validationLoginSchema = Yup.object().shape({
    username: Yup.string().required(t('validation:v_username') || ''),
    password: Yup.string().required(t('validation:v_password') || ''),
  });

  const languages = [
    {
      id: 'vietnamese',
      name: t('shared:vietnamese'),
      flag: <IconFlagVN />,
    },
    {
      id: 'korean',
      name: t('shared:korean'),
      flag: <IconFlagKorea />,
    },
    {
      id: 'english',
      name: t('shared:english'),
      flag: <IconFlagEngland />,
    },
  ];

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //! Render
  if (auth.isLogged) {
    return <Navigate to={BaseUrl.Homepage} />;
  }

  return (
    <CommonStyles.Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ededed',
        // p: 2,
      }}
    >
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationLoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            const { username, password } = values;
            setSubmitting(true);
            login({ username, password });
            setSubmitting(false);
          } catch (error) {
            showError(error);
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => {
          return (
            <CommonStyles.Box
              sx={{
                boxShadow: 2,
                p: 4,
                borderRadius: 1.25,
                backgroundColor: theme.colors?.white,
                width: 446,
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <CommonStyles.Box
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <ImageLogo />
                <CommonStyles.Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 600,
                    lineHeight: '36px',
                    color: '#8428E6',
                    ml: 1,
                  }}
                >
                  {t('shared:nameapp')}
                </CommonStyles.Typography>
              </CommonStyles.Box>
              <CommonStyles.Box sx={{ textAlign: 'center' }}>
                <CommonStyles.Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 600,
                    lineHeight: '36px',
                    color: '#374957',
                  }}
                >
                  {t('shared:login')}
                </CommonStyles.Typography>
              </CommonStyles.Box>
              <Form>
                <CommonStyles.Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    '& > div': {
                      mb: 2,
                    },
                  }}
                >
                  <Field
                    component={TextFieldLabel}
                    name='username'
                    fullWidth
                    label='Tên đăng nhập'
                    required
                    placeholder='Nhập số điện thoại'
                  />
                  <Field
                    component={TextFieldLabel}
                    name='password'
                    label='Mật khẩu'
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    placeholder='Nhập mật khẩu'
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton onClick={handleShowPassword}>
                            {showPassword ? <IconEyeHide /> : <IconEye />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </CommonStyles.Box>
                <CommonStyles.Button
                  type='submit'
                  loading={isSubmitting}
                  fullWidth
                  sx={{
                    background: theme?.colors?.secondary?.purple,
                    height: 40,
                    borderRadius: '10px',
                    padding: '12px 24px',
                    '&:hover': { backgroundColor: `${theme?.colors?.secondary?.purple}33` },
                  }}
                >
                  {t('shared:login')}
                </CommonStyles.Button>
              </Form>
              <CommonStyles.Box sx={{ display: 'flex', gap: '17px', justifyContent: 'center' }}>
                {languages.map((item) => {
                  return (
                    <CommonStyles.Box
                      key={item.id}
                      className='login__chooselanguage'
                      sx={{
                        display: 'flex',
                        gap: 1,
                        alignItems: 'center',
                        background: item.id === language ? '#d9d9d9' : null,
                        cursor: 'pointer',
                        padding: 1,
                        borderRadius: '6px',
                        color: '#111',
                      }}
                      onClick={() => setLanguage(item.id)}
                    >
                      {item.flag}
                      <CommonStyles.Typography
                        sx={{ fontSize: 14, fontWeight: 600, lineHeight: '18px' }}
                      >
                        {item.name}
                      </CommonStyles.Typography>
                    </CommonStyles.Box>
                  );
                })}
              </CommonStyles.Box>
            </CommonStyles.Box>
          );
        }}
      </Formik>
    </CommonStyles.Box>
  );
};

export default React.memo(Login);
