import TablePagination, { TablePaginationBaseProps } from '@mui/material/TablePagination';
import { IParamsPage } from 'interfaces/global';
import { ChangeEvent } from 'react';
interface Props extends TablePaginationBaseProps {
  count: number;
  rowsPerPageOptions?: number[];
  paramsPage: IParamsPage;
  setParamsPage: React.Dispatch<React.SetStateAction<IParamsPage>>;
}

const TablePaging = (props: Props) => {
  const { count, paramsPage, setParamsPage, rowsPerPageOptions } = props;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setParamsPage({ ...paramsPage, page: newPage });
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setParamsPage({ page: 0, size: parseInt(event.target.value, 10) });
  };

  return (
    <TablePagination
      component='div'
      count={count}
      page={paramsPage.page}
      rowsPerPage={paramsPage.size}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={rowsPerPageOptions && rowsPerPageOptions}
      labelRowsPerPage='Showing'
    />
  );
};

export default TablePaging;
