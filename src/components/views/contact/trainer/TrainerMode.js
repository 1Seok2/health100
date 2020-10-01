import React, { useEffect, useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import { UserEnrollInfo, GoReEnrollButton, STitle } from './TrainerMode.styled';

import ErrorContainer from 'components/modules/error';
import EnrollVideo from './EnrollVideo';
import UpdateVideo from './UpdateVideo';

/**
 * isAvailable : 의미
 * undefined : 아직 등록하지 않음
 * -1 : 반려됨. 0으로 바꾸어 재등록 필요
 *  0 : 신청 후 승인 대기 / 한 번 이상 신청했던 사람
 *  1 : 승인됨.
 */

/* trainer can upload, watch, delete own video */
/* but Only "One" Video is accepted */
const TrainerMode = ({ userObj }) => {
  const [isExist, setExist] = useState(false);

  /* 수정하기 클릭 시 */
  const needUpdate = async (e) => {
    e.preventDefault();
    const updateType = await FirebaseStore.collection('users').doc(
      `${userObj.createdAt}`,
    );
    updateType
      .update({
        introAvailable: 2,
        originSrc: userObj.originSrc,
        src: '',
        desc: userObj.desc,
      })
      .then(() => {
        alert('다시 작성해주세요');
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
        alert('실패하였습니다');
      });
  };

  /* 반려처리에서 재 등록 원할 시 */
  const restart = async (e) => {
    e.preventDefault();
    const updateType = await FirebaseStore.collection('users').doc(
      `${userObj.createdAt}`,
    );
    updateType
      .update({
        introAvailable: 2,
        originSrc: userObj.originSrc,
        src: '',
        desc: userObj.desc,
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
        alert('실패하였습니다');
      });
  };

  /* 승인 대기 중 취소하고 싶을 시 */
  const decline = async (e) => {
    e.preventDefault();
    const yes = window.confirm('신청을 취소하시겠습니까?');
    if (yes) {
      const updateType = await FirebaseStore.collection('users').doc(
        `${userObj.createdAt}`,
      );
      updateType
        .update({
          introAvailable: 0,
          originSrc: '',
          src: '',
          desc: '',
        })
        .catch(function (error) {
          // The document probably doesn't exist.
          console.error('Error updating document: ', error);
          alert('실패하였습니다');
        });
    }
  };

  useEffect(() => {
    if (userObj.originSrc !== undefined && userObj.originSrc !== '')
      setExist(true);
  }, []);

  return (
    <div>
      {isExist ? (
        <>
          {userObj.introAvailable === 1 ? (
            <div>
              <STitle>소개 동영상</STitle>
              <iframe
                title={userObj.src}
                id="ytplayer"
                type="text/html"
                width="100%"
                height="360"
                src={`https://www.youtube.com/embed/${
                  userObj.originSrc.split('?v=')[1]
                }?autoplay=0&origin=https://www.youtube.com/watch?v=${
                  userObj.originSrc.split('?v=')[1]
                }`}
                frameborder="0"
              ></iframe>
              <STitle>자기 소개</STitle>
              <UserEnrollInfo>{userObj.desc}</UserEnrollInfo>
              <GoReEnrollButton onClick={restart}>수정하기</GoReEnrollButton>
            </div>
          ) : (
            <>
              {userObj.introAvailable === -1 ? (
                <>
                  <ErrorContainer txt="등록하신 소개서가 반려되었습니다." />
                  <UserEnrollInfo>
                    YouTube URL : {userObj.originSrc}
                  </UserEnrollInfo>
                  <UserEnrollInfo>소개 : {userObj.desc}</UserEnrollInfo>
                  <GoReEnrollButton onClick={restart}>
                    수정하기
                  </GoReEnrollButton>
                </>
              ) : (
                <>
                  {userObj.introAvailable === 2 ? (
                    <UpdateVideo userObj={userObj} />
                  ) : (
                    <>
                      <ErrorContainer txt="현재 검수 중입니다" />
                      <UserEnrollInfo>
                        YouTube URL : {userObj.originSrc}
                      </UserEnrollInfo>
                      <UserEnrollInfo>소개 : {userObj.desc}</UserEnrollInfo>
                      <GoReEnrollButton onClick={decline}>
                        취소하기
                      </GoReEnrollButton>
                      <GoReEnrollButton blue={true} onClick={restart}>
                        수정하기
                      </GoReEnrollButton>
                    </>
                  )}
                </>
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
