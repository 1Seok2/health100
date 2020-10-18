/**
 * @description 다른 사람들 처방목록 보여주는 표
 */

import React, { memo } from 'react';
import {
  STable,
  SThead,
  STbody,
  STh,
  STr,
  STd,
  TableWrapper,
} from '../Qna.styled';

/* 데이터를 활용한 표 출력 */
const OtherPeopleTable = memo(({ search, people }) => (
  <TableWrapper>
    <STable current={true}>
      <SThead>
        <STr>
          <STh>구분</STh>
          <STh>나이</STh>
          <STh>처방받은 운동</STh>
          <STh>수상여부</STh>
        </STr>
      </SThead>
      <STbody>
        {people.map((person) => {
          const { AGE_GBN, TEST_AGE, PRES_NOTE, CERT_GBN } = person;
          if (AGE_GBN === search.age && CERT_GBN === search.reward) {
            return (
              <STr key={Math.random() + AGE_GBN}>
                <STd>{AGE_GBN}</STd>
                <STd>{TEST_AGE}</STd>
                <STd>{PRES_NOTE}</STd>
                <STd>{CERT_GBN}</STd>
              </STr>
            );
          }
        })}
      </STbody>
    </STable>
  </TableWrapper>
));

export default OtherPeopleTable;
