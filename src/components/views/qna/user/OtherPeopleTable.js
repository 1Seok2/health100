import React, { memo } from 'react';
import { STable, SThead, STbody, STh, STr, STd } from './OwnQna.styled';

const OtherPeopleTable = memo(({ search, people }) => {
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
          if (
            parseInt(search.start) <= parseInt(person.TEST_AGE) &&
            parseInt(person.TEST_AGE) <= parseInt(search.end)
          ) {
            return (
              <STr>
                <STd>{person.AGE_GBN}</STd>
                <STd>{person.TEST_AGE}</STd>
                <STd>{person.PRES_NOTE}</STd>
                <STd>{person.CERT_GBN}</STd>
              </STr>
            );
          }
        })}
      </STbody>
    </STable>
  );
});

export default OtherPeopleTable;
