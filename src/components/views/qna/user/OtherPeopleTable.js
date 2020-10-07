import React, { memo, useState } from 'react';
import { STable, SThead, STbody, STh, STr, STd } from './OwnQna.styled';

/* 데이터를 활용한 표 출력 */
const OtherPeopleTable = memo(({ search, people }) => {
  const [listTitle, setTitle] = useState([]);
  const [listCount, setCount] = useState([]);

  return (
    <STable set={search.start !== '' && search.end !== ''}>
      <SThead>
        <STh>구분</STh>
        <STh>나이</STh>
        <STh>처방받은 운동</STh>
        <STh>수상여부</STh>
      </SThead>
      <STbody>
        {people.map((person) => {
          const { AGE_GBN, TEST_AGE, PRES_NOTE, CERT_GBN } = person;
          // let presNote;
          // if (
          //   PRES_NOTE?.includes('본운동:') &&
          //   PRES_NOTE?.includes('준비운동:')
          // ) {
          //   const tmp = PRES_NOTE?.split('준비운동:')[1];
          //   presNote = tmp?.split('본운동:');
          // } else if (PRES_NOTE?.includes('본운동:')) {
          //   presNote = PRES_NOTE?.split('본운동:');
          // } else if (PRES_NOTE?.includes('준비운동:')) {
          //   presNote = PRES_NOTE?.split('준비운동:');
          // }

          // let tmp;

          // if (presNote?.includes(' / ')) {
          //   tmp = presNote?.split(' / ');
          //   for (let i = 0; i < tmp?.length; i++) {
          //     if (listTitle.includes(tmp[i])) {
          //       const idx = listTitle.indexOf(tmp[i]);
          //       // setCount
          //     }
          //   }
          //   setTitle((prev) => [...prev, tmp]);
          // } else {
          //   setTitle((prev) => [...prev, presNote]);
          // }

          if (
            parseInt(search.start) <= parseInt(person.TEST_AGE) &&
            parseInt(person.TEST_AGE) <= parseInt(search.end)
          ) {
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
  );
});

export default OtherPeopleTable;
