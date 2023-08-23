import React from 'react';
import CommonStyles from 'components/CommonStyles';
import { useTheme } from '@mui/material';
import { useAuth } from 'providers/AuthenticationProvider';
import { useTranslation } from 'react-i18next';
import { langMethod } from 'i18n';
import useGetTodos from 'hooks/todos/useGetTodos';
import useFiltersHandler from 'hooks/useFiltersHandler';
import cachedKeys from 'consts/cachedKeys';
import Student from './Student';

const Apps = () => {
  //! State
  const { t } = useTranslation();
  const theme = useTheme();
  const { isUser, user } = useAuth();

  const { filters } = useFiltersHandler({ page: 1, rowsPerPage: 10 });
  const { data, loading } = useGetTodos(filters, { refetchKey: cachedKeys.refetchTodos });

  //! Function

  //! Render
  const renderTodos = () => {
    if (loading) {
      return <CommonStyles.Loading />;
    }

    return (
      <CommonStyles.Box>
        <CommonStyles.Typography sx={{ mb: 2, mt: 2, color: theme.colors?.green }} variant='h3'>
          List of Todo
        </CommonStyles.Typography>
        {data.map((el) => {
          return (
            <CommonStyles.Box key={el.id}>
              {el.id} - {el.title}
            </CommonStyles.Box>
          );
        })}
      </CommonStyles.Box>
    );
  };

  if (isUser) {
    return (
      <CommonStyles.Box>
        <CommonStyles.Typography variant='h4' sx={{ mb: 2 }}>
          {t('shared:hello')} {user?.username}
        </CommonStyles.Typography>

        <CommonStyles.Box sx={{ p: 1, backgroundColor: theme.colors?.grayLight }}>
          <code>{JSON.stringify(user)}</code>
        </CommonStyles.Box>

        <CommonStyles.Button
          sx={{ mt: 2 }}
          onClick={() => {
            if (langMethod.getLang() === 'vi') {
              langMethod.changeLang('en');
            } else {
              langMethod.changeLang('vi');
            }
          }}
        >
          {t('shared:change')} {t('shared:to')}{' '}
          {langMethod.getLang() === 'vi' ? t('shared:english') : t('shared:vietnamese')}
        </CommonStyles.Button>

        {renderTodos()}
      </CommonStyles.Box>
    );
  }

  return (
    <CommonStyles.Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
        },
      }}
    >
      {data.map((el) => {
        return <Student key={el.id} student={el} />;
      })}
    </CommonStyles.Box>
  );
};

export default React.memo(Apps);
