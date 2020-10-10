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
  Title,
  SForm,
  Select,
  SInput,
  PlusButton,
  ListTitle,
  TableWrapper,
  ButtonWrapper,
  SButton,
} from './MyPage.styled';

import EXERCISE_LIST from 'components/modules/list/ExerciseTitleList';

import Loading from 'components/modules/loading';
import ErrorContainer from 'components/modules/error';
import { Table } from './Table';
import { Link } from 'react-router-dom';
import Caliper from '../../modules/caliper/Caliper';

/* can see my exercising data */
const MyPage = ({ userObj }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [myList, setMyList] = useState([]);
  const [titles, setTitles] = useState([]);

  const [title, setTitle] = useState(EXERCISE_LIST[0]);
  const [count, setCount] = useState('');
  const [second, setSecond] = useState('');
  const [caliper, setCaliper] = useState('');
  const [gender, setGender] = useState('남성');

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

  const isNumber = (value) => {
    const regExp = /^[0-9]{0,}$/;
    if (value.match(regExp)) return true;
    else return false;
  };

  const onSelect = (e, v) => {
    setTitle(e.target.value);
  };

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    if (isNumber(value)) {
      switch (name) {
        case 'count':
          setCount(value);
          break;
        case 'second':
          setSecond(value);
          break;
        case 'caliper':
          if (isNumber(value)) {
            setCaliper(value);
          }
          break;
        default:
      }
    }
  };

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
        <Wrapper>
          <Title>
            나의 기록
            <Link
              to="/mypage/graph"
              style={{
                marginLeft: 12,
                fontSize: 14,
                color: '#092c6f',
              }}
            >
              | &nbsp;&nbsp;그래프로 보기
            </Link>
          </Title>
          {makePackage && <SButton onClick={submitPackage}>제출하기</SButton>}
          <SButton
            bgColor={makePackage}
            onClick={() => {
              setCheck({});
              setMake(!makePackage);
              if (!makePackage) {
                alert('처방을 원하는 항목들을 클릭하세요');
              }
            }}
          >
            {makePackage ? '선택취소' : '처방받기'}
          </SButton>
          <ButtonWrapper>
            <ListTitle>기록 직접 추가</ListTitle>
            <SForm onSubmit={directEnroll}>
              <Select
                id="title"
                defaultValue={EXERCISE_LIST[0]}
                onChange={onSelect}
              >
                {EXERCISE_LIST.map((title) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </Select>
              {/* 캘리퍼가 선택됐다면 */}
              {title === '캘리퍼' ? (
                <>
                  <Select
                    id="title"
                    defaultValue="남성"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="남성">남성</option>
                    <option value="여성">여성</option>
                  </Select>
                  <SInput
                    type="caliper"
                    name="caliper"
                    value={caliper}
                    onChange={onChange}
                    placeholder="스킨폴드(mm)"
                  />
                </>
              ) : (
                <>
                  <SInput
                    type="count"
                    name="count"
                    value={count}
                    onChange={onChange}
                    placeholder="운동 횟수(개)"
                  />
                  <SInput
                    type="second"
                    name="second"
                    value={second}
                    onChange={onChange}
                    placeholder="걸린 시간(초)"
                  />
                </>
              )}

              <PlusButton>추가</PlusButton>
            </SForm>
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
