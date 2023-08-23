import MuiIconButton, { IconButtonProps } from '@mui/material/IconButton';
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';
import CommonStyles from 'components/CommonStyles';

// import ButtonMUI as Button from '@mui/material/Button'
type TypeButton = IconButtonProps & LoadingButtonProps;
interface Props extends TypeButton {
  isIconButton?: boolean;
}

const Button = ({ isIconButton, ...props }: Props) => {
  if (isIconButton) {
    return <MuiIconButton {...props}>{props.children}</MuiIconButton>;
  }

  return (
    <CommonStyles.Box>
      <LoadingButton variant='contained' {...props}>
        {props.children}
      </LoadingButton>
    </CommonStyles.Box>
  );
};

export default Button;
