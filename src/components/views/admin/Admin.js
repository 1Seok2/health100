import React, { useEffect, useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import moment from 'moment';
import {
  Containter,
  Wrapper,
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
} from './Admin.styled';

import Loading from 'components/modules/loading/Loading';

const Admin = ({ userObj }) => {
  const [isLoading, setLoading] = useState(true);
  const [needAdmin, setNeed] = useState([]);

  const [selected, setSelected] = useState({});

  const getAdminList = async () => {
    FirebaseStore.collection('users').onSnapshot((snap) => {
      let list = [];
      snap.docs.map((doc) => {
        console.log(doc.data());
        if (
          doc.data().isAvailable === 0 &&
          doc.data().isTrainer &&
          doc.data().isTrainer !== 2
        ) {
          const obj = {
            name: doc.data().tName,
            email: doc.data().userEmail,
            phone: doc.data().tPhone,
            createdAt: doc.data().createdAt,
          };
          list = [obj, ...list];
        }
      });
      setNeed(list);
      console.log(list);
    });
  };

  const accept = async (e) => {
    e.preventDefault();
    const updateType = await FirebaseStore.collection('users').doc(
      `${selected.docId}`,
    );
    updateType
      .update({
        isAvailable: 1,
      })
      .then(() => {
        alert('승인되었습니다.');
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
        alert('승인하지 못 하였습니다.');
      });
  };

  useEffect(() => {
    getAdminList().then(() => setLoading(false));
  }, []);

  return (
    <Containter>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <Title>승인 대기 리스트 ({needAdmin.length})</Title>
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
                신청일 : {moment(trainer.createdAt).format('YY.MM.DD')}
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
        </Wrapper>
      )}
    </Containter>
  );
};

export default Admin;
