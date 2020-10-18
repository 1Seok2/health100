/**
 * @description 처방 대기목록 표
 */

import React, { memo } from 'react';
import {
  TableWrapper,
  QuestTitle,
  EnrollDay,
  STable,
  SThead,
  STbody,
  STh,
  STr,
  STd,
} from './Consult.styled';

const ConsultTable = memo(
  ({ setSelected, setFormShow, quest, selected, idx }) => (
    <>
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
        <EnrollDay current={`${quest.createdAt}${idx}` === selected.key}>
          신청일 : {quest.createdAt}
        </EnrollDay>
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
      </TableWrapper>
    </>
  ),
);
export default ConsultTable;
