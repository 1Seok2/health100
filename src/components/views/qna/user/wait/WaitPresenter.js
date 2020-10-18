/**
 * @description 처방신청 하였으나 아직 답변받지 못 한 항목
 */

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
  DeleteButton,
} from '../Qna.styled';

const WaitPresenter = ({ isYet, selected, setSelected, deleteItem }) => (
  <>
    {isYet.map((quest, idx) => (
      <Container
        key={quest.docId}
        current={`${quest.createdAt}${idx}` === selected.key}
      >
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
          yet={true}
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
                  <STr key={item[0]}>
                    <STd>{item[0]}</STd>
                    <STd>{item[2]}</STd>
                    <STd>{item[1]}</STd>
                  </STr>
                );
              })}
            </STbody>
          </STable>
          {`${quest.createdAt}${idx}` === selected.key && (
            <DeleteButton onClick={() => deleteItem()}>삭제</DeleteButton>
          )}
        </TableWrapper>
      </Container>
    ))}
    <Empty />
  </>
);

export default WaitPresenter;
