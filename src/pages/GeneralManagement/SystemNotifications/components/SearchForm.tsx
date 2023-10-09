import { Grid } from '@mui/material';
import ButtonCreate from 'components/CustomButton/ButtonCreate';
import ButtonReload from 'components/CustomButton/ButtonReload';
import ButtonSearch from 'components/CustomButton/ButtonSearch';
import SelectField from 'components/CustomFields/SelectField';
import TextField from 'components/CustomFields/TextField';
import { Field, Form, Formik } from 'formik';
import { Fragment, useState } from 'react';
import ModalCreateNotifications from './ModalCreate';

const SearchForm = () => {
  //! define

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
                    component={TextField}
                    fullWidth
                    name='time'
                    label='Ngày gửi (Từ - Đến)'
                    // required
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
      {openModal && (
        <ModalCreateNotifications open={openModal} onClose={() => setOpenModal(false)} />
      )}
    </Fragment>
  );
};

export default SearchForm;
