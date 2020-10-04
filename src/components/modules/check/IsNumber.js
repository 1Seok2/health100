const IsNumber = (value) => {
  const regExp = /^[0-9]{0,}$/;
  if (value.match(regExp)) return true;
  else return false;
};

export default IsNumber;
