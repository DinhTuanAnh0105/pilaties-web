import { Grid } from '@mui/material';
import Button from 'components/CustomButton';
import SelectField from 'components/CustomFields/SelectField';
import TextField from 'components/CustomFields/TextField';
import Modal from 'components/Modal';
import { IconAddImage } from 'components/assets/icons';
import { Field, Form, Formik } from 'formik';
import { Fragment, useState } from 'react';
import * as Yup from 'yup';
import CommonStyles from 'components/CommonStyles';
import TextFieldLabel from 'components/CustomFields/TextFieldLabel';
import SelectFieldLabel from 'components/CustomFields/SelectFieldLabel';
import ModalCreateStaff from './ModalCreate';

const validationSearchForm = Yup.object().shape({
  name: Yup.string().required('Tên  là trường bắt buộc'),
});

const initialValues = {
  name: '',
};

const SearchForm = () => {
  //! define

  //! state
  const [openModal, setOpenModal] = useState<boolean>(false);

  //! function

  //! useEffect

  //! render
  return (
    <Fragment>
      <Formik
        onSubmit={(values) => console.log('values', values)}
        initialValues={initialValues}
        // validationSchema={validationSearchForm}
      >
        {(propsFormik: any) => {
          return (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={2}>
                  <Field
                    component={TextField}
                    fullWidth
                    name='name'
                    label='Tên hoặc mã nhân viên'
                    // required
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                  <Field
                    component={SelectField}
                    fullWidth
                    name='location'
                    label='Trung tâm'
                    options={[
                      {
                        label: 'Trung tâm cầu giấy',
                        value: 1,
                      },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                  <Field
                    component={SelectField}
                    fullWidth
                    name='location'
                    label='Cơ sở'
                    options={[]}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                  <Field
                    component={SelectField}
                    fullWidth
                    name='location'
                    label='Chức vụ'
                    options={[]}
                  />
                </Grid>
                <Grid item lg={4} sx={{ display: 'flex', gap: '8px' }}>
                  <Button type='submit'>Tìm kiếm</Button>
                  <Button>Trả lại</Button>
                  <Button onClick={() => setOpenModal(true)}>Thêm mới</Button>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
      {openModal && <ModalCreateStaff open={openModal} onClose={() => setOpenModal(false)} />}
    </Fragment>
  );
};

export default SearchForm;
