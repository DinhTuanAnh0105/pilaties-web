import { Grid, useTheme } from '@mui/material';
import CommonStyles from 'components/CommonStyles';
import { IconAddImage } from 'components/assets/icons';
import React from 'react';

const InfoDetailMember = () => {
  //! define

  const theme = useTheme();

  //! state

  //! function

  //! useEffect

  //! render
  return (
    <CommonStyles.Box sx={{ background: theme.colors?.white }}>
      <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', padding: '24px' }}>
        <Grid item xs={2}>
          <IconAddImage />
        </Grid>
        <Grid item xs={3}>
          <Grid container sx={{ my: '18px' }}>
            <Grid xs={6} sx={{ fontWeight: 600 }}>
              Tên hội viên
            </Grid>
            <Grid xs={6}>Đỗ Mai Phương</Grid>
          </Grid>
          <Grid container sx={{ my: '18px' }}>
            <Grid xs={6} sx={{ fontWeight: 600 }}>
              Cơ sở đăng ký
            </Grid>
            <Grid xs={6}>Cơ sở Cầu giấy</Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container sx={{ my: '18px' }}>
            <Grid xs={6} sx={{ fontWeight: 600 }}>
              Trung tâm
            </Grid>
            <Grid xs={6}>Trung tâm 1</Grid>
          </Grid>
          <Grid container sx={{ my: '18px' }}>
            <Grid xs={6} sx={{ fontWeight: 600 }}>
              Số điện thoại
            </Grid>
            <Grid xs={6}>0989877666</Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container sx={{ my: '18px' }}>
            <Grid xs={6} sx={{ fontWeight: 600 }}>
              Mã hội viên
            </Grid>
            <Grid xs={6}>HV376286</Grid>
          </Grid>
          <Grid container sx={{ my: '18px' }}>
            <Grid xs={6} sx={{ fontWeight: 600 }}>
              Email
            </Grid>
            <Grid xs={6}>anhnt@gmail.com</Grid>
          </Grid>
        </Grid>
      </Grid>
    </CommonStyles.Box>
  );
};

export default InfoDetailMember;
