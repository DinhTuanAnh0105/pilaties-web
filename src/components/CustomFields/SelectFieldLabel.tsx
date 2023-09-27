import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectProps } from '@mui/material/Select';
import { FieldInputProps, FormikProps } from 'formik';
import { get } from 'lodash';
import { SelectOption } from 'interfaces/common';
import CommonStyles from 'components/CommonStyles';
import { OutlinedInput } from '@mui/material';

interface SelectFieldProps extends SelectProps {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  options: SelectOption[];
  required?: boolean;
}

const SelectFieldLabel = ({
  field,
  form,
  options,
  label,
  required,
  ...props
}: SelectFieldProps) => {
  const { name, value, onBlur, onChange } = field || {};
  const { errors, touched } = form || {};

  const msgError = get(touched, name) && get(errors, name) ? (get(errors, name) as string) : '';

  return (
    <CommonStyles.Box sx={{ minWidth: 120 }}>
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
          <CommonStyles.Box component='span' sx={{ color: 'red', mr: 0.5 }}>
            *
          </CommonStyles.Box>
        )}
        {label}
      </CommonStyles.Typography>
      <FormControl fullWidth={props.fullWidth} error={!!msgError}>
        <Select
          id={`${name}`}
          labelId={`${name}`}
          value={value}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          input={<OutlinedInput size='small' />}
          {...props}
          sx={{
            borderRadius: '10px',
            '& div': {},
            '& input': {
              opacity: value ? 0 : 1,
              height: '100%',
              border: 'none',
              px: 2,
              fontSize: 14,
            },
          }}
        >
          {options.map((el) => {
            return (
              <MenuItem key={el.value} value={el.value}>
                {el.label}
              </MenuItem>
            );
          })}
        </Select>
        {!!msgError && <FormHelperText>{msgError}</FormHelperText>}
      </FormControl>
    </CommonStyles.Box>
  );
};

export default SelectFieldLabel;
