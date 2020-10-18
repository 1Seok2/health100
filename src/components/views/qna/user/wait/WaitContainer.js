/**
 * @description 처방신청 하였으나 아직 답변받지 못 한 항목
 */

import React from 'react';
import { FirebaseStore } from 'config/fbConfig';
import WaitPresenter from './WaitPresenter';

/* question list which dont have answer */
const EnrollList = ({ selected, setSelected, isYet }) => {
  /* 처방 대기목록 중 삭제시 */
  const deleteItem = () => {
    const areYouSure = window.confirm('정말 삭제하시겠습니까?');
    if (areYouSure) {
      /* delete item ... */
      FirebaseStore.collection('qna')
        .doc(selected.docId)
        .delete()
        .then(() => alert('삭제되었습니다!'))
        .catch((err) => {
          console.error(err);
          alert('삭제하지 못 하였습니다');
        });
    }
    setSelected({});
  };

  return (
    <WaitPresenter
      isYet={isYet}
      selected={selected}
      setSelected={setSelected}
      deleteItem={deleteItem}
    />
  );
};

export default EnrollList;
