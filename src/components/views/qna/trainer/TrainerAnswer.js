import React, { useState, useEffect } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import moment from 'moment';
// import Infinite from 'react-infinite';
import {
  TableWrapper,
  Title,
  QuestTitle,
  EnrollDay,
  STable,
  SThead,
  STbody,
  STh,
  STr,
  STd,
  FromWrapper,
  SForm,
  TextArea,
  Submit,
  Decline,
  Empty,
} from './TrainerAnswer.styled';

import Loading from 'components/modules/loading/Loading';

/* trainer can answer for questions */
const TrainerAnswer = ({ userObj }) => {
  const [questList, setQuestList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
    <div>
      {userObj.isAvailable === 1 ? (
        <Title>트레이너님, 처방 부탁드려요 !</Title>
      ) : (
        <Title>처방 권한 승인 대기중입니다</Title>
      )}
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {questList.map(
            (quest, idx) =>
              quest !== undefined && (
                <div key={quest.docId}>
                  <QuestTitle
                    onClick={() => {
                      setSelected({
                        key: quest.createdAt + idx,
                        docId: quest.docId,
                      });
                      setFormShow(true);
                    }}
                    current={`${quest.createdAt}${idx}` === selected.key}
                  >
                    신청자 : {quest.email}
                    <EnrollDay
                      current={`${quest.createdAt}${idx}` === selected.key}
                    >
                      신청일 : {quest.createdAt}
                    </EnrollDay>
                  </QuestTitle>
                  <TableWrapper>
                    <STable
                      current={`${quest.createdAt}${idx}` === selected.key}
                    >
                      <SThead>
                        <STr>
                          <STh title={true}>운동종류</STh>
                          <STh title={true}>운동횟수</STh>
                          <STh title={true}>운동시간</STh>
                        </STr>
                      </SThead>
                      <STbody>
                        {quest.qna.map((qna) => {
                          const item = qna.split(',');
                          if (item[0].length < 3) return;
                          return (
                            <STr key={item[0]}>
                              <STd>{item[0]}</STd>
                              <STd>{item[2]}</STd>
                              <STd>{item[1]}</STd>
                            </STr>
                          );
                        })}
                      </STbody>
                    </STable>
                  </TableWrapper>
                </div>
              ),
          )}
        </div>
      )}
      {formShow && userObj.isAvailable === 1 && (
        <FromWrapper>
          <SForm onSubmit={(e) => submit(e)}>
            <TextArea
              placeholder={`어떠한 운동이 필요해 보이시나요?\n필요한 운동을 적어주세요`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Submit>처방하기</Submit>
            <Decline onClick={() => setFormShow(false)}>취소하기</Decline>
          </SForm>
        </FromWrapper>
      )}
      {formShow && <Empty />}
    </div>
  );
};

export default TrainerAnswer;
