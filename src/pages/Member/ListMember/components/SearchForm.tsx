import { DialogActions, Grid } from '@mui/material';
import ButtonCreate from 'components/CustomButton/ButtonCreate';
import ButtonReload from 'components/CustomButton/ButtonReload';
import ButtonSearch from 'components/CustomButton/ButtonSearch';
import SelectField from 'components/CustomFields/SelectField';
import TextField from 'components/CustomFields/TextField';
import { Field, Form, Formik } from 'formik';
import { Fragment, useState } from 'react';

const SearchForm = () => {
  //! define∏

  //! state
  const [openModal, setOpenModal] = useState<boolean>(false);

  //! function

  //! useEffect

  //! render
  return (
    <Fragment>
      <Formik onSubmit={(values) => console.log('values', values)} initialValues={{}}>
        {(propsFormik: any) => {
          return (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={2}>
                  <Field component={TextField} fullWidth name='name' label='Tên hoặc mã hội viên' />
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                  <Field component={TextField} fullWidth name='phoneNumber' label='Số điện thoại' />
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
                  <Field component={TextField} fullWidth name='remain' label='Số buổi còn lại' />
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                  <Field component={TextField} fullWidth name='recent' label='Hoạt động gần nhất' />
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
    </Fragment>
  );
};

export default SearchForm;
