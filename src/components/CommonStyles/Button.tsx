import MuiIconButton, { IconButtonProps } from '@mui/material/IconButton';
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';
// import ButtonMUI as Button from '@mui/material/Button'
type TypeButton = IconButtonProps & LoadingButtonProps;
interface Props extends TypeButton {
  isIconButton?: boolean;
}

const Button = ({ isIconButton, ...props }: Props) => {
  if (isIconButton) {
    return <MuiIconButton {...props}>{props.children}</MuiIconButton>;
  }

  return <LoadingButton {...props}>{props.children}</LoadingButton>;
};

export default Button;
