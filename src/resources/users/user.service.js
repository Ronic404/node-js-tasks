const usersRepo = require('./user.db.repository');
const tasksRepo = require('../tasks/task.db.repository');
const { hashPassword } = require('../../utils/hashHelper');

const getAll = () => usersRepo.getAll();

const getById = id => usersRepo.getById(id);

const add = async user => {
  const hashPass = await hashPassword(user.password);

  return await usersRepo.add({
    ...user,
    password: hashPass
  });
};

const update = user => usersRepo.update(user);

const deleteById = id => {
  usersRepo.deleteById(id);
  tasksRepo.removeUserTasks(id);
};

module.exports = { getAll, getById, add, update, deleteById };
