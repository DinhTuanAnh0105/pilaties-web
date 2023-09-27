import { Button, Menu, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import {
  IconArrowDown,
  IconCalendar,
  IconCard,
  IconContract,
  IconHome,
  IconStatistical,
} from 'components/assets/icons';
import useCheckWidth from 'hooks/useCheckWidth';
import useHandleAsideMenu from 'hooks/useHandleAsideMenu';
import PopupState, { bindMenu } from 'material-ui-popup-state';
import { useAuth } from 'providers/AuthenticationProvider';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { popoverClasses } from '@mui/material/Popover';

const menuFake = [
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
    children: [
      {
        id: 5.1,
        name: 'Quản lý',
        icon: null,
        href: '',
        children: [],
      },
    ],
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

const CustomMenu = () => {
  //! State
  const auth = useAuth();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<any>({});
  const asideMenu = useHandleAsideMenu();
  const { isMobile } = useCheckWidth();
  const { t } = useTranslation();

  //! Function
  const handleOpen = (event: any, key: any) => {
    setAnchorEl({ ...anchorEl, [key]: event.currentTarget });
  };
  const handleClose = () => {
    setAnchorEl({});
  };
  //! Render
  return (
    <PopupState variant='popover' popupId='demo-popup-menu'>
      {(popupState: any) => {
        return (
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuFake.map((page) => (
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
                  onMouseEnter={(e) => handleOpen(e, page.id)}
                  onClick={(e) => handleOpen(e, page.id)}
                  onMouseLeave={handleClose}
                >
                  {page.icon}
                  {page.name}
                  {page.children.length > 0 && <IconArrowDown />}
                  {page.children.length > 0 && (
                    <Menu
                      {...bindMenu({
                        ...popupState,
                        isOpen: Boolean(anchorEl[page.id]),
                        anchorEl: anchorEl[page.id],
                        close: handleClose,
                      })}
                      sx={{
                        [`&.${popoverClasses.root}`]: {
                          pointerEvents: 'none',
                        },
                      }}
                      onClose={handleClose}
                      MenuListProps={{
                        onMouseLeave: handleClose,
                        style: { pointerEvents: 'auto' },
                      }}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                      disableAutoFocusItem
                      keepMounted={false}
                    >
                      {page.children.map((child) => (
                        <MenuItem key={child.id}>{child.name}</MenuItem>
                      ))}
                    </Menu>
                  )}
                </Button>
              </React.Fragment>
            ))}
          </Box>
        );
      }}
    </PopupState>
  );
};
export default CustomMenu;
