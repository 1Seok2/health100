/**
 * @description  show data ...
 *               choose and enroll prescriptions ...
 */

import React, { useEffect, useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import moment from 'moment';

import { Container } from './MyPage.styled';

import Caliper from '../../modules/caliper/Caliper';
import MyPagePresenter from './MyPagePresenter';

import Loading from 'components/modules/loading';
import EXERCISE_LIST from 'components/modules/list/ExerciseTitleList';
import IsNumber from 'components/modules/check/IsNumber';

/* can see my exercising data */
const MyPageContainer = ({ userObj }) => {
  const [isLoading, setIsLoading] = useState(true);

  /* 내 운동 리스트와 리스트의 제목들 */
  const [myList, setMyList] = useState([]);
  const [titles, setTitles] = useState([]);

  /* 운동 목록들 */
  const [title, setTitle] = useState(EXERCISE_LIST[0]);

  /* 운동횟수, 운동시간, 캘리퍼 두께, 성별 */
  const [count, setCount] = useState('');
  const [second, setSecond] = useState('');
  const [caliper, setCaliper] = useState('');
  const [gender, setGender] = useState('남성');

  /* 처방 선택 목록 */
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
    FirebaseStore.collection(`${userObj.uid}`).onSnapshot((snap) => {
      let list = [];
      let title = [];
      snap.docs.map((doc) => {
        const listObj = {
          date: doc.data().createdAt,
          title: doc.data().exercise,
          count: doc.data().count,
          duration: doc.data().duration,
          email: doc.data().email,
        };
        list = [listObj, ...list];
        if (!titles.includes(listObj.title)) {
          title = [listObj.title, ...title];
        }
      });
      setMyList(list);
      setTitles(title);
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

  /* 선택된 운동목록 */
  const onSelect = (e, v) => {
    setTitle(e.target.value);
  };

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    if (IsNumber(value)) {
      switch (name) {
        case 'count':
          setCount(value);
          break;
        case 'second':
          setSecond(value);
          break;
        case 'caliper':
          if (IsNumber(value)) {
            setCaliper(value);
          }
          break;
        default:
      }
    }
  };

  /* 기록 직접 등록 */
  const directEnroll = async (e) => {
    e.preventDefault();
    if (
      (title !== '캘리퍼' && (count === '' || second === '')) ||
      (title === '캘리퍼' && caliper === '')
    ) {
      alert('시간과 횟수 모두 작성해주세요');
      return;
    }
    const date = Date.now();
    if (title !== '캘리퍼') {
      await FirebaseStore.collection(userObj.uid)
        .doc(`${date}`)
        .set({
          count: count,
          createdAt: date,
          duration: parseInt(second) * 1000,
          email: userObj.email,
          exercise: title,
          userId: userObj.uid,
        });
    } else {
      const calc = Caliper(caliper * 1, userObj.age * 1, gender);
      await FirebaseStore.collection(userObj.uid)
        .doc(`${date}`)
        .set({
          count: calc,
          createdAt: date,
          duration: parseInt(caliper) * 1000,
          email: userObj.email,
          exercise: title,
          userId: userObj.uid,
        });
    }
  };

  useEffect(() => {
    getMyData().then(() => setIsLoading(false));
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <MyPagePresenter
          makePackage={makePackage}
          submitPackage={submitPackage}
          setCheck={setCheck}
          setMake={setMake}
          directEnroll={directEnroll}
          onSelect={onSelect}
          title={title}
          setGender={setGender}
          caliper={caliper}
          count={count}
          onChange={onChange}
          second={second}
          titles={titles}
          myList={myList}
          select={select}
          checkPackage={checkPackage}
        />
      )}
    </Container>
  );
};

export default MyPageContainer;
