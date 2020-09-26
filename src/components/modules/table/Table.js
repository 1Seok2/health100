import React from 'react';
import Tr from './Tr';

/* tables is 2-dimensional array ... */
const Table = ({ tables }) => {
  return (
    <table>
      {tables.map((row, idx) => {
        if (idx === 0) return <Tr row={row} isHeader={true} />;
        else return <Tr row={row} isHeader={false} />;
      })}
    </table>
  );
};

export default Table;
