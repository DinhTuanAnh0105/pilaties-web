import CommonStyles from 'components/CommonStyles';
import { useTheme } from '@mui/material/styles';

const ButtonExport = ({ handleClick }: { handleClick: () => void }) => {
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
        background: theme?.colors?.buttonColor?.blue,
        boxShadow: 'none',
        color: theme?.colors?.white,
        borderRadius: '10px',
        '&:hover': { background: theme?.colors?.buttonColor?.blue },
      }}
      onClick={handleClick}
    >
      Export
    </CommonStyles.Button>
  );
};

export default ButtonExport;
