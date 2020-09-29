import React, { useState } from 'react';
import { FirebaseStore } from 'config/fbConfig';

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
        src: src,
        desc: description,
      })
      .then(() => alert('정상 등록되었습니다'))
      .catch((err) => {
        console.error(err);
        alert('등록에 실패하였습니다');
      });
  };
  return (
    <div>
      <h1>소개가 아직 등록되지 않았어요</h1>
      <h3>소개를 등록하여 고객들과 컨택하세요 !</h3>
      <form onSubmit={onSubmit}>
        <label>
          <h5>자기소개</h5>
          <textarea
            type="description"
            name="description"
            value={description}
            onChange={onChange}
          />
          <div>{description.length} / 2,000 자</div>
        </label>
        <label>
          <h5>동영상(YouTube) 링크</h5>
          <div>형식 : https://youtu.be/N02RTnEDVhs</div>
          <input type="src" name="src" value={src} onChange={onChange} />
        </label>
        <button>등록하기</button>
      </form>
    </div>
  );
};
export default EnrollVideo;
