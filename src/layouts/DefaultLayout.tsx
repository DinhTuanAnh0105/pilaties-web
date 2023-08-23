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
import { NavLink } from 'react-router-dom';
import useHandleAsideMenu from 'hooks/useHandleAsideMenu';
import useCheckWidth from 'hooks/useCheckWidth';
import { useAuth } from 'providers/AuthenticationProvider';
import { ImageLogo } from 'components/assets/images';
import { useTranslation } from 'react-i18next';

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

  const renderBtnLogout = () => {
    return (
      <List>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            onClick={() => {
              auth.logout();
            }}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: 'center',
                color: theme.colors?.white,
              }}
            >
              <CommonIcons.LogoutIcon />
            </ListItemIcon>
            <CommonStyles.Typography
              sx={{
                opacity: open ? 1 : 0,
                fontSize: '0.825rem',
                pt: 0.5,
                color: theme.colors?.white,
              }}
            >
              Logout
            </CommonStyles.Typography>
          </ListItemButton>
        </ListItem>
      </List>
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
            padding: '24px 16px',
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

        {/* {!auth.loading && renderBtnLogout()} */}
      </Drawer>

      <Box component='main' sx={{ flexGrow: 1, p: 3, mt: 10 }}>
        {/* <DrawerHeader /> */}
        <Suspense fallback={<CommonStyles.Loading />}>{children}</Suspense>
      </Box>
    </Box>
  );
};

export default React.memo(DefaultLayout);
