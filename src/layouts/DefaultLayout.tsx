import * as React from 'react';
import { Suspense } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import CommonStyles from 'components/CommonStyles';
import CommonIcons from 'components/CommonIcons';
import { NavLink, useNavigate } from 'react-router-dom';
import useHandleAsideMenu from 'hooks/useHandleAsideMenu';
import useCheckWidth from 'hooks/useCheckWidth';
import { useAuth } from 'providers/AuthenticationProvider';
import { ImageLogo } from 'components/assets/images';
import { useTranslation } from 'react-i18next';
import CustomMenu from 'components/Menu';
import Button from 'components/CustomButton';
import { IconArrowDown, IconBell, IconBlankAvata } from 'components/assets/icons';
import { Badge, Menu, MenuItem } from '@mui/material';
import ModalChangePass from 'components/Modal/ModalChangePass';
import ModalConfirm from 'components/Modal/ModalConfirm';
import BaseUrl from 'consts/baseUrl';

const drawerWidth = 90;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  //! State
  const { t } = useTranslation();
  const auth = useAuth();
  const theme = useTheme();
  const [
    open,
    // setOpen
  ] = React.useState(true);
  const asideMenu = useHandleAsideMenu();
  const { isMobile } = useCheckWidth();

  const navigate = useNavigate();

  //! Function
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  // const customStyleHeader = React.useMemo(() => {
  //   return {
  //     [theme.breakpoints.up('xs')]: {
  //       minHeight: 0,
  //       height: 50,
  //     },
  //   };
  // }, [theme]);

  //! Render
  // const renderAppBar = () => {
  //   return (
  //     <Typography variant='h6' noWrap component='div'>
  //       Custom header here
  //     </Typography>
  //   );
  // };

  const renderBell = () => {
    return (
      <CommonStyles.Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mr: '20px' }}
      >
        <Button
          isIconButton
          sx={{
            background: 'transparent',
            height: '56px',
            width: '56px',
            borderRadius: '10px',
            border: `1px solid ${theme?.colors?.white}`,
            // '&:hover': { backgroundColor: `transparent33` },
          }}
        >
          <Badge badgeContent={4} color='error' overlap='circular' invisible={false}>
            <IconBell />
          </Badge>
        </Button>
      </CommonStyles.Box>
    );
  };
  const info = { name: 'Nguyễn Thị Anh', role: 'Quản lý trung tâm' };
  const renderInfo = () => {
    const [anchorEl, setAnchorEl] = React.useState<any>(null);
    const [openModalChangePass, setOpenModalChangePass] = React.useState(false);
    const [openModalLogout, setOpenModalLogout] = React.useState(false);

    const handleOpenChangePass = () => {
      setOpenModalChangePass(true);
      setAnchorEl(null);
    };
    const handleOpenLogout = () => {
      setOpenModalLogout(true);
      setAnchorEl(null);
    };
    return (
      <CommonStyles.Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button
          startIcon={<IconBlankAvata />}
          endIcon={<IconArrowDown />}
          sx={{
            background: 'transparent',
            height: '56px',
            // width: '56px',
            borderRadius: '10px',
            border: `1px solid ${theme?.colors?.white}`,
            '&:hover': { backgroundColor: `transparent` },
          }}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <CommonStyles.Box sx={{ textAlign: 'left' }}>
            <CommonStyles.Box>{info.name}</CommonStyles.Box>
            <CommonStyles.Box>{info.role}</CommonStyles.Box>
          </CommonStyles.Box>
        </Button>
        <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
          {/* {page.children.map((child) => ( */}
          <MenuItem onClick={() => navigate(BaseUrl.AccountInformation)}>
            Thông tin tài khoản
          </MenuItem>
          <MenuItem onClick={handleOpenChangePass}>Đổi mật khẩu</MenuItem>
          <MenuItem onClick={handleOpenLogout}>Đăng xuất</MenuItem>
          {/* ))} */}
        </Menu>
        {openModalChangePass && (
          <ModalChangePass
            open={openModalChangePass}
            onClose={() => setOpenModalChangePass(false)}
          />
        )}
        {openModalLogout && (
          <ModalConfirm
            open={openModalLogout}
            modalTitle='Bạn có chắc chắn muốn đăng xuất tài khoản'
            onClose={() => setOpenModalLogout(false)}
            onSubmit={auth.logout}
            // maxWidth='xs'
          />
        )}
      </CommonStyles.Box>
    );
  };

  const renderLogo = () => {
    return (
      <CommonStyles.Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ImageLogo />
        <CommonStyles.Typography
          sx={{
            fontSize: 24,
            fontWeight: 600,
            lineHeight: '36px',
            color: '#8428E6',
            ml: 1,
          }}
        >
          {t('shared:nameapp')}
        </CommonStyles.Typography>
      </CommonStyles.Box>
    );
  };

  return (
    <Box sx={{}}>
      <Drawer
        variant='permanent'
        open={open}
        // anchor={isMobile ? 'top' : undefined}
        anchor={'top'}
        sx={{
          [theme.breakpoints.down('sm')]: {
            width: '0px',
          },
          '& > div': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: theme?.colors?.primary?.deepBlue,
            width: '100% !important',
            height: '90px !important',
            padding: '0px 16px',
          },
        }}
      >
        {/* <DrawerHeader sx={customStyleHeader}>
          <CommonStyles.Button isIconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <CommonIcons.RightIcon /> : <CommonIcons.LeftIcon />}
          </CommonStyles.Button>
        </DrawerHeader>

        <Divider /> */}
        {renderLogo()}
        <CustomMenu />
        {renderBell()}
        {renderInfo()}

        {/* {!auth.loading && renderBtnLogout()} */}
      </Drawer>

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3, mt: 10 }}
        // sx={{ flexGrow: 1, p: 3, mt: 10, background: theme.colors?.background?.background5 }}
      >
        {/* <DrawerHeader /> */}
        <Suspense fallback={<CommonStyles.Loading />}>{children}</Suspense>
      </Box>
    </Box>
  );
};

export default React.memo(DefaultLayout);
