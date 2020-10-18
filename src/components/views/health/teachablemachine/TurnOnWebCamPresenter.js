/**
 * @description google teachable machine을 이용해
 *              셀프운동 캠 키기
 */

import React from 'react';
import {
  Container,
  Assist,
  CamContainer,
  CamMessage,
  Count,
  Status,
  ExerciseButton,
  TimeInput,
} from './TurnOnWebCam.styled';

import Loading from 'components/modules/loading';

const TurnOnWebCamPresenter = ({
  start,
  isLoading,
  readyDown,
  onChange,
  countDown,
  showStatus,
  count,
  init,
  SaveCounts,
}) => (
  <>
    <Container>
      <CamContainer>
        {!start.is ? (
          <CamMessage>캠을 켜주세요</CamMessage>
        ) : (
          <>
            <canvas id="canvas"></canvas>
            {isLoading && <Loading />}
          </>
        )}
      </CamContainer>
      <Assist>
        {!start.is && (
          <div>
            <h5>목표시간설정</h5>

            <div
              style={{
                fontSize: 10,
                fontFamily: 'Nanum Gothic',
                marginTop: 8,
                lineHeight: '14px',
              }}
            >
              웹캠이 켜지는 시간과 운동 준비를 마칠 권장 시간은 10초 입니다.
              <br />
              준비시간이 끝난 후 운동시간이 측정됩니다.
              <br />
              운동이 끝나면, 자동으로 "내 기록보기" 메뉴에 저장됩니다.
            </div>
            <TimeInput
              type="ready"
              name="ready"
              value={readyDown}
              onChange={onChange}
              placeholder="준비시간(초)"
            />

            <TimeInput
              type="count"
              name="count"
              value={countDown}
              onChange={onChange}
              placeholder="운동시간(초)"
            />
          </div>
        )}
        {start.is && (
          <div
            style={{
              marginBottom: 24,
              fontSize: 28,
              color: '#555',
              fontFamily: 'Nanum Gothic',
            }}
          >
            {readyDown === 0 ? '남은 운동' : '남은 준비'} 시간 :{' '}
            {readyDown === 0 ? countDown : readyDown} 초
            <br />
          </div>
        )}
        {start.is && (
          <Count style={{ fontSize: 18, fontFamily: 'Nanum Gothic' }}>
            운동 횟수 :{' '}
            <span style={{ fontSize: 38, fontFamily: 'Nanum Gothic' }}>
              {count}
            </span>{' '}
            회
          </Count>
        )}
        <Status display={showStatus && start} id="label-container"></Status>
      </Assist>
    </Container>
    {!start.is ? (
      <ExerciseButton
        onClick={() => {
          if (Number(readyDown) < 10) {
            alert('준비시간은 최소 10초입니다.');
            return;
          }
          if (Number(countDown) < 5) {
            alert('운동시간은 최소 5초입니다.');
            return;
          }
          init();
        }}
      >
        운동 시작하기
      </ExerciseButton>
    ) : (
      <ExerciseButton onClick={() => SaveCounts()}>
        결과 저장하기
      </ExerciseButton>
    )}
  </>
);

export default TurnOnWebCamPresenter;
