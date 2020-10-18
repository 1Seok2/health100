/**
 * @description 트레이너 모드에서 자신의 소개를
 *              등록 / 수정 / 삭제 할 수 있음
 */

import React from 'react';
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
const TrainerMode = ({ isExist, restart, decline, userObj }) => {
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
