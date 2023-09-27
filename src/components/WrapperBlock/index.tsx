import BlockTitle from 'components/BlockTitle';
import CommonStyles from 'components/CommonStyles';
import React from 'react';

interface IProps {
  title?: string;
  children: React.ReactNode;
  count?: number;
}

const WrapperBlock = (props: IProps) => {
  //! define
  const { title, children, count } = props;

  //! render
  return (
    <CommonStyles.Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {title && <BlockTitle title={title} count={count} />}
      {children}
    </CommonStyles.Box>
  );
};

export default WrapperBlock;
