import CommonStyles from 'components/CommonStyles';
import { useTheme } from '@mui/material/styles';

const ButtonSearch = ({ handleClick }: { handleClick: () => void }) => {
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
        color: theme?.colors?.buttonColor?.blue,
        borderRadius: '10px',
        border: `1px solid ${theme?.colors?.buttonColor?.blue}`,
        '&:hover': { background: `transparent` },
      }}
      onClick={handleClick}
    >
      Tìm kiếm
    </CommonStyles.Button>
  );
};

export default ButtonSearch;
