import React, { useEffect, useState } from 'react';
import {
  FormWrapper,
  ListTitle,
  SForm,
  SInput,
  SetButton,
} from './OwnQna.styled';
import IsNumber from 'components/modules/check/IsNumber';

import Loading from 'components/modules/loading';
import OtherPeopleTable from './OtherPeopleTable';

/* CSV data ... */
const OTHER_PEOPLE_CSV_202008 = require('../../../../assets/data/OTHER_PEOPLE_CSV_202008.csv');

const OtherPeople = () => {
  const [isLoading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);
  const [range, setRange] = useState({
    start: '',
    end: '',
  });

  const [search, setSearch] = useState({
    start: '',
    end: '',
  });

  const searchData = () => {
    if (range.start === '' || range.end === '') {
      alert('나이를 입력해주세요');
      return;
    } else if (range.start > range.end) {
      alert('올바른 범위를 설정해주세요');
      return;
    }
    setSearch({
      start: range.start,
      end: range.end,
    });
  };

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (IsNumber(value)) {
      if (name === 'start') {
        setRange({
          ...range,
          start: value,
        });
      } else if (name === 'end') {
        setRange({
          ...range,
          end: value,
        });
      }
    }
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
              <SInput
                type="start"
                name="start"
                value={range.start}
                onChange={onChange}
                placeholder="시작 나이"
              />
              <SInput
                type="end"
                name="end"
                value={range.end}
                onChange={onChange}
                placeholder="끝 나이"
              />
              <SetButton onClick={() => searchData()}>조회</SetButton>
            </SForm>
          </FormWrapper>
          <OtherPeopleTable search={search} people={people} />
        </>
      )}
    </>
  );
};

export default OtherPeople;
