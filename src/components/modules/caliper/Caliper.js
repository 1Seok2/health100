import { maleTable } from './MaleTable';
import { femailTable } from './FemaleTable';

// row : age / column : skinfold mm
const Row = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 36];
const Col = [20, 25, 30, 35, 40, 45, 50, 55, 56];

const findRowIdx = (skinfold) => {
  let i;
  for (i = 0; i < Row.length; i++) {
    if (Row[i] > skinfold) break;
  }
  if (i === Row.length) i--;
  return i;
};

const findColIdx = (age) => {
  let i;
  for (i = 0; i < Col.length; i++) {
    if (Col[i] > age) break;
  }
  if (i === Col.length) i--;
  return i;
};

const Caliper = (skinfold, age, gender) => {
  console.log(skinfold, age, gender);
  const row = findRowIdx(skinfold);
  const col = findColIdx(age);

  if (gender === '남성') {
    return maleTable[col][row];
  } else {
    return femailTable[col][row];
  }
};

export default Caliper;
