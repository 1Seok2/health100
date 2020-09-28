/**
 * show table about exercise data ...
 * need chart?
 */

import React, { useState } from 'react';
import { STable, SThead, STh, STbody, STr, STd } from './MyPage.styled';
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
        <STable active={makePackage}>
          <SThead>
            <STr>
              <STh title={true}>날짜</STh>
              {myList.map(
                (row) =>
                  row.title === title && (
                    <STd
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
                        makePackage &&
                        checkPackage[row.title]?.date === row.date
                      }
                    >
                      {moment(row.date).format('YY.MM.DD')}
                    </STd>
                  ),
              )}
            </STr>
          </SThead>
          <STbody>
            <STr>
              <STh title={false}>횟수</STh>
              {myList.map(
                (row) =>
                  row.title === title && (
                    <STd
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
                        makePackage &&
                        checkPackage[row.title]?.date === row.date
                      }
                    >
                      {row.count} 회
                    </STd>
                  ),
              )}
            </STr>
            <STr>
              <STh title={false}>운동시간</STh>
              {myList.map(
                (row) =>
                  row.title === title && (
                    <STd
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
                        makePackage &&
                        checkPackage[row.title]?.date === row.date
                      }
                    >
                      {Math.floor(row.duration / 1000) || '0'} 초
                    </STd>
                  ),
              )}
            </STr>
          </STbody>
        </STable>
      )}
    </>
  );
};
