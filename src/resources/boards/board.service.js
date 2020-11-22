const boardsRepo = require('./board.db.repository');
const tasksRepo = require('../tasks/task.db.repository');

const getAll = () => boardsRepo.getAll();

const getById = id => boardsRepo.getById(id);

const add = board => boardsRepo.add(board);

const update = board => boardsRepo.update(board);

const deleteById = id => {
  boardsRepo.deleteById(id);
  tasksRepo.removeBoardTasks(id);
};

module.exports = { getAll, getById, add, update, deleteById };
