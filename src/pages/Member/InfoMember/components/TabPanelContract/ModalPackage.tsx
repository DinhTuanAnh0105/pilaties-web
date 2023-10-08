import { Dialog, DialogContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CommonStyles from 'components/CommonStyles';
import ButtonClose from 'components/CustomButton/ButtonClose';

const ModalPackage = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
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
          Các gói tập trong hợp đồng HD528238
        </Typography>
        <DialogContent sx={{ p: 1, w: '100%' }}>
          <CommonStyles.Box>
            <table>
              <thead style={{ background: `${theme?.colors?.lineColor}` }}>
                <tr>
                  <td>Gói tập luyện</td>
                  <td>Nội dung gói</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gói 1</td>
                  <td>
                    <div>GX: 20</div>
                    <div>PT: 20</div>
                  </td>
                </tr>
                <tr>
                  <td>Gói 2</td>
                  <td>
                    <div>GX: 20</div>
                    <div>PT: 30</div>
                  </td>
                </tr>
                <tr>
                  <td>Tổng cộng</td>
                  <td>
                    <div>GX: 40</div>
                    <div>PT: 50</div>
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

export default ModalPackage;
