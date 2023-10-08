import BlockTitle from 'components/BlockTitle';
import CommonStyles from 'components/CommonStyles';
import React from 'react';

interface IProps {
  title?: string;
  children: React.ReactNode;
  toolbar?: React.ReactNode;
  count?: number;
}

const WrapperBlock = (props: IProps) => {
  //! define
  const { title, children, count, toolbar } = props;

  //! render
  return (
    <CommonStyles.Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <CommonStyles.Box
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        {title && <BlockTitle title={title} count={count} />}
        {toolbar && toolbar}
      </CommonStyles.Box>
      {children}
    </CommonStyles.Box>
  );
};

export default WrapperBlock;
