import { Box } from '@mui/material';
import CommonStyles from 'components/CommonStyles';
import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface IProps {
  onChangeCustomize: any;
  label: string;
  required?: boolean;
  form?: any;
  field?: any;
  disabled?: boolean;
}
const TextEditor = (props: IProps) => {
  //! define
  const { form, field, onChangeCustomize, label, required, disabled } = props;
  const { name, value } = field;
  const { errors, touched } = form;

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'imageBlot',
    'color',
    'background',
  ];

  //! state

  //! function

  //! useEffect

  //! render
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
      <ReactQuill
        modules={modules}
        formats={formats}
        // style={{
        //   minHeight: '25vh',
        // }}
        value={value}
        theme='snow'
        onChange={onChangeCustomize || field.onChange}
      />
      {touched[name] && errors[name] && <div className='err-text'>{errors[name]}</div>}
    </Box>
  );
};

export default TextEditor;
