import React from 'react';
import Td from './Td';
import Th from './Th';

const Tr = ({ row, isHeader }) => {
  return (
    <>
      {isHeader ? row.map(item => (
          <Th item={item/>
      )) : row.map((item) => 
        <Td item={item} />;
      )}
    </>
  );
};

export default Tr;
