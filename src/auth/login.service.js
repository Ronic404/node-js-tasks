const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET_KEY;
const usersRepo = require('../resources/users/user.db.repository');
const { checkHashPassword } = require('../utils/hashHelper');

const signToken = async (login, password) => {
  const user = await usersRepo.getUserByProps({ login });

  if (!user) {
    return null;
  }

  const { password: hashedPassword } = user;

  const comparisonRes = await checkHashPassword(password, hashedPassword);

  if (comparisonRes) {
    const { id } = user;
    const token = jwt.sign({ id, login }, SECRET_KEY, { expiresIn: '100000m' });
    return token;
  }
  return null;
};

module.exports = {
  signToken
};
