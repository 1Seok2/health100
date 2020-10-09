import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseStore } from 'config/fbConfig';
import { Container, Wrapper, Title } from './Graph.styled';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
  LineSeries,
} from 'react-vis';
import './Graph.css';

const Graph = ({ userObj }) => {
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
          title = [listObj.title, ...title];
          list = [...list, [listObj]];
        } else {
          const idx = title.indexOf(listObj.title);
          list[idx] = [...list[idx], listObj];
        }
      });
      console.log('zz', list);

      setData(list);
      setTitles(title);
    });
  };

  useEffect(() => {
    getMyData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>
          나의 기록
          <Link
            to="/mypage"
            style={{
              marginLeft: 12,
              fontSize: 14,
              color: '#092c6f',
            }}
          >
            | &nbsp;&nbsp;표로 보기
          </Link>
        </Title>
        <div style={styles.chart}>
          {data.map((title, idx) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 6,
                borderRadius: 3,
                margin: 8,
                border: '1px solid #dfdfdf',
              }}
            >
              <h1 style={styles.chartTitle}>{titles[idx]}</h1>
              <XYPlot yPadding={0} width={240} height={210}>
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis style={{ fontSize: 10 }} />
                <YAxis style={{ fontFamily: 'Jua', fontSize: 10 }} />
                <LineSeries
                  stroke={'#092c6f'}
                  strokeStyle="solid"
                  className="first-series"
                  data={title.map((item, idx) => {
                    return { x: idx + 1, y: item.y };
                  })}
                />
              </XYPlot>
            </div>
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

export default Graph;

const styles = {
  chart: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  chartTitle: {
    marginTop: 8,
    marginBottom: 4,
    fontFamily: 'Jua',
    textAlign: 'center',
  },
};
