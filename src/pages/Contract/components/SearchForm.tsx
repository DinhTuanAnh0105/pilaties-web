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
import ModalCreate from './ModalCreate';

const validationSearchForm = Yup.object().shape({
  name: Yup.string().required('Tên  là trường bắt buộc'),
});

const initialValues = {
  name: '',
};

interface Props {
  openModal: string;
  setOpenModal: any;
}
const SearchForm = (props: Props) => {
  //! define
  const theme = useTheme();
  const navigate = useNavigate();
  const { openModal, setOpenModal } = props;

  //! state

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
                    label='SĐT, tên hoặc mã hội viên'
                    // required
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                  <Field
                    component={SelectField}
                    fullWidth
                    name='location'
                    label='Trạng thái duyệt'
                    options={[]}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                  <Field
                    component={SelectField}
                    fullWidth
                    name='location'
                    label='Trạng thái kích hoạt'
                    options={[]}
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
                <Grid item lg={3} sx={{ display: 'flex', gap: '8px' }}>
                  <ButtonSearch handleClick={() => {}} />
                  <ButtonReload handleClick={() => {}} />
                  <ButtonCreate handleClick={() => setOpenModal('create')} />
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
      {openModal && <ModalCreate open={openModal} onClose={() => setOpenModal('')} />}
    </Fragment>
  );
};

export default SearchForm;
