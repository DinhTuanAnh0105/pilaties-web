import { styled } from '@mui/material';
import TableBody, { TableBodyProps } from '@mui/material/TableBody';
import StyledTableCell from '../StyledTableCell';
import StyledTableRow from 'components/TableWrapper/StyledTableRow';

const RowStyled = styled('td')`
  font-weight: 600;
  text-align: center;
  padding-bottom: 12px;
  padding-top: 24px;
`;

interface Props extends TableBodyProps {
  rows: unknown;
  cellStyles?: React.CSSProperties;
}
interface Item {
  value: string;
  align?: string;
}

const CustomTableBody = ({ rows, cellStyles, onClick }: Props) => {
  const ifRowsValid = Array.isArray(rows) && rows.length > 0;

  const onClickRow = (rowData: any) => {
    if (onClick) onClick(rowData);
  };

  return (
    <TableBody className='custom-table-body'>
      {ifRowsValid ? (
        rows.map((cols, index: number) => {
          return (
            <StyledTableRow
              key={index}
              hover
              sx={{ width: '10px' }}
              onClick={() => onClickRow(cols)}
            >
              {cols.map((item: Item, index: number) => {
                return (
                  <StyledTableCell
                    key={index}
                    sx={{
                      textAlign: item && item.align ? item.align : 'center',
                      ...cellStyles,
                    }}
                  >
                    {item.value}
                  </StyledTableCell>
                );
              })}
            </StyledTableRow>
          );
        })
      ) : (
        <tr>
          <RowStyled colSpan={10}>Chưa có dữ liệu trong danh sách</RowStyled>
        </tr>
      )}
    </TableBody>
  );
};

export default CustomTableBody;
