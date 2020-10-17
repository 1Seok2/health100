/**
 * @description 관리자 전용 페이지
 */

import React from 'react';
import { FirebaseStore, FirebaseAuth } from 'config/fbConfig';
import { Containter, Wrapper, TypeButton, Empty } from './Admin.styled';

import Loading from 'components/modules/loading/Loading';
import ValidAuth from './valid';
import IntroAuth from './introduce';

const AdminPresenter = ({
  isLoading,
  setSelected,
  setType,
  type,
  needValid,
  needIntro,
  selected,
  acceptValid,
  acceptIntro,
  rejectIntro,
}) => (
  <Containter>
    {isLoading ? (
      <Loading />
    ) : (
      <Wrapper>
        <div>
          <TypeButton
            onClick={() => {
              setSelected({});
              setType(true);
            }}
            current={type}
          >
            권한 승인 대기 ({needValid.length})
          </TypeButton>
          <TypeButton
            onClick={() => {
              setSelected({});
              setType(false);
            }}
            current={!type}
          >
            소개 승인 대기 ({needIntro.length})
          </TypeButton>
          <TypeButton onClick={() => FirebaseAuth.signOut()}>
            로그아웃
          </TypeButton>
        </div>
        {type ? (
          <ValidAuth
            needAdmin={needValid}
            setSelected={setSelected}
            selected={selected}
            accept={acceptValid}
          />
        ) : (
          <IntroAuth
            needIntro={needIntro}
            setSelected={setSelected}
            selected={selected}
            accept={acceptIntro}
            reject={rejectIntro}
          />
        )}
        <Empty />
      </Wrapper>
    )}
  </Containter>
);

export default AdminPresenter;
