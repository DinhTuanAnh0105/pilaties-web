import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import StyledTableCell from '../StyledTableCell';

interface Props {
  tableHeadText: string[];
}

const CustomTableHead = ({ tableHeadText }: Props) => {
  return (
    <TableHead>
      <TableRow>
        {tableHeadText.map((header) => (
          <StyledTableCell align='center' key={header}>
            {header}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default CustomTableHead;
