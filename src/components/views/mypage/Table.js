/**
 * show table about exercise data ...
 */

import React from 'react';
import { STable, STh, STr, Std } from './MyPage.styled';

export const Table = ({ myList, title }) => {
  return (
    <>
      {myList.length !== 0 && (
        <STable>
          <STr>
            <Std title={true}>날짜</Std>
            {myList.map(
              (row) =>
                row.title === title && (
                  <Std title={true} key={row.date + Math.random()}>
                    {row.date}
                  </Std>
                ),
            )}
          </STr>
          <STr>
            <Std title={false}>횟수</Std>
            {myList.map(
              (row) =>
                row.title === title && (
                  <Std title={false} key={Math.random() + row.count}>
                    {row.count} 회
                  </Std>
                ),
            )}
          </STr>
          <STr>
            <Std title={false}>운동시간</Std>
            {myList.map(
              (row) =>
                row.title === title && (
                  <Std title={false} key={Math.random() + row.count}>
                    {Math.floor(row.duration / 1000) || '0'} 초
                  </Std>
                ),
            )}
          </STr>
        </STable>
      )}
    </>
  );
};
