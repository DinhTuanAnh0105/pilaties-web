import { Grid, useTheme } from '@mui/material';
import CommonStyles from 'components/CommonStyles';
import ButtonReload from 'components/CustomButton/ButtonReload';
import ButtonSearch from 'components/CustomButton/ButtonSearch';
import SelectField from 'components/CustomFields/SelectField';
import TextField from 'components/CustomFields/TextField';
import { Field, Form, Formik } from 'formik';
import { Fragment, useState } from 'react';

const SearchForm = () => {
  //! define
  const theme = useTheme();

  //! state
  const [time, setTime] = useState<string>('today');

  //! function
  const times = [
    {
      id: 'today',
      name: 'Hôm nay',
    },
    {
      id: 'week',
      name: 'Tuần này',
    },
    {
      id: 'month',
      name: 'Tháng này',
    },
  ];

  //! useEffect

  //! render
  return (
    <Fragment>
      <Formik onSubmit={(values) => console.log('values', values)} initialValues={{}}>
        {(propsFormik: any) => {
          return (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={2.4} sx={{ display: 'flex', gap: 1 }}>
                  {times.map((item) => {
                    return (
                      <CommonStyles.Box
                        key={item.id}
                        sx={{
                          display: 'flex',
                          gap: 1,
                          alignItems: 'center',
                          background:
                            item.id === time ? '#8428E64D' : `${theme.colors?.lineColor}   `,
                          cursor: 'pointer',
                          padding: 1,
                          borderRadius: '10px',
                          color:
                            item.id === time
                              ? `${theme.colors?.secondary?.purple}`
                              : `${theme.colors?.white}`,
                        }}
                        onClick={() => setTime(item.id)}
                      >
                        <CommonStyles.Typography
                          sx={{ fontSize: 14, fontWeight: 400, lineHeight: '18px' }}
                        >
                          {item.name}
                        </CommonStyles.Typography>
                      </CommonStyles.Box>
                    );
                  })}
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                  <Field
                    component={TextField}
                    fullWidth
                    name='time'
                    label='Thời gian (Từ - Đến)'
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

                <Grid item lg={2} sx={{ display: 'flex', gap: '8px' }}>
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
