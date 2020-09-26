/**
 * show data ...
 * choose and enroll prescriptions ...
 */

import React, { useEffect, useState } from 'react';
import { Container, Wrapper, ListTitle, TableWrapper } from './MyPage.styled';
import { FirebaseStore } from 'config/fbConfig';
import moment from 'moment';
import EXERCISE_LIST from 'components/modules/list/ExerciseTitleList';
import { Table } from './Table';

const MyPage = ({ userObj }) => {
  const [myList, setMyList] = useState([]);

  /* get data from firestore ...  */
  const getMyData = async () => {
    const data = await FirebaseStore.collection('exercises').get();
    data.forEach((document) => {
      if (userObj.uid === document.data().userId) {
        const listObj = {
          date: moment(new Date(document.data().createdAt)).format(
            'YYYY-MM-DD',
          ),
          title: document.data().exercise,
          count: document.data().count,
        };
        setMyList((prev) => [listObj, ...prev]);
      }
    });
  };

  useEffect(() => {
    getMyData();
  }, []);

  return (
    <Container>
      <Wrapper>
        {EXERCISE_LIST.map((itemTitle) => (
          <>
            <ListTitle>{itemTitle}</ListTitle>
            <TableWrapper>
              <Table myList={myList} title={itemTitle} key={itemTitle} />
            </TableWrapper>
          </>
        ))}
      </Wrapper>
    </Container>
  );
};

export default MyPage;
