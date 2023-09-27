import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MuiTextField, { TextFieldProps } from '@mui/material/TextField';
import CommonStyles from 'components/CommonStyles';
import { FieldInputProps, FormikProps } from 'formik';
import { get, isString } from 'lodash';

interface Props {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  label?: string;
  required?: boolean;
}

const TextFieldLabel = ({ field, form, label, required, ...props }: Props & TextFieldProps) => {
  const { name, value, onBlur, onChange } = field || {};
  const { errors, touched } = form || {};
  const theme = useTheme();

  const msgError = get(touched, name) && get(errors, name) ? get(errors, name) : '';

  return (
    <Box>
      <CommonStyles.Typography
        sx={{
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '18px',
          color: '#111111',
          mb: 0.5,
        }}
      >
        {required && (
          <Box component='span' sx={{ color: 'red', mr: 0.5 }}>
            *
          </Box>
        )}
        {label}
      </CommonStyles.Typography>
      <MuiTextField
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        error={!!msgError}
        helperText={isString(msgError) && msgError}
        variant='outlined'
        sx={{
          '& .Mui-disabled': {
            backgroundColor: theme?.colors?.textColor?.text3,
            color: theme?.colors?.textColor?.text2,
          },
          '& label': {},
          '& input': {
            padding: '8px 12px',
            height: 24,
            borderRadius: '10px',
            color: theme?.colors?.textColor?.text1,
            fontSize: 14,
          },
          '& div': {
            borderRadius: '10px',
            padding: '0px',
          },
        }}
        {...props}
      />
    </Box>
  );
};

export default TextFieldLabel;
