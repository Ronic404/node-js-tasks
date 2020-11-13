const logger = require('../logger');
const {
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  getStatusText
} = require('http-status-codes');

module.exports = (err, req, res, next) => {
  if (err) {
    switch (err.message) {
      case 'Not found':
        res.status(NOT_FOUND).send(getStatusText(NOT_FOUND));
        logger.error(err.message);
        break;
      default:
        res
          .status(INTERNAL_SERVER_ERROR)
          .send(getStatusText(INTERNAL_SERVER_ERROR));
        logger.error('Internal server error! Somethink went wrong!');
    }
  }
  next();
};
