/**
 * @description 내 기록을 그래프로 보여줌
 */

import React, { useEffect, useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';

import GraphPresenter from './GraphPresenter';

import './Graph.css';

const GraphContainer = ({ userObj }) => {
  const [data, setData] = useState([]);
  const [titles, setTitles] = useState([]);

  /* get data from firestore ...  */
  const getMyData = async () => {
    FirebaseStore.collection(`${userObj.uid}`).onSnapshot((snap) => {
      let list = [];
      let title = [];
      snap.docs.map((doc) => {
        const listObj = {
          x: doc.data().createdAt, // 운동 일자
          y: doc.data().count * 1, // 운동 횟수
          title: doc.data().exercise, // 운동 종류
        };
        // list = [listObj, ...list];
        if (!title.includes(listObj.title)) {
          title = [...title, listObj.title];
          list = [...list, [listObj]];
        } else {
          const idx = title.indexOf(listObj.title);
          list[idx] = [...list[idx], listObj];
        }
      });

      setData(list);
      setTitles(title);
    });
  };
  useEffect(() => {
    getMyData();
  }, []);

  return <GraphPresenter data={data} titles={titles} />;
};

export default GraphContainer;
