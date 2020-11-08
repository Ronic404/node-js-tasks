const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  await res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const user = await usersService.get(req.params.id);
    await res.json(User.toResponse(user));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(
    new User({
      login: req.body.login,
      password: req.body.password,
      name: req.body.name
    })
  );
  await res.json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  try {
    const user = await usersService.update(
      req.params.id,
      new User({
        login: req.body.login,
        password: req.body.password,
        name: req.body.name
      })
    );
    await res.json(User.toResponse(user));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    await usersService.remove(req.params.id);
    res.status(204).send('User has been deleted');
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = router;
