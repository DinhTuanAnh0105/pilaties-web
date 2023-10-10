import WrapperBlock from 'components/WrapperBlock';
import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import CommonStyles from 'components/CommonStyles';
import { IconClipboard, IconTick, IconUser } from 'components/assets/icons';
import { Grid, useTheme } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import { Box } from '@mui/system';

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
  const options = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'verticalAlign',
      left: 'right',
    },
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    // xAxis: {
    //   type: 'category',
    //   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    // },
    // yAxis: {
    //   type: 'value',
    // },
    // series: [
    //   {
    //     data: [820, 932, 901, 934, 1290, 1330, 1320],
    //     type: 'line',
    //     smooth: true,
    //   },
    // ],
    series: [
      {
        name: '123',
        type: 'pie',
        // radius: '50%',
        // center: ['50%', '60%'],
        data: [
          { value: 335, name: 'Đăng ký mới' },
          { value: 310, name: 'Gia hạn' },
          { value: 234, name: 'Mua thêm' },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        label: {
          show: false,
        },
      },
    ],
    // tooltip: {
    //   trigger: 'axis',
    // },
  };
  const options2 = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

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
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              fontSize: 20,
              fontWeight: 600,
              lineHeight: '36px',
              color: '#374957',
            }}
          >
            Tỷ lệ số lượng hợp đồng theo loại
          </Box>
          <ReactECharts option={options} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              fontSize: 20,
              fontWeight: 600,
              lineHeight: '36px',
              color: '#374957',
            }}
          >
            Tăng trưởng về số lượng hợp đồng
          </Box>
          <ReactECharts option={options2} />
        </Grid>
      </Grid>
    </WrapperBlock>
  );
};

export default Dashboard;
