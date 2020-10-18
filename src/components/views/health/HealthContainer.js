/**
 * @description 유저모드에서 셀프 운동 페이지
 */

import React, { useEffect, useState } from 'react';

import HealthPresenter from './HealthPresenter';

const HealthContainer = ({ userObj }) => {
  /**
   *  true : 성인
   *  false : 노인
   **/
  const [isAdult, setAdult] = useState(true);

  const [showDetail, setShow] = useState({
    show: false,
  });

  /* 성인, 노인 구분 */
  useEffect(() => {
    if (parseInt(userObj.age) >= 65) setAdult(false);
  }, []);

  return (
    <HealthPresenter
      showDetail={showDetail}
      isAdult={isAdult}
      setShow={setShow}
      userObj={userObj}
    />
  );
};

export default HealthContainer;
