/**
 * @description 일반 고객은 트레이너 소개 목록을,
 *              트레이너는 소개 영상 등록 위함
 */

import React, { useEffect, useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import YoutubeAPIScript from 'assets/script/YoutubeAPIScript';
import { Containter, Wrapper } from './ContactTrainer.styled';

import TrainerMode from './trainer';
import UserMode from './user';

const ContactTrainer = ({ userObj }) => {
  /* 유저모드 상태 */
  const [trainerList, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selected, setSelected] = useState();

  /* 트레이너 모드에서 자신의 소개가 존재하는지 */
  const [isExist, setExist] = useState(false);

  /* 유저모드에서 보여줄 트레이너 리스트 가져옴 */
  const getTrainerIntro = async () => {
    FirebaseStore.collection('users').onSnapshot((snap) => {
      let list = [];
      snap.docs.map((doc) => {
        if (doc.data().introAvailable) {
          const obj = {
            ...doc.data(),
          };
          list = [...list, obj];
        }
      });
      setList(list);
    });
  };

  /* 유저모드의 트레이너 정보 가져옴 */
  useEffect(() => {
    getTrainerIntro().then(() => setLoading(false));
  }, []);

  /* set youtube api script ... */
  useEffect(() => {
    YoutubeAPIScript();
  }, []);

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
    <Containter>
      <Wrapper>
        {userObj.type ? (
          <TrainerMode
            isExist={isExist}
            restart={restart}
            decline={decline}
            userObj={userObj}
          />
        ) : (
          <UserMode
            trainerList={trainerList}
            isLoading={isLoading}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </Wrapper>
    </Containter>
  );
};

export default ContactTrainer;
