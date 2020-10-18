import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { FirebaseStore } from 'config/fbConfig';
import { Empty, TypeButton, ButtonWrapper } from './Qna.styled';

import Loading from 'components/modules/loading/Loading';
import AnswerPresenter from './AnswerPresenter';
import EnrollPresenter from './wait';
import OtherData from './data';

const OwnQna = ({ userObj }) => {
  const [isLoading, setIsLoading] = useState(true);

  /* HAS-ANSWER & NON-ANSWER */
  const [isDone, setDone] = useState([]);
  const [isYet, setYet] = useState([]);

  /**
   *  show list
   *  HAS-ANSWER : 0
   *  NON-ANSWER : 1
   *  OTHER-PEOPLE : 2
   **/
  const [showAnswer, setAnswer] = useState(0);

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
            const lastIdx = done.length - 1;
            if (done.length === 0) {
              done = [questObj, ...done];
            } else if (
              moment(done[lastIdx].endedAt).isBefore(questObj.endedAt)
            ) {
              done = [questObj, ...done];
            } else if (moment(done[lastIdx].endedAt).isSame(questObj.endedAt)) {
              if (
                moment(done[lastIdx].createdAt).isBefore(questObj.createdAt)
              ) {
                done = [questObj, ...done];
              } else {
                done = [...done, questObj];
              }
            } else if (
              moment(done[lastIdx].endedAt).isAfter(questObj.endedAt)
            ) {
              done = [...done, questObj];
            }
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
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ButtonWrapper>
            <TypeButton
              current={showAnswer === 0}
              onClick={() => {
                setSelected({});
                setAnswer(0);
              }}
            >
              처방 완료 목록 ({isDone.length})
            </TypeButton>
            <TypeButton
              current={showAnswer === 1}
              onClick={() => {
                setSelected({});
                setAnswer(1);
              }}
            >
              처방 대기 목록 ({isYet.length})
            </TypeButton>
            <TypeButton
              current={showAnswer === 2}
              onClick={() => {
                setSelected({});
                setAnswer(2);
              }}
            >
              나이대별 처방 목록 조회
            </TypeButton>
          </ButtonWrapper>
          {showAnswer === 0 ? (
            <AnswerPresenter
              isDone={isDone}
              setSelected={setSelected}
              selected={selected}
            />
          ) : (
            <>
              {showAnswer === 1 ? (
                <EnrollPresenter
                  isYet={isYet}
                  setSelected={setSelected}
                  selected={selected}
                />
              ) : (
                <OtherData />
              )}
            </>
          )}
        </>
      )}
      <Empty />
    </>
  );
};

export default OwnQna;
