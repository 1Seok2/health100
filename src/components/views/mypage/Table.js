/**
 * show table about exercise data ...
 * need chart?
 */

import React, { useState } from 'react';
import { STable, STh, STr, Std } from './MyPage.styled';
import moment from 'moment';

export const Table = ({
  myList,
  title,
  select,
  makePackage,
  setMake,
  checkPackage,
  setCheck,
}) => {
  return (
    <>
      {myList.length !== 0 && (
        <STable>
          <STr>
            <Std title={true}>날짜</Std>
            {myList.map(
              (row) =>
                row.title === title && (
                  <Std
                    title={true}
                    key={row.date + Math.random()}
                    onClick={() => {
                      if (makePackage) {
                        select(
                          row.title,
                          row.date,
                          Math.floor(row.duration / 1000),
                          row.count,
                        );
                      }
                    }}
                    current={
                      makePackage && checkPackage[row.title]?.date === row.date
                    }
                  >
                    {moment(row.date).format('YY.MM.DD')}
                  </Std>
                ),
            )}
          </STr>
          <STr>
            <Std title={false}>횟수</Std>
            {myList.map(
              (row) =>
                row.title === title && (
                  <Std
                    title={false}
                    key={Math.random() + row.count}
                    onClick={() => {
                      if (makePackage) {
                        select(
                          row.title,
                          row.date,
                          Math.floor(row.duration / 1000),
                          row.count,
                        );
                      }
                    }}
                    current={
                      makePackage && checkPackage[row.title]?.date === row.date
                    }
                  >
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
                  <Std
                    title={false}
                    key={Math.random() + row.count}
                    onClick={() => {
                      if (makePackage) {
                        select(
                          row.title,
                          row.date,
                          Math.floor(row.duration / 1000),
                          row.count,
                        );
                      }
                    }}
                    current={
                      makePackage && checkPackage[row.title]?.date === row.date
                    }
                  >
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
