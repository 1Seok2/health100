import React from 'react';
import { SLabel, Wrapper, InputFile, Delete } from './UploadVideo.styled';

const UploadVideo = ({ video, setVideo }) => {
  const handleChangeVideo = (e) => {
    const input = document.getElementById('upload');
    const freader = new FileReader();
    freader.readAsDataURL(input.files[0]);
    freader.onload = function () {
      setVideo(freader.result);
      document.getElementById('preview').src = freader.result;
    };
  };

  return (
    <div>
      <video
        id="preview"
        style={{
          display: video !== '' ? 'block' : 'none',
        }}
        controls
        width="300"
        height="240"
      >
        <source src={video} type="video/mp4"></source>
      </video>
      <Wrapper>
        <SLabel for="upload">업로드</SLabel>
        {video !== '' && <Delete onClick={() => setVideo('')}>삭제</Delete>}
      </Wrapper>
      <InputFile
        id="upload"
        className="video-js vjs-big-play-button vjs-big-play-centered"
        type="file"
        multiple={false}
        accept="video/*"
        onChange={handleChangeVideo}
      />
    </div>
  );
};
export default UploadVideo;
