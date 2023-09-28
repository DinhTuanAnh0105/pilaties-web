import CommonStyles from 'components/CommonStyles';

export const renderStatus = (status: number) => {
  switch (status) {
    case 1:
      return <CommonStyles.Box className='tagYellow'>Đặt chỗ</CommonStyles.Box>;
    case 2:
      return <CommonStyles.Box className='tagPurple'>Chưa diễn ra</CommonStyles.Box>;
    case 3:
      return <CommonStyles.Box className='tagGreen'>Đang tập</CommonStyles.Box>;
    case 4:
      return <CommonStyles.Box className='tagBlue'>Kết thúc</CommonStyles.Box>;
    case 5:
      return <CommonStyles.Box className='tagRed'>Huỷ lớp</CommonStyles.Box>;
    default:
      return null;
  }
};

export const renderStatusContract = (status: number) => {
  switch (status) {
    case 1:
      return <CommonStyles.Box className='tagGreen'>Hoạt động</CommonStyles.Box>;
    case 2:
      return <CommonStyles.Box className='tagPurple'>Chưa kích hoạt</CommonStyles.Box>;
    case 3:
      return <CommonStyles.Box className='tagRed'>Hết hạn</CommonStyles.Box>;
    default:
      return null;
  }
};
