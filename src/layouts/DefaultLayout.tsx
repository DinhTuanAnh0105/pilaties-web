import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { Suspense } from 'react';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { AppBar, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
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

const pages = [
  {
    id: 1,
    name: 'Thống kê',
    icon: <IconStatistical />,
    href: '',
    children: [],
  },
  {
    id: 2,
    name: 'Hợp đồng',
    icon: <IconContract />,
    href: '',
    children: [],
  },
  {
    id: 3,
    name: 'Lớp học',
    icon: <IconCalendar />,
    href: '',
    children: [],
  },
  {
    id: 4,
    name: 'Hội viên',
    icon: <IconCard />,
    href: '',
    children: [],
  },
  {
    id: 5,
    name: 'Quản lý chung',
    icon: <IconHome />,
    children: [
      {
        id: 5.1,
        name: 'Quản lý trung tâm, cơ sở',
        icon: null,
        href: '',
        children: [],
      },
      {
        id: 5.2,
        name: 'Quản lý nhân viên',
        icon: null,
        href: '',
        children: [],
      },
      {
        id: 5.3,
        name: 'Quản lý gói tập',
        icon: null,
        href: '',
        children: [],
      },
      {
        id: 5.4,
        name: 'Thông báo hệ thống',
        icon: null,
        href: '',
        children: [],
      },
    ],
  },
];

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  //! State
  const auth = useAuth();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
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
          <PopupState variant='popover' popupId='demo-popup-menu'>
            {(popupState: any) => {
              console.log('popupState', popupState);

              return (
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                    <React.Fragment key={page.id}>
                      <Button
                        key={page.id}
                        sx={{
                          my: 2,
                          mr: 1,
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                        {...bindTrigger(popupState)}
                      >
                        {page.icon}
                        {page.name}
                        {page.children.length > 0 && <IconArrowDown />}
                      </Button>
                      {page.children.length > 0 && (
                        <Menu {...bindMenu(popupState)}>
                          {page.children.map((child) => (
                            <MenuItem key={child.id}>{child.name}</MenuItem>
                          ))}
                        </Menu>
                      )}
                    </React.Fragment>
                  ))}
                </Box>
              );
            }}
          </PopupState>
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
