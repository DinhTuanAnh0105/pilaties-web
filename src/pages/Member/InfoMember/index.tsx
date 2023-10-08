import CommonStyles from 'components/CommonStyles';
import WrapperBlock from 'components/WrapperBlock';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import InfoDetailMember from './components/InfoDetailMember';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import TabPanelContract from './components/TabPanelContract';
import TabPanelClasses from './components/TabPanelClasses';

const InfoMember = () => {
  //! define
  const theme = useTheme();

  //! state
  const [value, setValue] = React.useState('contract');

  //! function
  const toolbar = (
    <CommonStyles.Box>
      <CommonStyles.Button
        sx={{
          textTransform: 'unset',
          background: theme?.colors?.supportColor?.mint,
          boxShadow: 'none',
          color: theme?.colors?.white,
          borderRadius: '10px',
          '&:hover': { background: theme?.colors?.supportColor?.mint },
        }}
      >
        Đặt lại mật khẩu
      </CommonStyles.Button>
      <CommonStyles.Button
        sx={{
          textTransform: 'unset',
          background: theme?.colors?.secondary?.purple,
          boxShadow: 'none',
          color: theme?.colors?.white,
          borderRadius: '10px',
          '&:hover': { background: theme?.colors?.secondary?.purple },
          ml: 1,
        }}
      >
        Sửa lại thông tin
      </CommonStyles.Button>
    </CommonStyles.Box>
  );

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  //! useEffect

  //! render
  return (
    <WrapperBlock title='Thông tin hội viên' toolbar={toolbar}>
      <InfoDetailMember />
      <CommonStyles.Box sx={{ background: theme.colors?.white }}>
        <TabContext value={value}>
          <CommonStyles.Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChangeTab}>
              <Tab label='Hợp đồng (6)' value='contract' />
              <Tab label='Lớp học (5)' value='classes' />
            </TabList>
          </CommonStyles.Box>
          <TabPanel value='contract'>
            <TabPanelContract />{' '}
          </TabPanel>
          <TabPanel value='classes'>
            <TabPanelClasses />
          </TabPanel>
        </TabContext>
      </CommonStyles.Box>
    </WrapperBlock>
  );
};

export default InfoMember;
