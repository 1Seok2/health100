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

const EnrollVideo = ({ userObj }) => {
  const [description, setDesc] = useState('');
  const [src, setSrc] = useState('');

  const [isError, setError] = useState(false);

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'description') {
      if (description.length < 2001) setDesc(value);
      else {
        alert('최대 2000자 입니다');
        setDesc((prev) => prev.substring(0, 1999));
        return;
      }
    } else if (name === 'src') setSrc(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const updateUser = await FirebaseStore.collection('users').doc(
      `${userObj.createdAt}`,
    );
    updateUser
      .update({
        originSrc: src,
        desc: description,
        /* 추후에 admin이 검수 거쳐야함 */
        introAvailable: false,
      })
      .then(() => alert('정상 등록되었습니다'))
      .catch((err) => {
        console.error(err);
        alert('등록에 실패하였습니다');
      });
  };
  return (
    <Wrapper>
      <SubTitle>소개가 아직 등록되지 않았어요</SubTitle>
      <Title>소개를 등록하여 고객들과 컨택하세요 !</Title>
      <SForm onSubmit={onSubmit}>
        <SLabel>
          <SubTitle>자기소개</SubTitle>
          <STextArea
            type="description"
            name="description"
            value={description}
            onChange={onChange}
            placeholder={'안녕하세요? 저는 이런 사람입니다'}
          />
          <StringLength>{description.length} / 2,000 자</StringLength>
        </SLabel>
        <SLabel row={true}>
          <SubTitle inline={true}>동영상(YouTube) 링크</SubTitle>
          <STextInput
            type="src"
            name="src"
            value={src}
            onChange={onChange}
            placeholder="형식 : https://youtu.be/N02RTnEDVhs"
          />
        </SLabel>
        <SButton>등록하기</SButton>
      </SForm>
    </Wrapper>
  );
};
export default EnrollVideo;
