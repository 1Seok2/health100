import React, { useEffect, useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import moment from 'moment';
import { Containter, Wrapper, TypeButton, Empty } from './Admin.styled';

import Loading from 'components/modules/loading/Loading';
import ValidAuth from './valid';
import IntroAuth from './introduce';

const Admin = ({ userObj }) => {
  const [isLoading, setLoading] = useState(true);
  const [needValid, setValid] = useState([]);
  const [needIntro, setIntro] = useState([]);

  /* true : valid / false : intro */
  const [type, setType] = useState(true);

  const [selected, setSelected] = useState({});

  const getAdminList = async () => {
    FirebaseStore.collection('users').onSnapshot((snap) => {
      let listValid = [];
      let listIntro = [];
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
          listValid = [obj, ...listValid];
        }
        if (!doc.data().introAvailable && doc.data().originSrc) {
          const obj = {
            name: doc.data().tName,
            email: doc.data().userEmail,
            createdAt: doc.data().createdAt,
            originSrc: doc.data().originSrc,
            src: doc.data().originSrc.includes('?v=')
              ? doc.data().originSrc.split('?v=')[1]
              : doc.data().originSrc.split('.be/')[1],
            desc: doc.data().desc,
          };
          listIntro = [obj, ...listIntro];
        }
      });
      setValid(listValid);
      setIntro(listIntro);
    });
  };

  const acceptValid = async (e) => {
    e.preventDefault();
    const updateType = await FirebaseStore.collection('users').doc(
      `${selected.key}`,
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

  const acceptIntro = async (e) => {
    e.preventDefault();
    const updateType = await FirebaseStore.collection('users').doc(
      `${selected.key}`,
    );
    updateType
      .update({
        introAvailable: 1,
        src: selected.src,
        originSrc: selected.originSrc,
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

  const rejectIntro = async (e) => {
    e.preventDefault();
    const updateType = await FirebaseStore.collection('users').doc(
      `${selected.key}`,
    );
    updateType
      .update({
        introAvailable: -1,
        src: '',
        originSrc: selected.originSrc,
      })
      .then(() => {
        alert('반려 처리 되었습니다.');
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
        alert('반려하지 못 하였습니다.');
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
            <TypeButton
              onClick={() => {
                setSelected({});
                setType(true);
              }}
              current={type}
            >
              권한 승인 대기 ({needValid.length})
            </TypeButton>
            <TypeButton
              onClick={() => {
                setSelected({});
                setType(false);
              }}
              current={!type}
            >
              소개 승인 대기 ({needIntro.length})
            </TypeButton>
          </div>
          {type ? (
            <ValidAuth
              needAdmin={needValid}
              setSelected={setSelected}
              selected={selected}
              accept={acceptValid}
            />
          ) : (
            <IntroAuth
              needIntro={needIntro}
              setSelected={setSelected}
              selected={selected}
              accept={acceptIntro}
              reject={rejectIntro}
            />
          )}
          <Empty />
        </Wrapper>
      )}
    </Containter>
  );
};

export default Admin;
