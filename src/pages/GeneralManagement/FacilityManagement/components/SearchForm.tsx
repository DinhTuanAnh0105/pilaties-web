import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ButtonCreate from 'components/CustomButton/ButtonCreate';
import ButtonReload from 'components/CustomButton/ButtonReload';
import ButtonSearch from 'components/CustomButton/ButtonSearch';
import SelectField from 'components/CustomFields/SelectField';
import TextField from 'components/CustomFields/TextField';
import BaseUrl from 'consts/baseUrl';
import { Field, Form, Formik } from 'formik';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import ModalCreateStaff from './ModalCreate';

const validationSearchForm = Yup.object().shape({
  name: Yup.string().required('Tên  là trường bắt buộc'),
});

const initialValues = {
  name: '',
};

const SearchForm = () => {
  //! define
  const theme = useTheme();
  const navigate = useNavigate();

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
                    label='Tên trung tâm'
                    // required
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                  <Field
                    component={SelectField}
                    fullWidth
                    name='location'
                    label='Người quản lý'
                    options={[
                      {
                        label: 'Người quản lý 1',
                        value: 1,
                      },
                      {
                        label: 'Người quản lý 2',
                        value: 2,
                      },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                  <Field
                    component={SelectField}
                    fullWidth
                    name='location'
                    label='Tỉnh thành'
                    options={[]}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                  <Field
                    component={SelectField}
                    fullWidth
                    name='location'
                    label='Quận huyện'
                    options={[]}
                  />
                </Grid>
                <Grid item lg={4} sx={{ display: 'flex', gap: '8px' }}>
                  <ButtonSearch handleClick={() => {}} />
                  <ButtonReload handleClick={() => {}} />
                  <ButtonCreate handleClick={() => navigate(BaseUrl.CreateFacilityManagement)} />
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
