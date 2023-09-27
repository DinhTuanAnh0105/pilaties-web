import CommonStyles from 'components/CommonStyles';
import React from 'react';

const BlockTitle = ({ title, count }: { title: string; count?: number }) => {
  //! define

  //! state

  //! function

  //! useEffect

  //! render
  return (
    <CommonStyles.Typography
      sx={{ fontSize: '32px', lineHeight: '48px', fontWeight: '700', marginTop: '15px' }}
    >
      {title} {count && `(${count})`}
    </CommonStyles.Typography>
  );
};

export default BlockTitle;
