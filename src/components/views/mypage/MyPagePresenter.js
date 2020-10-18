/**
 * @description  show data ...
 *               choose and enroll prescriptions ...
 */

import React from 'react';
import { Link } from 'react-router-dom';
import {
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

import ErrorContainer from 'components/modules/error';
import Table from './Table';

const MyPagePresenter = ({
  makePackage,
  submitPackage,
  setCheck,
  setMake,
  directEnroll,
  onSelect,
  title,
  setGender,
  caliper,
  count,
  onChange,
  second,
  titles,
  myList,
  select,
  checkPackage,
}) => (
  <Wrapper>
    <Title>
      나의 기록
      <Link
        to="/mypage/graph"
        style={{
          marginLeft: 12,
          fontSize: 14,
          color: '#092c6f',
          fontFamily: 'Nanum Gothic',
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
      <ListTitle style={{ marginTop: 70 }}>기록 직접 추가</ListTitle>
      <SForm onSubmit={directEnroll}>
        <Select id="title" defaultValue={EXERCISE_LIST[0]} onChange={onSelect}>
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
    {titles.length === 0 && <ErrorContainer txt="데이터가 존재하지 않습니다" />}
  </Wrapper>
);

export default MyPagePresenter;
