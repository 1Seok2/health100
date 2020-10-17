/**
 * @description 관리자 전용 페이지
 */

import React, { useEffect, useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import AdminPresenter from './AdminPresenter';

const AdminContainer = () => {
  const [isLoading, setLoading] = useState(true);

  /* 검수가 필요한 항목들 */
  const [needValid, setValid] = useState([]);
  const [needIntro, setIntro] = useState([]);

  /* true : valid / false : intro */
  const [type, setType] = useState(true);

  /* 검수 위해 선택된 항목 */
  const [selected, setSelected] = useState({});

  /* 검수해야할 목록 불러오기 */
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
          listValid = [...listValid, obj];
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
          listIntro = [...listIntro, obj];
        }
      });
      setValid(listValid);
      setIntro(listIntro);
    });
  };

  /* 검수 승인 */
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

  /* 트레이너 소개 승인 */
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

  /* 승인 반려 */
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
    <AdminPresenter
      isLoading={isLoading}
      setSelected={setSelected}
      setType={setType}
      type={type}
      needValid={needValid}
      needIntro={needIntro}
      selected={selected}
      acceptValid={acceptValid}
      acceptIntro={acceptIntro}
      rejectIntro={rejectIntro}
    />
  );
};

export default AdminContainer;
