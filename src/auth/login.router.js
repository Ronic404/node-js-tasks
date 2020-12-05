const router = require('express').Router();
const loginService = require('./login.service');
const { FORBIDDEN, OK, getStatusText } = require('http-status-codes');

router.post('/', async (req, res) => {
  const { login, password } = req.body;
  const token = await loginService.signToken(login, password);

  if (!token) {
    res.status(FORBIDDEN).send(getStatusText(FORBIDDEN));
  }

  res.status(OK).json({ token });
});

module.exports = router;
