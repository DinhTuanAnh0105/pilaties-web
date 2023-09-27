import { Box, CircularProgress, TableCell, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table, { TableProps } from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import CustomTableBody from './CustomTableBody';
import CustomTableHead from './CustomTableHead';

interface Props extends TableProps {
  tableTitle?: string;
  onOpenModal?: () => void;
  total?: number;
  toolbar?: JSX.Element;
  headers: string[];
  rows: unknown;
  onClickRow?: (rowData: any) => void;
  loading?: boolean;
}

export const Founded = ({ total }: { total: number }) => (
  <Box display='flex' m={1} width='100%' pt={1}>
    Tìm thấy
    <Box fontWeight={600} mx='3px'>
      {total}
    </Box>
    bản ghi
  </Box>
);

const TableLoading = () => (
  <tbody>
    <TableRow>
      <TableCell colSpan={10} sx={{ textAlign: 'center', py: 4 }}>
        <CircularProgress />
      </TableCell>
    </TableRow>
  </tbody>
);

const TableWrapper = ({
  loading,
  headers,
  rows,

  className,
  onClickRow,
}: Props) => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <Table size='small' className={className} stickyHeader>
        <CustomTableHead tableHeadText={headers} />
        {loading ? <TableLoading /> : <CustomTableBody rows={rows} onClick={onClickRow} />}
      </Table>
    </TableContainer>
  );
};

export default TableWrapper;
