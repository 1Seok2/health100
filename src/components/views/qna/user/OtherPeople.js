import React, { useEffect, useState } from 'react';
import {
  Container,
  TableWrapper,
  QuestTitle,
  STable,
  SThead,
  STbody,
  STh,
  STr,
  STd,
  Empty,
  DeleteButton,
} from './OwnQna.styled';

/* CSV data ... */
const OTHER_PEOPLE_CSV_202008 = require('../../../../assets/data/OTHER_PEOPLE_CSV_202008.csv');

const OtherPeople = () => {
  const [people, setPeople] = useState([]);

  const readTextFile = async (file) => {
    let personList = [];
    var rawFile = new XMLHttpRequest();
    rawFile.open('GET', file, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          const allText = rawFile.responseText;
          const row = allText.split('\n');
          for (let i = 1; i < row.length; i++) {
            const cell = row[i].split(',');
            const personInfoObj = {
              AGE_GBN: cell[2],
              TEST_AGE: cell[4],
              PRES_NOTE: cell[8]?.includes('"') ? cell[8]?.slice(1) : cell[8],
              CERT_GBN: cell[6],
            };
            personList = [...personList, personInfoObj];
          }
          setPeople(personList);
        }
      }
    };
    rawFile.send(null);
  };

  useEffect(() => {
    readTextFile(OTHER_PEOPLE_CSV_202008);
  }, []);
  return (
    <>
      <table>
        <thead>
          <th>구분</th>
          <th>나이</th>
          <th>처방받은 운동</th>
          <th>수상여부</th>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr>
              <td>{person.AGE_GBN}</td>
              <td>{person.TEST_AGE}</td>
              <td>{person.PRES_NOTE}</td>
              <td>{person.CERT_GBN}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default OtherPeople;
