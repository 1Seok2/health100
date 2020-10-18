/**
 * @description 공공데이터를 이용해 처방목록 조회
 */

import React, { useEffect, useState } from 'react';

import Loading from 'components/modules/loading';
import OtherPeoplePresenter from './OtherPeoplePresenter';

/* CSV data ... */
const OTHER_PEOPLE_CSV_202008 = require('assets/data/OTHER_PEOPLE_CSV_202008.csv');

const OtherPeople = () => {
  const [isLoading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  /* 검색조건 */
  const [search, setSearch] = useState({
    submit: false,
    age: '청소년',
    reward: '금상',
  });

  /* 검색 클릭시 조회 */
  const searchData = () => {
    setSearch({
      ...search,
      submit: true,
    });
  };

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setSearch({
      ...search,
      submit: false,
      [name]: value,
    });
  };

  /* 컴포넌트 생성시 공공데이터 읽은 후 배열로 분류 */
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
    readTextFile(OTHER_PEOPLE_CSV_202008).then(() => setLoading(false));
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <OtherPeoplePresenter
          onChange={onChange}
          searchData={searchData}
          search={search}
          people={people}
        />
      )}
    </>
  );
};

export default OtherPeople;
