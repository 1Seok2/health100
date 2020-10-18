/**
 * @description 공공데이터를 이용해 처방목록 조회
 */

import React from 'react';
import {
  FormWrapper,
  ListTitle,
  SForm,
  SetButton,
  Select,
} from '../Qna.styled';

import OtherPeopleTable from './OtherPeopleTable';

const OtherPeoplePresenter = ({ onChange, searchData, search, people }) => (
  <>
    <FormWrapper>
      <ListTitle>나이 기준 조회</ListTitle>
      <SForm>
        <Select id="age" name="age" defaultValue="청소년" onChange={onChange}>
          <option value="청소년">청소년</option>
          <option value="성인">성인</option>
          <option value="노인">노인</option>
        </Select>
        <Select
          id="reward"
          name="reward"
          defaultValue="금상"
          onChange={onChange}
        >
          <option value="금상">금상</option>
          <option value="은상">은상</option>
          <option value="동상">동상</option>
          <option value="참가상">참가상</option>
        </Select>
        <SetButton onClick={() => searchData()}>조회</SetButton>
      </SForm>
    </FormWrapper>
    {search.submit && <OtherPeopleTable search={search} people={people} />}
  </>
);

export default OtherPeoplePresenter;
