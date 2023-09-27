import CommonStyles from 'components/CommonStyles';
import { useTheme } from '@mui/material/styles';

const ButtonCancel = ({ handleClick }: { handleClick: () => void }) => {
  //! define

  //! state
  const theme = useTheme();

  //! function

  //! useEffect

  //! render
  return (
    <CommonStyles.Button
      sx={{
        textTransform: 'unset',
        background: theme?.colors?.line,
        boxShadow: 'none',
        color: theme?.colors?.textColor?.text2,
        borderRadius: '10px',
        '&:hover': { background: theme?.colors?.line },
        width: '152px',
      }}
      onClick={handleClick}
    >
      Hủy bỏ
    </CommonStyles.Button>
  );
};

export default ButtonCancel;
