import { Dialog, DialogActions, DialogContent, Typography } from '@mui/material';
import CommonStyles from 'components/CommonStyles';
import ButtonCancel from 'components/CustomButton/ButtonCancel';
import Modal from 'components/Modal';

const ModalRemain = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  //! define

  //! state

  //! function

  //! useEffect

  //! render
  return (
    <Dialog open={open} onClose={onClose} fullWidth sx={{ zIndex: 1201 }}>
      <CommonStyles.Box style={{ margin: '24px' }}>
        <Typography sx={{ fontSize: '32px', fontWeight: 700, lineHeight: '48px' }}>
          Nguyễn Thị A còn 30 buổi
        </Typography>
        <DialogContent sx={{ p: 1 }}>
          <div></div>
        </DialogContent>
        <DialogActions>
          <ButtonCancel handleClick={onClose} />
        </DialogActions>
      </CommonStyles.Box>
    </Dialog>
  );
};

export default ModalRemain;
