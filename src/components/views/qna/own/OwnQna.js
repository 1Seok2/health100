import React, { useState, useEffect } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import Loading from 'components/modules/loading/Loading';
import { Empty, TypeButton, ButtonWrapper } from './OwnQna.styled';

import AnswerList from './AnswerList';
import EnrollList from './EnrollList';

const OwnQna = ({ userObj }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDone, setDone] = useState([]);
  const [isYet, setYet] = useState([]);
  const [showAnswer, setAnswer] = useState(true);

  const [selected, setSelected] = useState({});

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
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ButtonWrapper>
            <TypeButton
              current={showAnswer}
              onClick={() => {
                setSelected({});
                setAnswer(true);
              }}
            >
              처방 완료 목록 ({isDone.length})
            </TypeButton>
            <TypeButton
              current={!showAnswer}
              onClick={() => {
                setSelected({});
                setAnswer(false);
              }}
            >
              처방 대기 목록 ({isYet.length})
            </TypeButton>
          </ButtonWrapper>
          {showAnswer ? (
            <AnswerList
              isDone={isDone}
              setSelected={setSelected}
              selected={selected}
            />
          ) : (
            <EnrollList
              isYet={isYet}
              setSelected={setSelected}
              selected={selected}
            />
          )}
        </>
      )}
      <Empty />
    </div>
  );
};

export default OwnQna;
