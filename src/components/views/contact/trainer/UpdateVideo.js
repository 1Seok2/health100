import React, { useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';
import {
  Wrapper,
  Title,
  SForm,
  SLabel,
  SubTitle,
  STextArea,
  STextInput,
  StringLength,
  SButton,
} from './TrainerMode.styled';

import UploadVideo from 'components/modules/upload';

const UpdateVideo = ({ userObj }) => {
  const [description, setDesc] = useState(userObj.desc);
  const [originSrc, setOriginSrc] = useState(userObj.originSrc);
  const [video, setVideo] = useState('');

  const [isError, setError] = useState(false);

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'description') {
      if (description.length < 501) setDesc(value);
      else {
        alert('최대 500자 입니다');
        setDesc((prev) => prev.substring(0, 499));
        return;
      }
    } else if (name === 'src') setOriginSrc(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const updateUser = await FirebaseStore.collection('users').doc(
      `${userObj.createdAt}`,
    );
    updateUser
      .update({
        originSrc: originSrc,
        desc: description,
        /* 추후에 admin이 검수 거쳐야함 */
        introAvailable: 0,
      })
      .then(() => alert('정상 등록되었습니다'))
      .catch((err) => {
        console.error(err);
        alert('등록에 실패하였습니다');
      });
  };

  const decline = async (e) => {
    e.preventDefault();
    const updateUser = await FirebaseStore.collection('users').doc(
      `${userObj.createdAt}`,
    );
    updateUser
      .update({
        introAvailable: 1,
      })
      .catch((err) => {
        console.error(err);
        alert('취소 실패하였습니다');
      });
  };
  return (
    <Wrapper>
      <Title>소개 수정 페이지입니다</Title>
      <SForm>
        <SLabel>
          <SubTitle>자기소개</SubTitle>
          <STextArea
            type="description"
            name="description"
            value={description}
            onChange={onChange}
            placeholder={'안녕하세요? 저는 이런 사람입니다'}
          />
          <StringLength>{description.length} / 500 자</StringLength>
        </SLabel>
        <SLabel row={true}>
          <SubTitle inline={true}>동영상(YouTube) 링크</SubTitle>
          <STextInput
            type="src"
            name="src"
            value={originSrc}
            onChange={onChange}
            placeholder="형식 : https://youtu.be/N02RTnEDVhs"
          />
        </SLabel>
        {/* <SubTitle inline={true}>동영상 파일 업로드</SubTitle>
        <UploadVideo video={video} setVideo={setVideo} /> */}
        <SButton blue={true} onClick={onSubmit}>
          등록하기
        </SButton>
        <SButton onClick={decline}>취소하기</SButton>
      </SForm>
    </Wrapper>
  );
};
export default UpdateVideo;
