/**
 * show data ...
 * choose and enroll prescriptions ...
 */

import React, { useEffect, useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import moment from 'moment';
import {
  Container,
  Wrapper,
  ListTitle,
  TableWrapper,
  ButtonWrapper,
  SButton,
} from './MyPage.styled';

import EXERCISE_LIST from 'components/modules/list/ExerciseTitleList';

import Loading from 'components/modules/loading';
import ErrorContainer from 'components/modules/error';
import { Table } from './Table';

/* can see my exercising data */
const MyPage = ({ userObj }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [myList, setMyList] = useState([]);
  const [titles, setTitles] = useState([]);

  const [makePackage, setMake] = useState(false);
  const [checkPackage, setCheck] = useState({});

  /* selected list for enroll consultin */
  const select = (s_title, s_date, s_duration, s_count, s_email) => {
    setCheck({
      ...checkPackage,
      [s_title]: {
        /* 운동날짜, 운동시간, 운동횟수 */
        date: s_date,
        duration: s_duration,
        count: s_count,
        email: s_email,
      },
    });
  };

  /* get data from firestore ...  */
  const getMyData = async () => {
    const data = await FirebaseStore.collection(`${userObj.uid}`).get();
    data.forEach((document) => {
      const listObj = {
        date: document.data().createdAt,
        title: document.data().exercise,
        count: document.data().count,
        duration: document.data().duration,
        email: document.data().email,
      };
      setMyList((prev) => [listObj, ...prev]);
      if (!titles.includes(listObj.title)) {
        setTitles((prev) => [...prev, listObj.title]);
      }
    });
  };

  /* save checkPackage in firebase db */
  /* it exists in qna page */
  const submitPackage = async () => {
    let string = '';
    const docId = `${Date.now()}`;
    titles.map((title) => {
      if (string.includes(title)) return;
      if (checkPackage[title]?.duration !== undefined) {
        string =
          `${title},` +
          `${checkPackage[title]?.duration} 초,` +
          `${checkPackage[title]?.count} 회|` +
          string;
      }
    });
    if (string.includes('undefined') || string === '') {
      alert('처방할 데이터를 선택해주세요');
      return;
    }
    await FirebaseStore.collection('qna')
      .doc(docId)
      .set({
        qna: string,
        uid: userObj.uid,
        createdAt: moment(Date.now()).format('YY.MM.DD'),
        docId: docId,
        email: userObj.email,
        type: 0, // 아직 답변이 달리지 않음. 답변 달리면 1로 업데이트
      });
    alert('처방 신청이 완료되었습니다');
    setMake(false);
  };

  useEffect(() => {
    getMyData().then(() => setIsLoading(false));
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <ButtonWrapper>
            <SButton
              bgColor={makePackage}
              onClick={() => {
                setCheck({});
                setMake(!makePackage);
              }}
            >
              {makePackage ? '선택취소' : '처방받기'}
            </SButton>
            {makePackage && <SButton onClick={submitPackage}>제출하기</SButton>}
          </ButtonWrapper>
          {EXERCISE_LIST.map((itemTitle) => {
            if (titles.includes(itemTitle)) {
              return (
                <div key={itemTitle}>
                  <ListTitle>{itemTitle}</ListTitle>
                  <TableWrapper>
                    <Table
                      myList={myList}
                      title={itemTitle}
                      key={itemTitle}
                      select={select}
                      makePackage={makePackage}
                      setMake={setMake}
                      checkPackage={checkPackage}
                      setCheck={setCheck}
                    />
                  </TableWrapper>
                </div>
              );
            } else return null;
          })}
          {titles.length === 0 && (
            <ErrorContainer txt="데이터가 존재하지 않습니다" />
          )}
        </Wrapper>
      )}
    </Container>
  );
};

export default MyPage;
