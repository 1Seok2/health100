import React from 'react';
import moment from 'moment';
import {
  Title,
  QuestTitle,
  AcceptButton,
  ItemWrapper,
  ItemDesc,
} from './IntroAuth.styled';

const IntroAuth = ({ needIntro, setSelected, selected, accept, reject }) => {
  return (
    <>
      <Title>트레이너 소개 대기 리스트 ({needIntro.length})</Title>
      {needIntro.map((trainer) => (
        <div key={trainer.createdAt}>
          <QuestTitle
            onClick={() => {
              setSelected({
                key: trainer.createdAt,
                docId: trainer.createdAt,
                src: trainer.src,
                originSrc: trainer.originSrc,
              });
            }}
            current={trainer.createdAt === selected.key}
          >
            {trainer.name}
            {trainer.createdAt === selected.key && (
              <AcceptButton onClick={(e) => accept(e)}>승인</AcceptButton>
            )}
            {trainer.createdAt === selected.key && (
              <AcceptButton onClick={(e) => reject(e)}>반려</AcceptButton>
            )}
          </QuestTitle>
          <ItemWrapper current={trainer.createdAt === selected.key}>
            <iframe
              title={trainer.createdAt}
              id="ytplayer"
              type="text/html"
              width="100%"
              height="360"
              src={`https://www.youtube.com/embed/${trainer.src}?autoplay=0&origin=https://www.youtube.com/watch?v=${trainer.src}`}
              frameborder="0"
            ></iframe>
            <ItemDesc>신청인 : {trainer.name}</ItemDesc>
            <ItemDesc>이메일 : {trainer.email}</ItemDesc>
            <ItemDesc>소스 : {trainer.originSrc}</ItemDesc>
            <ItemDesc>{trainer.desc}</ItemDesc>
          </ItemWrapper>
        </div>
      ))}
    </>
  );
};

export default IntroAuth;
