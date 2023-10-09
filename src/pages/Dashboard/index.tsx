import WrapperBlock from 'components/WrapperBlock';
import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import CommonStyles from 'components/CommonStyles';
import { IconClipboard, IconTick, IconUser } from 'components/assets/icons';
import { useTheme } from '@mui/material';

const types = [
  {
    id: 'contract',
    icon: <IconClipboard />,
    title: 'Hợp đồng',
    desTitle: 'Gói tập luyện PT 1-1',
    number: 20546,
    numberDes: 20546,
  },
  {
    id: 'member',
    icon: <IconUser />,
    title: 'Hội viên',
    desTitle: null,
    number: 20546,
    numberDes: null,
  },
  {
    id: 'revenue',
    icon: <IconTick />,
    title: 'Doanh thu',
    desTitle: 'Gói tập luyện PT 1-1',
    number: 200546000,
    numberDes: 20546,
  },
];

const Dashboard = () => {
  //! define
  const theme = useTheme();

  //! state
  const [type, setType] = useState<string>('contract');

  //! function

  //! useEffect

  //! render
  return (
    <WrapperBlock title='Thống kê'>
      <SearchForm />

      <CommonStyles.Box sx={{ display: 'flex', gap: '17px' }}>
        {types.map((item) => {
          return (
            <CommonStyles.Box
              key={item.id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                // gap: 5,
                alignItems: 'center',
                background:
                  item.id === type
                    ? `${theme.colors?.primary?.deepBlue}`
                    : `${theme.colors?.secondary?.purple}`,
                padding: '16px',
                borderRadius: '8px',
                color: `${theme.colors?.white}`,
                cursor: 'pointer',
                width: '432px',
              }}
              onClick={() => setType(item.id)}
            >
              <CommonStyles.Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {item.icon}
                <CommonStyles.Box>
                  <CommonStyles.Box sx={{ fontSize: '24px', fontWeight: 600 }}>
                    {item.title}
                  </CommonStyles.Box>
                  <CommonStyles.Box sx={{ fontSize: '18px', fontWeight: 500 }}>
                    {item.desTitle}
                  </CommonStyles.Box>
                </CommonStyles.Box>
              </CommonStyles.Box>
              <CommonStyles.Box>
                <CommonStyles.Box sx={{ fontSize: '24px', fontWeight: 600 }}>
                  {item.number}
                </CommonStyles.Box>
                <CommonStyles.Box sx={{ fontSize: '18px', fontWeight: 500 }}>
                  {item.numberDes}
                </CommonStyles.Box>
              </CommonStyles.Box>
            </CommonStyles.Box>
          );
        })}
      </CommonStyles.Box>
    </WrapperBlock>
  );
};

export default Dashboard;
