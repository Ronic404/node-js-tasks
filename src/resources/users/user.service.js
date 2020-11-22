const usersRepo = require('./user.db.repository');
const tasksRepo = require('../tasks/task.db.repository');

const getAll = () => usersRepo.getAll();

const getById = id => usersRepo.getById(id);

const add = user => usersRepo.add(user);

const update = user => usersRepo.update(user);

const deleteById = id => {
  usersRepo.deleteById(id);
  tasksRepo.removeUserTasks(id);
};

module.exports = { getAll, getById, add, update, deleteById };
