import CommonStyles from 'components/CommonStyles';
import { useTheme } from '@mui/material/styles';

const ButtonCreate = ({ handleClick }: { handleClick: () => void }) => {
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
        background: theme?.colors?.buttonColor?.green,
        boxShadow: 'none',
        color: theme?.colors?.white,
        borderRadius: '10px',
        '&:hover': { background: theme?.colors?.buttonColor?.green },
      }}
      onClick={handleClick}
    >
      Thêm mới
    </CommonStyles.Button>
  );
};

export default ButtonCreate;
