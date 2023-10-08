import { Dialog, DialogContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CommonStyles from 'components/CommonStyles';
import ButtonClose from 'components/CustomButton/ButtonClose';

const ModalRemain = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  //! define
  const theme = useTheme();

  //! state

  //! function

  //! useEffect

  //! render
  return (
    <Dialog open={open} onClose={onClose} fullWidth sx={{ zIndex: 1201 }}>
      <CommonStyles.Box style={{ margin: '24px' }}>
        <Typography sx={{ fontSize: '24px', fontWeight: 700, lineHeight: '28px', mb: '16px' }}>
          Nguyễn Thị A còn 30 buổi
        </Typography>
        <DialogContent sx={{ p: 1, w: '100%' }}>
          <CommonStyles.Box>
            <table>
              <thead style={{ background: `${theme?.colors?.lineColor}` }}>
                <tr>
                  <td>Gói tập luyện</td>
                  <td>Số buổi còn lại</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gói 1</td>
                  <td>
                    <div>GX: 1/20</div>
                    <div>PT: 2/30</div>
                  </td>
                </tr>
                <tr>
                  <td>Gói 2</td>
                  <td>
                    <div>GX: 1/20</div>
                    <div>PT: 2/30</div>
                  </td>
                </tr>
                <tr>
                  <td>Gói 3</td>
                  <td>
                    <div>GX: 1/20</div>
                    <div>PT: 2/30</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </CommonStyles.Box>
        </DialogContent>
        <CommonStyles.Box sx={{ textAlign: 'center', pt: '24px' }}>
          <ButtonClose handleClick={onClose} />
        </CommonStyles.Box>
      </CommonStyles.Box>
    </Dialog>
  );
};

export default ModalRemain;
