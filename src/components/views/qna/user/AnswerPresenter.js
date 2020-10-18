import React from 'react';
import {
  Container,
  TableWrapper,
  QuestTitle,
  STable,
  SThead,
  STbody,
  STh,
  STr,
  STd,
  Answer,
  Empty,
} from './Qna.styled';

/* question list which have answer */
const AnswerPresenter = ({ selected, setSelected, isDone }) => (
  <>
    {isDone.map((quest, idx) => (
      <Container current={`${quest.createdAt}${idx}` === selected.key}>
        <QuestTitle
          onClick={() => {
            if (selected.key === quest.createdAt + idx) {
              setSelected({
                key: '',
                docId: '',
              });
              return;
            }
            setSelected({
              key: quest.createdAt + idx,
              docId: quest.docId,
            });
          }}
          current={`${quest.createdAt}${idx}` === selected.key}
        >
          신청일/답변일 : {quest.createdAt} / {quest.endedAt}
        </QuestTitle>
        <TableWrapper>
          <STable current={`${quest.createdAt}${idx}` === selected.key}>
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
                  <STr key={qna}>
                    <STd>{item[0]}</STd>
                    <STd>{item[2]}</STd>
                    <STd>{item[1]}</STd>
                  </STr>
                );
              })}
            </STbody>
          </STable>
        </TableWrapper>
        <Answer
          onClick={() => {
            setSelected({
              key: quest.createdAt + idx,
              docId: quest.docId,
            });
          }}
        >
          답변한 트레이너 : {quest.ansTrainer}
          <br />
          &#x0003E;&#x0003E; 답변 :{' '}
          {`${quest.createdAt}${idx}` !== selected.key ? (
            <>
              {quest.answer.length > 30
                ? `${quest.answer.substring(0, 30)}... 더보기`
                : quest.answer}
            </>
          ) : (
            quest.answer
          )}
        </Answer>
      </Container>
    ))}
    <Empty />
  </>
);
export default AnswerPresenter;
