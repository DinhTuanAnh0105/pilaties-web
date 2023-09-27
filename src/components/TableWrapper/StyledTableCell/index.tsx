import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '4px',
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
    fontWeight: 700,
    background: '#d9d9d9',
    height: '57px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
  },
}));

export default StyledTableCell;
