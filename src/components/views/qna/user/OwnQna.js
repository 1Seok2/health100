import React, { useState, useEffect } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import { Empty, TypeButton, ButtonWrapper } from './OwnQna.styled';

import Loading from 'components/modules/loading/Loading';
import AnswerList from './AnswerList';
import EnrollList from './EnrollList';

const OwnQna = ({ userObj }) => {
  const [isLoading, setIsLoading] = useState(true);

  /* HAS-ANSWER & NON-ANSWER */
  const [isDone, setDone] = useState([]);
  const [isYet, setYet] = useState([]);

  /* show HAS-ANSWER list OR NON-ANSWER list */
  const [showAnswer, setAnswer] = useState(true);

  /* object of selected in list */
  const [selected, setSelected] = useState({});

  /* get questions if uid is same */
  /* and separate HAS-ANSWER & NON-ANSWER */
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
            endedAt: doc.data().endedAt,
            ansTrainer: doc.data().ansTrainer,
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
