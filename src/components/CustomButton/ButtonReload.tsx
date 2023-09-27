import CommonStyles from 'components/CommonStyles';
import { useTheme } from '@mui/material/styles';

const ButtonReload = ({ handleClick }: { handleClick: () => void }) => {
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
        background: 'transparent',
        boxShadow: 'none',
        color: theme?.colors?.supportColor?.mint,
        borderRadius: '10px',
        border: `1px solid ${theme?.colors?.supportColor?.mint}`,
        '&:hover': { background: `transparent` },
      }}
      onClick={handleClick}
    >
      Tải lại
    </CommonStyles.Button>
  );
};

export default ButtonReload;
