import { DialogActions, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconAddImage, IconEdit } from 'components/assets/icons';
import CommonStyles from 'components/CommonStyles';
import Box from 'components/CommonStyles/Box';
import ButtonCancel from 'components/CustomButton/ButtonCancel';
import ButtonSave from 'components/CustomButton/ButtonSave';
import SelectFieldLabel from 'components/CustomFields/SelectFieldLabel';
import TextFieldLabel from 'components/CustomFields/TextFieldLabel';
import CustomToggle from 'components/CustomToggle';
import TablePaging from 'components/TablePaging';
import TableWrapper from 'components/TableWrapper';
import WrapperBlock from 'components/WrapperBlock';
import { DEFAULT_PARAMSPAGE } from 'consts';
import { Field, Form, Formik } from 'formik';
import { IParamsPage } from 'interfaces/global';
import React, { useMemo, useState } from 'react';
import { handleReadImage } from 'utils/handleReadImage';
import ModalCreateFacility from './components/ModalCreateFacility';
import SearchFormFacility from './components/SearchFormFacility';

const tableHeader = [
  'STT',
  'Mã trung tâm',
  'Logo',
  'Tên trung tâm',
  'Địa chỉ',
  'Số điện thoại',
  'Người quản lý',
  'Hành động',
];

const dataFake = [
  {
    id: 1,
    code: 'TT213213',
    logo: '',
    name: 'Trung tâm cầu giấy',
    address: 'Số 48, Xuân Thuỷ, Cầu Giấy',
    phoneNumber: '0934355643',
    manager: 'Nguyễn Thị Anh',
  },
  {
    id: 2,
    code: 'TT213213',
    logo: '',
    name: 'Trung tâm cầu giấy',
    address: 'Số 48, Xuân Thuỷ, Cầu Giấy',
    phoneNumber: '0934355643',
    manager: 'Nguyễn Thị Anh',
  },
  {
    id: 3,
    code: 'TT213213',
    logo: '',
    name: 'Trung tâm cầu giấy',
    address: 'Số 48, Xuân Thuỷ, Cầu Giấy',
    phoneNumber: '0934355643',
    manager: 'Nguyễn Thị Anh',
  },
  // {
  //   id: 4,
  //   code: 'TT213213',
  //   logo: '',
  //   name: 'Trung tâm cầu giấy',
  //   address: 'Số 48, Xuân Thuỷ, Cầu Giấy',
  //   phoneNumber: '0934355643',
  //   manager: 'Nguyễn Thị Anh',
  // },
];

