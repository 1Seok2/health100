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
  Empty,
} from './OwnQna.styled';

const EnrollList = ({ selected, setSelected, isYet }) => {
  return (
    <>
      {isYet.map((quest, idx) => (
        <Container>
          <QuestTitle
            onClick={() => {
              setSelected({
                key: quest.createdAt + idx,
                docId: quest.docId,
              });
            }}
            current={`${quest.createdAt}${idx}` === selected.key}
          >
            신청일 : {quest.createdAt}
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
                    <STr>
                      <STd>{item[0]}</STd>
                      <STd>{item[1]}</STd>
                      <STd>{item[2]}</STd>
                    </STr>
                  );
                })}
              </STbody>
            </STable>
          </TableWrapper>
        </Container>
      ))}
      <Empty />
    </>
  );
};

export default EnrollList;
