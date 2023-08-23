import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { Suspense } from 'react';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import {
  AppBar,
  Button,
  ClickAwayListener,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import CommonStyles from 'components/CommonStyles';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {
  IconArrowDown,
  IconCalendar,
  IconCard,
  IconContract,
  IconHome,
  IconStatistical,
} from 'components/assets/icons';
import { ImageLogo } from 'components/assets/images';
import useCheckWidth from 'hooks/useCheckWidth';
import useHandleAsideMenu from 'hooks/useHandleAsideMenu';
import { useAuth } from 'providers/AuthenticationProvider';
import { useTranslation } from 'react-i18next';
import { AnyPtrRecord } from 'dns';
import CustomMenu from 'components/Menu';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  //! State
  const auth = useAuth();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<any>({});
  const asideMenu = useHandleAsideMenu();
  const { isMobile } = useCheckWidth();
  const { t } = useTranslation();

  //! Function
  const customStyleHeader = React.useMemo(() => {
    return {
      [theme.breakpoints.up('xs')]: {
        // minHeight: 0,
        height: '42px',
        padding: '24px',
        background: '#1E3150',
      },
    };
  }, [theme]);
  const handleOpen = (event: any, key: any) => {
    setAnchorEl({ ...anchorEl, [key]: event.currentTarget });
  };
  const handleClose = () => {
    setAnchorEl({});
  };
  //! Render
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position='fixed'>
        {/* <Container maxWidth='xl'> */}
        <Toolbar sx={customStyleHeader} disableGutters>
          <ImageLogo />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              ml: 1,
              // display: { xs: 'none', md: 'flex' },
              fontWeight: 600,
              lineHeight: '36px',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '24px',
            }}
          >
            {t('shared:nameapp')}
          </Typography>
          <CustomMenu />
        </Toolbar>
        {/* </Container> */}
      </AppBar>

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
        <Suspense fallback={<CommonStyles.Loading />}>{children}</Suspense>
      </Box>
    </Box>
  );
};

export default React.memo(DefaultLayout);
