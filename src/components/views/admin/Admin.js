import React, { useEffect, useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import moment from 'moment';
import { Containter, Wrapper } from './Admin.styled';

import Loading from 'components/modules/loading/Loading';
import ValidAuth from './valid';

const Admin = ({ userObj }) => {
  const [isLoading, setLoading] = useState(true);
  const [needAdmin, setNeed] = useState([]);

  /* true : valid / false : intro */
  const [type, setType] = useState(true);

  const [selected, setSelected] = useState({});

  const getAdminList = async () => {
    FirebaseStore.collection('users').onSnapshot((snap) => {
      let list = [];
      snap.docs.map((doc) => {
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
          <div>
            <button onClick={() => setType(true)}>권한 승인 대기</button>
            <button onClick={() => setType(false)}>소개 승인 대기</button>
          </div>
          {type ? (
            <ValidAuth
              needAdmin={needAdmin}
              setSelected={setSelected}
              selected={selected}
              accept={accept}
            />
          ) : (
            <div>ff</div>
          )}
        </Wrapper>
      )}
    </Containter>
  );
};

export default Admin;
