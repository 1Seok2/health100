import React, { useEffect, useState } from 'react';

import EnrollVideo from './EnrollVideo';
/* trainer can upload, watch, delete own video */
/* but Only "One" Video is accepted */
const TrainerMode = ({ userObj }) => {
  const [isExist, setExist] = useState(false);

  useEffect(() => {
    if (userObj.src !== undefined) setExist(true);
  });

  return (
    <div>
      {isExist ? (
        <>
          {userObj.introAvailable ? (
            <div>
              <h2>소개 동영상</h2>
              <iframe
                id="ytplayer"
                type="text/html"
                width="100%"
                height="360"
                src={`https://www.youtube.com/embed/${
                  userObj.src.split('?v=')[1]
                }?autoplay=1&origin=https://www.youtube.com/watch?v=${
                  userObj.src.split('?v=')[1]
                }`}
                frameborder="0"
              ></iframe>
              <h2>자기 소개</h2>
              <div>{userObj.desc}</div>
            </div>
          ) : (
            <div>현재 검수중입니다</div>
          )}
        </>
      ) : (
        <EnrollVideo userObj={userObj} />
      )}
    </div>
  );
};

export default TrainerMode;
