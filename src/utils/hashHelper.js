const bcrypt = require('bcrypt');

const hashPassword = async password => {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
};

const checkHashPassword = async (password, hash) => {
  // console.log(11111111111, password, hash);
  // return await true;
  return await bcrypt.compare(password, hash);
};

module.exports = {
  hashPassword,
  checkHashPassword
};
