import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CommonStyles from 'components/CommonStyles';
import TablePaging from 'components/TablePaging';
import TableWrapper from 'components/TableWrapper';
import WrapperBlock from 'components/WrapperBlock';
import { IconAgree, IconDisagree, IconEdit } from 'components/assets/icons';
import { DEFAULT_PARAMSPAGE } from 'consts';
import { IParamsPage } from 'interfaces/global';
import { useMemo, useState } from 'react';
import { renderStatusContract, renderStatusContractApprove } from 'utils/renderStatus';
import SearchForm from './SearchForm';
import ModalPackage from './ModalPackage';

const tableHeader = [
  'STT',
  'Mã hợp đồng',
  'Gói tập luyện',
  'Nội dung',
  'Hiệu lực',
  'Số buổi còn lại',
  'Giá trị hoá đơn',
  'Ghi chú',
  'Trạng thái duyệt',
  'Trạng thái kích hoạt',
  'Hành động',
];

const dataFake = [
  {
    id: 1,
    code: 'HD528298',
    pack: ['Gói tập luyện 1'],
    content: { GX: '20', PT: '20' },
    effect: '02/02/2023 - 02/02/2023',
    remain: { GX: '20', PT: '20' },
    value: '10.000.000',
    note: 'Tặng thêm 2 buổi PT',
    statusApprove: 3,
    statusActive: 0,
  },
  {
    id: 1,
    code: 'HD528298',
    pack: ['Gói tập luyện 1'],
    content: { GX: '20', PT: '20' },
    effect: '02/02/2023 - 02/02/2023',
    remain: { GX: '20', PT: '20' },
    value: '10.000.000',
    note: 'Tặng thêm 2 buổi PT',
    statusApprove: 2,
    statusActive: 1,
  },
  {
    id: 1,
    code: 'HD528298',
    pack: ['Gói tập luyện 1'],
    content: { GX: '20', PT: '20' },
    effect: '02/02/2023 - 02/02/2023',
    remain: { GX: '20', PT: '20' },
    value: '10.000.000',
    note: 'Tặng thêm 2 buổi PT',
    statusApprove: 1,
    statusActive: 0,
  },
  {
    id: 1,
    code: 'HD528298',
    pack: ['Gói tập luyện 1'],
    content: { GX: '20', PT: '20' },
    effect: '02/02/2023 - 02/02/2023',
    remain: { GX: '20', PT: '20' },
    value: '10.000.000',
    note: 'Tặng thêm 2 buổi PT',
    statusApprove: 2,
    statusActive: 2,
  },
  {
    id: 1,
    code: 'HD528298',
    pack: ['Gói tập luyện 1', 'Gói tập luyện 2'],
    content: { GX: '20', PT: '20' },
    effect: '02/02/2023 - 02/02/2023',
    remain: { GX: '20', PT: '20' },
    value: '10.000.000',
    note: 'Tặng thêm 2 buổi PT',
    statusApprove: 2,
    statusActive: 3,
  },
  {
    id: 1,
    code: 'HD528298',
    pack: ['Gói tập luyện 1', 'Gói tập luyện 2'],
    content: { GX: '20', PT: '20' },
    effect: '02/02/2023 - 02/02/2023',
    remain: { GX: '20', PT: '20' },
    value: '10.000.000',
    note: 'Tặng thêm 2 buổi PT',
    statusApprove: 3,
    statusActive: 0,
  },
];

const TabPanelContract = () => {
  //! define
  const theme = useTheme();

  //! state
  const [paramsPage, setParamsPage] = useState<IParamsPage>(DEFAULT_PARAMSPAGE);
  const [openModal, setOpenModal] = useState<boolean>(false);

  //! function
  const rows = useMemo(() => {
    return dataFake.map((contract, index) => {
      const { id, code, pack, content, effect, remain, value, note, statusApprove, statusActive } =
        contract;

      return [
        {
          value: index + 1,
        },
        {
          value: code,
        },
        {
          value:
            pack.length > 1 ? (
              <CommonStyles.Typography
                sx={{ color: theme.colors?.blue, textDecoration: 'underline', cursor: 'pointer' }}
                onClick={() => setOpenModal(true)}
              >
                Xem thêm
              </CommonStyles.Typography>
            ) : (
              pack[0]
            ),
        },
        {
          value: (
            <CommonStyles.Box>
              <CommonStyles.Box>GX: {content.GX} buổi</CommonStyles.Box>
              <CommonStyles.Box>PT: {content.PT} buổi</CommonStyles.Box>
            </CommonStyles.Box>
          ),
        },
        {
          value: effect,
        },
        {
          value: (
            <CommonStyles.Box>
              <CommonStyles.Box>GX: {remain.GX} buổi</CommonStyles.Box>
              <CommonStyles.Box>PT: {remain.PT} buổi</CommonStyles.Box>
            </CommonStyles.Box>
          ),
        },
        {
          value: value,
        },
        {
          value: note,
        },
        {
          value: renderStatusContractApprove(statusApprove),
        },
        {
          value: renderStatusContract(statusActive),
        },
        {
          value: (
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CommonStyles.Box>
                <IconEdit />
              </CommonStyles.Box>
              <CommonStyles.Box>
                <IconAgree />
              </CommonStyles.Box>
              <CommonStyles.Box>
                <IconDisagree />
              </CommonStyles.Box>
            </Grid>
          ),
        },
      ];
    });
  }, [dataFake]);

  //! useEffect

  //! render
  return (
    <WrapperBlock>
      <SearchForm />
      <CommonStyles.Box>
        <TableWrapper rows={rows} headers={tableHeader} />
        <TablePaging count={100} paramsPage={paramsPage} setParamsPage={setParamsPage} />
      </CommonStyles.Box>
      {openModal && <ModalPackage open={openModal} onClose={() => setOpenModal(false)} />}
    </WrapperBlock>
  );
};

export default TabPanelContract;
