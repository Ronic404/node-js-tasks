const tasksRepo = require('./task.db.repository');

const getAllByBoardId = id => tasksRepo.getAllByBoardId(id);

const getTaskById = id => tasksRepo.getTaskById(id);

const add = task => tasksRepo.add(task);

const update = task => tasksRepo.update(task);

const deleteById = id => tasksRepo.deleteById(id);

// const remove = (id, boardId) => tasksRepo.remove(id, boardId);

// const removeBoardTasks = id => tasksRepo.removeBoardTasks(id);

// const removeUserTasks = id => tasksRepo.removeUserTasks(id);

module.exports = {
  getAllByBoardId,
  getTaskById,
  add,
  update,
  deleteById
};
