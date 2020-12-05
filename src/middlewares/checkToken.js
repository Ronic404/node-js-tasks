const jwt = require('jsonwebtoken');
const { UNAUTHORIZED } = require('http-status-codes');
const SECRET_KEY = process.env.JWT_SECRET_KEY;

const PATH_WHITELIST = ['/', '/doc', '/login'];

module.exports = (req, res, next) => {
  if (PATH_WHITELIST.includes(req.path) || req.path.slice(0, 4) === '/doc') {
    return next();
  }

  const authHeader = req.header('Authorization');

  if (authHeader !== undefined) {
    const tokenString = req.header('Authorization');
    const [type, token] = tokenString.split(' ');

    if (type !== 'Bearer') {
      res.status(UNAUTHORIZED).send('Wrong auth schema!');
    }

    try {
      const result = jwt.verify(token, SECRET_KEY);
      console.log(result);
    } catch (e) {
      res.status(UNAUTHORIZED).send('Unauthorized user');
    }

    return next();
  }

  res.status(UNAUTHORIZED).send('Unauthorized user');
};
