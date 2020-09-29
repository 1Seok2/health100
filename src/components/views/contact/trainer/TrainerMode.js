import React, { useEffect, useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';

import ErrorContainer from 'components/modules/error';
import EnrollVideo from './EnrollVideo';
/* trainer can upload, watch, delete own video */
/* but Only "One" Video is accepted */
const TrainerMode = ({ userObj }) => {
  const [isExist, setExist] = useState(false);

  const restart = async (e) => {
    e.preventDefault();
    const updateType = await FirebaseStore.collection('users').doc(
      `${userObj.createdAt}`,
    );
    updateType
      .update({
        isAvailable: 0,
      })
      .then(() => {
        alert('재등록하시기 바랍니다');
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
        alert('실패하였습니다');
      });
  };

  useEffect(() => {
    if (userObj.originSrc !== undefined) setExist(true);
  });

  return (
    <div>
      {isExist ? (
        <>
          {userObj.introAvailable === 1 ? (
            <div>
              <h2>소개 동영상</h2>
              <iframe
                id="ytplayer"
                type="text/html"
                width="100%"
                height="360"
                src={`https://www.youtube.com/embed/${
                  userObj.originSrc.split('?v=')[1]
                }?autoplay=1&origin=https://www.youtube.com/watch?v=${
                  userObj.originSrc.split('?v=')[1]
                }`}
                frameborder="0"
              ></iframe>
              <h2>자기 소개</h2>
              <div>{userObj.desc}</div>
            </div>
          ) : (
            <>
              {userObj.introAvailable === -1 ? (
                <>
                  <ErrorContainer txt="등록하신 소개서가 반려되었습니다." />
                  <div>YouTube URL : {userObj.originSrc}</div>
                  <div>소개 : {userObj.desc}</div>
                  <button>다시 신청하기</button>
                </>
              ) : (
                <ErrorContainer txt="현재 검수 중입니다" />
              )}
            </>
          )}
        </>
      ) : (
        <EnrollVideo userObj={userObj} />
      )}
    </div>
  );
};

export default TrainerMode;
