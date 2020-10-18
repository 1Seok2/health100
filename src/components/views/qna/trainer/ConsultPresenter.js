/**
 * @description 트레이너모드에서 트레이너가 처방하는 스크린
 */

import React from 'react';
import {
  Title,
  FromWrapper,
  SForm,
  TextArea,
  Submit,
  Decline,
  Empty,
} from './Consult.styled';

import Loading from 'components/modules/loading/Loading';
import ConsultTable from './ConsultTable';

const ConsultPresenter = ({
  userObj,
  isLoading,
  questList,
  setSelected,
  setFormShow,
  selected,
  submit,
  input,
  setInput,
  formShow,
}) => (
  <div>
    {userObj.isAvailable === 1 ? (
      <Title>처방 부탁드려요 !</Title>
    ) : (
      <Title>처방 권한 승인 대기중입니다</Title>
    )}
    {isLoading ? (
      <Loading />
    ) : (
      <>
        {questList.map(
          (quest, idx) =>
            quest !== undefined && (
              <ConsultTable
                key={quest.createdAt + idx}
                setSelected={setSelected}
                setFormShow={setFormShow}
                quest={quest}
                selected={selected}
                idx={idx}
              />
            ),
        )}
      </>
    )}
    {formShow && userObj.isAvailable === 1 && (
      <FromWrapper>
        <SForm onSubmit={(e) => submit(e)}>
          <TextArea
            placeholder={`어떠한 운동이 필요해 보이시나요?\n필요한 운동을 적어주세요`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Submit>처방하기</Submit>
          <Decline onClick={() => setFormShow(false)}>취소하기</Decline>
        </SForm>
      </FromWrapper>
    )}
    {formShow && <Empty />}
  </div>
);

export default ConsultPresenter;
