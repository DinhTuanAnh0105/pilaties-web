import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

const StyledTableRow = styled(TableRow)(() => {
  return {
    '&:nth-of-type(even)': {
      backgroundColor: '#E6E6E6',
    },
    '&:nth-of-type(odd)': {
      backgroundColor: '#F5F5F5',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
    '&:hover': {
      '&:nth-of-type(even)': {
        backgroundColor: '#E6E6E6',
      },
      '&:nth-of-type(odd)': {
        backgroundColor: '#F5F5F5',
      },
    },
  };
});

export default StyledTableRow;
