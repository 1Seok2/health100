import React from 'react';
import moment from 'moment';
import {
  Title,
  QuestTitle,
  TableWrapper,
  STable,
  SThead,
  STbody,
  STr,
  STh,
  STd,
  AcceptButton,
} from './ValidAuth.styled';

const ValidAuth = ({ needAdmin, setSelected, selected, accept }) => {
  return (
    <>
      <Title>트레이너 승인 대기 리스트 ({needAdmin.length})</Title>
      {needAdmin.map((trainer, idx) => (
        <div key={trainer.createdAt}>
          <QuestTitle
            onClick={() => {
              setSelected({
                key: trainer.createdAt,
                docId: trainer.createdAt,
              });
            }}
            current={trainer.createdAt === selected.key}
          >
            {trainer.name}
            {trainer.createdAt === selected.key && (
              <AcceptButton onClick={(e) => accept(e)}>승인</AcceptButton>
            )}
          </QuestTitle>
          <TableWrapper>
            <STable current={trainer.createdAt === selected.key}>
              <SThead>
                <STr>
                  <STh title={true}>이름</STh>
                  <STh title={true}>이메일</STh>
                  <STh title={true}>전화번호</STh>
                </STr>
              </SThead>
              <STbody>
                <STr>
                  <STd>{trainer.name}</STd>
                  <STd>{trainer.email}</STd>
                  <STd>{trainer.phone}</STd>
                </STr>
              </STbody>
            </STable>
          </TableWrapper>
        </div>
      ))}
    </>
  );
};
export default ValidAuth;
