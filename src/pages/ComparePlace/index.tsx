import { useTheme } from '@mui/material';
import { Box } from '@mui/system';
import WrapperBlock from 'components/WrapperBlock';
import ReactECharts from 'echarts-for-react';
import React from 'react';
import SearchForm from './components/SearchForm';

const ComparePlace = () => {
  //! define
  const theme = useTheme();

  //! state

  //! function
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: [
        'Cơ sở 1',
        'Cơ sở 2',
        'Cơ sở 3',
        'Cơ sở 4',
        'Cơ sở 5',
        'Cơ sở 6',
        'Cơ sở 7',
        'Cơ sở 8',
        'Cơ sở 9',
        'Cơ sở 10',
      ],
    },
    yAxis: {
      type: 'value',
      // data: ['1000'],
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130, 70, 110, 130],
        type: 'bar',
        color: theme.colors?.secondary?.purple,
        barWidth: 44,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  //! useEffect

  //! render
  return (
    <WrapperBlock title='So sánh các cơ sở trong trung tâm'>
      <SearchForm />
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            fontSize: 20,
            fontWeight: 600,
            lineHeight: '36px',
            color: '#374957',
          }}
        >
          So sánh các cơ sở
        </Box>
        <ReactECharts option={options} />
      </Box>
    </WrapperBlock>
  );
};

export default ComparePlace;
