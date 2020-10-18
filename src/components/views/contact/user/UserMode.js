import React from 'react';
import {
  Container,
  Title,
  VideoWrapper,
  Video,
  ItemDesc,
  Empty,
  // table
  TableWrapper,
  QuestTitle,
  STable,
  SThead,
  STr,
  STh,
  STbody,
  STd,
  Row,
} from './UserMode.styled';

import Loading from 'components/modules/loading/Loading';

import movie1 from 'assets/movie/health100_video_1.mp4';
import movie2 from 'assets/movie/health100_video_2.mp4';

{
  /* <video src={movie1} controls>
Your browser does not support the video tag.
</video> */
}

const UserMode = ({ trainerList, isLoading, selected, setSelected }) => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title>트레이너와 컨택하세요 !</Title>
          {trainerList.map((trainer, idx) => (
            <Container
              key={trainer.src}
              current={trainer.src === selected}
              onClick={() => {
                if (selected === trainer.src) {
                  setSelected('');
                } else {
                  setSelected(trainer.src);
                }
              }}
            >
              {trainer.src === selected && (
                <Row>
                  <VideoWrapper current={trainer.src === selected}>
                    <Video
                      src={idx % 2 === 1 ? movie1 : movie2}
                      autoplay={false}
                      controls
                    >
                      Your browser does not support the video tag.
                    </Video>
                  </VideoWrapper>

                  <VideoWrapper current={trainer.src === selected}>
                    <QuestTitle>트레이닝 시간표</QuestTitle>
                    <TableWrapper>
                      <STable current={true}>
                        <SThead>
                          <STr>
                            <STh title={true}>나이대</STh>
                            <STh title={true}>수상구분</STh>
                            <STh title={true}>요일</STh>
                            <STh title={true}>시간</STh>
                          </STr>
                        </SThead>
                        <STbody>
                          {timeList_1.map((time) => (
                            <STr>
                              <STd>{time.age}</STd>
                              <STd>{time.reward}</STd>
                              <STd>{time.day}</STd>
                              <STd>{time.time}</STd>
                            </STr>
                          ))}
                        </STbody>
                      </STable>
                    </TableWrapper>
                  </VideoWrapper>
                </Row>
              )}
              {trainer.src === selected && (
                <Row>
                  <VideoWrapper current={trainer.src === selected}>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: 22,
                        fontFamily: 'Nanum Gothic',
                        marginBottom: 12,
                      }}
                    >
                      트레이너 정보
                    </div>
                    <ItemDesc>이름 : {trainer.tName}</ItemDesc>
                    <ItemDesc>
                      이메일 :{' '}
                      <a
                        style={{ fontFamily: 'Nanum Gothic' }}
                        href={`mailto:${trainer.userEmail}`}
                      >
                        {trainer.userEmail}
                      </a>
                    </ItemDesc>
                  </VideoWrapper>
                  <VideoWrapper current={trainer.src === selected}>
                    <ItemDesc>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: 22,
                          fontFamily: 'Nanum Gothic',
                          marginBottom: 12,
                        }}
                      >
                        소개글
                      </div>
                      {trainer.src === selected
                        ? trainer.desc
                        : `${trainer.desc.substring(0, 100)} ...더보기`}
                    </ItemDesc>
                  </VideoWrapper>
                </Row>
              )}
              {trainer.src !== selected && (
                <>
                  <ItemDesc>이름 : {trainer.tName}</ItemDesc>
                  <ItemDesc>
                    이메일 :{' '}
                    <a
                      style={{ fontFamily: 'Nanum Gothic' }}
                      href={`mailto:${trainer.userEmail}`}
                    >
                      {trainer.userEmail}
                    </a>
                  </ItemDesc>
                  <ItemDesc>
                    {trainer.src === selected
                      ? trainer.desc
                      : `${trainer.desc.substring(0, 100)} ...더보기`}
                  </ItemDesc>
                </>
              )}
            </Container>
          ))}
          <Empty />
        </>
      )}
    </>
  );
};

export default UserMode;

// 추후 실제 등록된 트레이너의 영상 보여주는 코드
{
  /* <>
<Title>트레이너와 컨택하세요 !</Title>
{trainerList.map((trainer) => (
  <Container
    key={trainer.src}
    current={trainer.src === selected}
    onClick={() => {
      if (selected === trainer.src) {
        setSelected('');
      } else {
        setSelected(trainer.src);
      }
    }}
  >
    <VideoWrapper current={trainer.src === selected}>
      <Video
        title={trainer.src}
        id="ytplayer"
        // type="text/html"
        // width="100%"
        // height="360"
        src={`https://www.youtube.com/embed/${trainer.src}?autoplay=0&origin=https://www.youtube.com/watch?v=${trainer.src}`}
        frameborder="0"
      />
    </VideoWrapper>

    <ItemDesc>이름 : {trainer.tName}</ItemDesc>
    <ItemDesc>
      이메일 :{' '}
      <a
        style={{ fontFamily: 'Nanum Gothic' }}
        href={`mailto:${trainer.userEmail}`}
      >
        {trainer.userEmail}
      </a>
    </ItemDesc>
    <ItemDesc>
      {trainer.src === selected
        ? trainer.desc
        : `${trainer.desc.substring(0, 100)} ...더보기`}
    </ItemDesc>
  </Container>
))}
<Empty />
</> */
}

const timeList_1 = [
  {
    age: '성인',
    reward: '금상',
    day: '월, 수, 금',
    time: '18:30 - 20:00',
  },
  {
    age: '성인',
    reward: '동상',
    day: '월, 수, 금',
    time: '14:30 - 16:00',
  },
  {
    age: '노인',
    reward: '동상',
    day: '화,목',
    time: '16:00 - 17:00',
  },
];
