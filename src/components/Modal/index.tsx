import { DialogActions, DialogContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import CommonStyles from 'components/CommonStyles';
import Button from 'components/CustomButton';

interface Props {
  open: boolean;
  modalTitle: string;
  children: JSX.Element | JSX.Element[];
  onSubmit: () => void;
  onClose: () => void;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Modal = (props: Props) => {
  const { open, modalTitle, children, onSubmit, onClose, maxWidth = 'sm' } = props;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={maxWidth} sx={{ zIndex: 1201 }}>
      <CommonStyles.Box style={{ margin: '24px' }}>
        <Typography sx={{ fontSize: '32px', fontWeight: 700, lineHeight: '48px' }}>
          {modalTitle}
        </Typography>
        <DialogContent sx={{ pt: 1, pb: 0 }}>{children}</DialogContent>
        <DialogActions>
          <Button color='secondary' onClick={onClose}>
            Huỷ bỏ
          </Button>
          <Button color='success' onClick={onSubmit}>
            Lưu lại
          </Button>
        </DialogActions>
      </CommonStyles.Box>
    </Dialog>
  );
};

export default Modal;
