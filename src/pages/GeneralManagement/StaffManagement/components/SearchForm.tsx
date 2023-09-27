import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Button from 'components/CustomButton';
import SelectField from 'components/CustomFields/SelectField';
import TextField from 'components/CustomFields/TextField';
import { Field, Form, Formik } from 'formik';
import { Fragment, useState } from 'react';
import * as Yup from 'yup';
import ModalCreateStaff from './ModalCreate';
import CommonStyles from 'components/CommonStyles';
import ButtonSearch from 'components/CustomButton/ButtonSearch';
import ButtonReload from 'components/CustomButton/ButtonReload';
import ButtonCreate from 'components/CustomButton/ButtonCreate';

const validationSearchForm = Yup.object().shape({
  name: Yup.string().required('Tên  là trường bắt buộc'),
});

const initialValues = {
  name: '',
};

const SearchForm = () => {
  //! define
  const theme = useTheme();

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
                  <ButtonSearch handleClick={() => {}} />
                  <ButtonReload handleClick={() => {}} />
                  <ButtonCreate handleClick={() => setOpenModal(true)} />
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
