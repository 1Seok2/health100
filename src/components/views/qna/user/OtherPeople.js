import React, { useEffect, useState } from 'react';
import {
  FormWrapper,
  ListTitle,
  SForm,
  SInput,
  SetButton,
  Select,
} from './OwnQna.styled';
import IsNumber from 'components/modules/check/IsNumber';

import Loading from 'components/modules/loading';
import OtherPeopleTable from './OtherPeopleTable';

/* CSV data ... */
const OTHER_PEOPLE_CSV_202008 = require('../../../../assets/data/OTHER_PEOPLE_CSV_202008.csv');

const OtherPeople = () => {
  const [isLoading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  const [search, setSearch] = useState({
    submit: false,
    age: '청소년',
    reward: '금상',
  });

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
        <>
          <FormWrapper>
            <ListTitle>나이 기준 조회</ListTitle>
            <SForm>
              <Select
                id="age"
                name="age"
                defaultValue="청소년"
                onChange={onChange}
              >
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
          {search.submit && (
            <OtherPeopleTable search={search} people={people} />
          )}
        </>
      )}
    </>
  );
};

export default OtherPeople;
