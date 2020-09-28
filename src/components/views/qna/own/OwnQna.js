import React, { useState, useEffect } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import Loading from 'components/modules/loading/Loading';
import { Title } from './OwnQna.styled';

const OwnQna = ({ userObj }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDone, setDone] = useState([]);
  const [isYet, setYet] = useState([]);

  const getQuestions = async () => {
    FirebaseStore.collection('qna').onSnapshot((snap) => {
      let notYet = [];
      let done = [];
      let questObj;
      snap.docs.map((doc) => {
        if (doc.data().uid === userObj.uid) {
          questObj = {
            createdAt: doc.data().createdAt,
            uid: doc.data().uid,
            qna: doc.data().qna.split('|'),
            docId: doc.data().docId,
            answer: doc.data().answer,
          };
          if (doc.data().type === 1) {
            done = [questObj, ...done];
          } else if (doc.data().type === 0) {
            notYet = [questObj, ...notYet];
          }
        }
      });
      setDone(done);
      setYet(notYet);
    });
  };

  useEffect(() => {
    getQuestions().then(setIsLoading(false));
  }, []);

  return (
    <div>
      <Title>처방 완료 목록</Title>
      {isDone.map((item) => (
        <div>{item.answer}</div>
      ))}
      <Title>처방 신청 목록</Title>
      {isYet.map((item) => (
        <div>{item.createdAt}</div>
      ))}
    </div>
  );
};

export default OwnQna;
