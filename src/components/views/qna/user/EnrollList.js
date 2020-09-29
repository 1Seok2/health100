import React from 'react';
import { FirebaseStore } from 'config/fbConfig';
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
} from './OwnQna.styled';

/* question list which dont have answer */
const EnrollList = ({ selected, setSelected, isYet }) => {
  const deleteItem = () => {
    const areYouSure = window.confirm('정말 삭제하시겠습니까?');
    if (areYouSure) {
      /* delete item ... */
      FirebaseStore.collection('qna')
        .doc(selected.docId)
        .delete()
        .then(() => alert('삭제되었습니다!'))
        .catch((err) => {
          console.log(err);
          alert('삭제하지 못 하였습니다');
        });
    }
    setSelected({});
  };

  return (
    <>
      {isYet.map((quest, idx) => (
        <Container key={quest.docId}>
          <QuestTitle
            onClick={() => {
              setSelected({
                key: quest.createdAt + idx,
                docId: quest.docId,
              });
            }}
            current={`${quest.createdAt}${idx}` === selected.key}
            yet={true}
          >
            신청일 : {quest.createdAt}
            {`${quest.createdAt}${idx}` === selected.key && (
              <DeleteButton onClick={() => deleteItem()}>삭제</DeleteButton>
            )}
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
