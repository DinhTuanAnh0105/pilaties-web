import { Grid } from '@mui/material';
import ButtonCreate from 'components/CustomButton/ButtonCreate';
import ButtonReload from 'components/CustomButton/ButtonReload';
import ButtonSearch from 'components/CustomButton/ButtonSearch';
import SelectField from 'components/CustomFields/SelectField';
import TextField from 'components/CustomFields/TextField';
import { Field, Form, Formik } from 'formik';
import { Fragment } from 'react';

const SearchForm = () => {
  //! define

  //! state

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
                  <Field component={TextField} fullWidth name='name' label='Tên lớp' />
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                  <Field component={TextField} fullWidth name='coach' label='Huấn luyện viên' />
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                  <Field component={TextField} fullWidth name='time' label='Ngày diễn ra' />
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                  <Field
                    component={SelectField}
                    fullWidth
                    name='place'
                    label='Cơ sở'
                    options={[]}
                  />
                </Grid>

                <Grid item lg={4} sx={{ display: 'flex', gap: '8px' }}>
                  <ButtonSearch handleClick={() => {}} />
                  <ButtonReload handleClick={() => {}} />
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
