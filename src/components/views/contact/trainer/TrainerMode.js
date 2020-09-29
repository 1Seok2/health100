import React, { useEffect, useState } from 'react';

import EnrollVideo from './EnrollVideo';
/* trainer can upload, watch, delete own video */
/* but Only "One" Video is accepted */
const TrainerMode = ({ userObj }) => {
  const [isExist, setExist] = useState(false);

  useEffect(() => {
    if (userObj.src !== undefined) setExist(true);
  });

  return (
    <div>
      {isExist ? (
        <div> this is your video </div>
      ) : (
        <EnrollVideo userObj={userObj} />
      )}
    </div>
  );
};

export default TrainerMode;
