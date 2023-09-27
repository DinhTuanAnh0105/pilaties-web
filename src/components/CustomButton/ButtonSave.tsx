import CommonStyles from 'components/CommonStyles';
import { useTheme } from '@mui/material/styles';

const ButtonSave = ({ handleClick }: { handleClick: () => void }) => {
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
        background: theme?.colors?.secondary?.purple,
        boxShadow: 'none',
        color: theme?.colors?.white,
        borderRadius: '10px',
        '&:hover': { background: theme?.colors?.secondary?.purple },
        width: '152px',
      }}
      onClick={handleClick}
    >
      Lưu lại
    </CommonStyles.Button>
  );
};

export default ButtonSave;
