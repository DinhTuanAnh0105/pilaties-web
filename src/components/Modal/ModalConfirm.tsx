import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import CommonStyles from 'components/CommonStyles';
import ButtonCancel from 'components/CustomButton/ButtonCancel';
import ButtonConfirm from 'components/CustomButton/ButtonConfirm';

interface Props {
  open: boolean;
  modalTitle: string;
  onSubmit: () => void;
  onClose: () => void;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const ModalConfirm = (props: Props) => {
  const { open, modalTitle, onSubmit, onClose, maxWidth = 'sm' } = props;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={maxWidth} sx={{ zIndex: 1201 }}>
      <CommonStyles.Box style={{ margin: '24px' }}>
        <Typography
          sx={{ fontSize: '32px', fontWeight: 700, lineHeight: '48px', textAlign: 'center' }}
        >
          Xác nhận
        </Typography>
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '30px',
            textAlign: 'center',
            marginY: '16px',
          }}
        >
          {modalTitle}
        </Typography>
        <CommonStyles.Box
          sx={{ display: 'flex', gap: '12px', marginY: '24px', justifyContent: 'center' }}
        >
          <ButtonCancel handleClick={onClose} />
          <ButtonConfirm handleClick={onSubmit} />
        </CommonStyles.Box>
      </CommonStyles.Box>
    </Dialog>
  );
};

export default ModalConfirm;
