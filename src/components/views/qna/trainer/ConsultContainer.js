/**
 * @description 트레이너모드에서 트레이너가 처방하는 스크린
 */

import React, { useState, useEffect } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import moment from 'moment';
import ConsultPresenter from './ConsultPresenter';

/* trainer can answer for questions */
const TrainerAnswer = ({ userObj }) => {
  const [isLoading, setIsLoading] = useState(true);

  /* 처방대기리스트 */
  const [questList, setQuestList] = useState([]);

  /* 처방할 목록 선택 & 선택시 처방 가능한 입력창 표시 */
  const [selected, setSelected] = useState({});
  const [formShow, setFormShow] = useState(false);
  const [input, setInput] = useState('');

  /* 처방 필요한 항목들 불러오기 */
  const getQuestions = async () => {
    FirebaseStore.collection('qna').onSnapshot((snap) => {
      const questObj = snap.docs.map((doc) => {
        if (doc.data().type === 0) {
          return {
            createdAt: doc.data().createdAt,
            uid: doc.data().uid,
            qna: doc.data().qna.split('|'),
            docId: doc.data().docId,
            email: doc.data().email,
          };
        } else return;
      });
      setQuestList(questObj);
    });
  };

  /* 처방을 db 저장 */
  const submit = async (e) => {
    e.preventDefault();
    if (userObj.isAvailable === 0) {
      alert('승인되지 않은 트레이너입니다');
      return;
    }
    const updateType = await FirebaseStore.collection('qna').doc(
      selected.docId,
    );
    updateType
      .update({
        answer: input,
        type: 1,
        ansTrainer: `${userObj.tName} / ${userObj.email}`,
        endedAt: moment(Date.now()).format('YY.MM.DD'),
      })
      .then(() => {
        alert('처방 완료하였습니다!');
        setInput('');
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
        alert('처방하지 못했습니다');
      });
  };

  useEffect(() => {
    getQuestions().then(setIsLoading(false));

    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  return (
    <ConsultPresenter
      userObj={userObj}
      isLoading={isLoading}
      questList={questList}
      setSelected={setSelected}
      setFormShow={setFormShow}
      selected={selected}
      submit={submit}
      input={input}
      setInput={setInput}
      formShow={formShow}
    />
  );
};

export default TrainerAnswer;
