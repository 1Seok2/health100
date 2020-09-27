/**
 * show data ...
 * choose and enroll prescriptions ...
 */

import React, { useEffect, useState } from 'react';
import { Container, Wrapper, ListTitle, TableWrapper } from './MyPage.styled';
import ErrorContainer from 'components/modules/error';
import { FirebaseStore } from 'config/fbConfig';
import moment from 'moment';
import EXERCISE_LIST from 'components/modules/list/ExerciseTitleList';
import { Table } from './Table';

const MyPage = ({ userObj }) => {
  const [myList, setMyList] = useState([]);
  const [titles, setTitles] = useState([]);

  /* get data from firestore ...  */
  const getMyData = async () => {
    const data = await FirebaseStore.collection(`${userObj.uid}`).get();
    data.forEach((document) => {
      // if (userObj.uid === document.data().userId) {
      const listObj = {
        date: moment(document.data().createdAt).format('YY.MM.DD'),
        title: document.data().exercise,
        count: document.data().count,
        duration: document.data().duration,
      };
      setMyList((prev) => [listObj, ...prev]);
      if (!titles.includes(listObj.title)) {
        setTitles((prev) => [...prev, listObj.title]);
      }
      // }
    });
    // setMyList((prev) =>
    //   prev.sort((a, b) => {
    //     console.log('zz');
    //     return a.date < b.date;
    //   }),
    // );
  };

  useEffect(() => {
    getMyData();
  }, []);

  return (
    <Container>
      <Wrapper>
        {EXERCISE_LIST.map((itemTitle) => {
          if (titles.includes(itemTitle)) {
            return (
              <>
                <ListTitle>{itemTitle}</ListTitle>
                <TableWrapper>
                  <Table
                    myList={myList}
                    title={itemTitle}
                    key={itemTitle}
                    titles={titles}
                  />
                </TableWrapper>
              </>
            );
          } else return null;
        })}
        {titles.length === 0 && (
          <ErrorContainer txt="데이터가 존재하지 않습니다" />
        )}
      </Wrapper>
    </Container>
  );
};

export default MyPage;
