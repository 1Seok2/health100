/**
 * @description 내 기록을 그래프로 보여줌
 */

import React from 'react';
import { Link } from 'react-router-dom';

/* graph module ... */
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from 'react-vis';

import {
  Container,
  Wrapper,
  Title,
  SubTitle,
  GraphWrapper,
} from './Graph.styled';

const GraphPresenter = ({ data, titles }) => (
  <Container>
    <Wrapper>
      <Title>
        나의 기록
        <Link
          to="/mypage"
          style={{
            marginLeft: 12,
            fontSize: 14,
            fontFamily: 'Nanum Gothic',
            color: '#092c6f',
          }}
        >
          | &nbsp;&nbsp;표로 보기
        </Link>
      </Title>
      <SubTitle>x축은 운동 회차, y축은 운동 횟수를 의미합니다.</SubTitle>
      <div style={styles.chart}>
        {data.map((title, idx) => (
          <GraphWrapper>
            <h1 style={styles.chartTitle}>{titles[idx]}</h1>
            <XYPlot yPadding={0} width={240} height={210}>
              <HorizontalGridLines />
              <VerticalGridLines />
              <XAxis style={{ fontSize: 10, fontFamily: 'Poor Story' }} />
              <YAxis style={{ fontFamily: 'Nanum Gothic', fontSize: 10 }} />
              <LineSeries
                stroke={'#092c6f'}
                strokeStyle="solid"
                className="first-series"
                data={title.map((item, idx) => {
                  return { x: idx + 1, y: item.y };
                })}
              />
            </XYPlot>
          </GraphWrapper>
        ))}
      </div>
    </Wrapper>
  </Container>
);

export default GraphPresenter;

const styles = {
  chart: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chartTitle: {
    marginTop: 8,
    marginBottom: 4,
    fontFamily: 'Nanum Gothic',
    textAlign: 'center',
  },
};