const UpdateTrungTam = () => {
  //! define

  const theme = useTheme();

  //! state
  const [paramsPage, setParamsPage] = useState<IParamsPage>(DEFAULT_PARAMSPAGE);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  //! function
  const rows = useMemo(() => {
    return dataFake.map((staff, index) => {
      const { id, code, logo, name, address, phoneNumber, manager } = staff;

      return [
        {
          value: index + 1,
        },
        {
          value: code,
        },
        {
          value: logo,
        },
        {
          value: name,
        },
        {
          value: address,
        },
        {
          value: phoneNumber,
        },
        {
          value: manager,
        },
        {
          value: (
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CommonStyles.Box onClick={() => setOpenModal(true)} sx={{ cursor: 'pointer' }}>
                <IconEdit />
              </CommonStyles.Box>
              <CustomToggle />
            </Grid>
          ),
        },
      ];
    });
  }, [dataFake]);

  //! useEffect

  //! render
  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
        <WrapperBlock title='Cập nhật trung tâm'>
          <Formik onSubmit={() => {}} initialValues={{}}>
            {({ setFieldValue }) => {
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: 'flex',
                        gap: 2,
                        alignItems: 'center',
                        [theme.breakpoints.up('lg')]: {
                          display: 'flex',
                        },
                        [theme.breakpoints.up('md')]: {
                          display: 'block',
                        },
                      }}
                    >
                      <CommonStyles.Box sx={{ textAlign: 'center' }}>
                        <input
                          type='file'
                          id='modal-create-staff'
                          onChange={(event) => handleReadImage(event, setSelectedImage)}
                        />
                        <label
                          htmlFor='modal-create-staff'
                          style={{
                            cursor: 'pointer',
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                          }}
                        >
                          {selectedImage ? (
                            <img
                              src={selectedImage}
                              alt='Avatar'
                              style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                border: '1px solid #d9d9d9',
                              }}
                            />
                          ) : (
                            <IconAddImage />
                          )}
                        </label>
                      </CommonStyles.Box>
                      <CommonStyles.Box
                        sx={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 2 }}
                      >
                        <CommonStyles.Box sx={{ display: 'flex', alignItems: 'end' }}>
                          <Box sx={{ flex: 1 }}>
                            <Field
                              component={TextFieldLabel}
                              name='background'
                              label='Mã màu nền'
                              placeholder='Vui lòng nhập'
                              required
                              fullWidth
                            />
                          </Box>
                          <Box>
                            <p
                              style={{
                                fontSize: 14,
                                lineHeight: '18px',
                                color: '#111111',
                                margin: '0 0 4px 10px',
                              }}
                            >
                              Màu đã chọn
                            </p>
                            <input
                              style={{ height: 40 }}
                              type='color'
                              onChange={(e) => setFieldValue('background', e.target.value)}
                              className='input-color'
                            />
                          </Box>
                        </CommonStyles.Box>
                        <CommonStyles.Box sx={{ display: 'flex', alignItems: 'end' }}>
                          <Box sx={{ flex: 1 }}>
                            <Field
                              component={TextFieldLabel}
                              name='colorButton'
                              label='Mã màu button'
                              placeholder='Vui lòng nhập'
                              required
                              fullWidth
                            />
                          </Box>
                          <Box>
                            <p
                              style={{
                                fontSize: 14,
                                lineHeight: '18px',
                                color: '#111111',
                                margin: '0 0 4px 10px',
                              }}
                            >
                              Màu đã chọn
                            </p>
                            <input
                              style={{ height: 40 }}
                              type='color'
                              onChange={(e) => setFieldValue('colorButton', e.target.value)}
                              className='input-color'
                            />
                          </Box>
                        </CommonStyles.Box>
                      </CommonStyles.Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={TextFieldLabel}
                        name='username'
                        label='Tên trung tâm'
                        placeholder='Vui lòng nhập'
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        component={TextFieldLabel}
                        name='username'
                        label='Mã trung tâm'
                        placeholder='Vui lòng nhập'
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        component={TextFieldLabel}
                        name='usercode'
                        label='Số điện thoại'
                        placeholder='Vui lòng nhập'
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={SelectFieldLabel}
                        name='role'
                        label='Người quản lý'
                        placeholder='Vui lòng chọn'
                        options={[]}
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={TextFieldLabel}
                        name='usercode'
                        label='Email'
                        placeholder='Vui lòng nhập'
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={TextFieldLabel}
                        name='phoneNumber'
                        label='Địa chỉ'
                        placeholder='Vui lòng nhập'
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={SelectFieldLabel}
                        name='role'
                        label='Tỉnh/Thành phố'
                        placeholder='Vui lòng chọn'
                        options={[]}
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={SelectFieldLabel}
                        name='role'
                        label='Quân/Huyện'
                        placeholder='Vui lòng chọn'
                        options={[]}
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={SelectFieldLabel}
                        name='position'
                        label='Người quản lý'
                        placeholder='Vui lòng chọn'
                        options={[]}
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={SelectFieldLabel}
                        name='position'
                        label='Số học viên tối đa trong lớp học'
                        placeholder='Vui lòng chọn'
                        options={[]}
                        fullWidth
                      />
                    </Grid>

                    <DialogActions>
                      <ButtonCancel handleClick={() => {}} />
                      <ButtonSave handleClick={() => {}} />
                    </DialogActions>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </WrapperBlock>
      </Grid>
      <Grid item md={8}>
        <WrapperBlock title='Danh sách cơ sở' count={10}>
          <SearchFormFacility />
          <CommonStyles.Box>
            <TableWrapper rows={rows} headers={tableHeader} />
            <TablePaging count={100} paramsPage={paramsPage} setParamsPage={setParamsPage} />
          </CommonStyles.Box>
        </WrapperBlock>
      </Grid>
      {openModal && <ModalCreateFacility open={openModal} onClose={() => setOpenModal(false)} />}
    </Grid>
  );
};

export default UpdateTrungTam;
