import { useTheme } from '@mui/material';
import CommonStyles from 'components/CommonStyles';
import { Todo } from 'interfaces/todo';
import React from 'react';

const Student = ({ student }: { student: Todo }) => {
  const theme = useTheme();

  return (
    <CommonStyles.Box
      className='student'
      sx={{
        border: 1,
        p: 1,
        [theme.breakpoints.down('md')]: {
          backgroundColor: theme.colors?.purple,
        },

        '& > .name-student': {
          color: theme.colors?.red,
          [theme.breakpoints.down('md')]: {
            color: theme.colors?.white,
          },
        },
      }}
    >
      <CommonStyles.Typography className='name-student'>
        Name: {student.title}
      </CommonStyles.Typography>
    </CommonStyles.Box>
  );
};

export default Student;
