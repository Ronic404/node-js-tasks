const tasksRepo = require('./task.memory.repository');

const getAllByBoardId = id => tasksRepo.getAllByBoardId(id);

const get = id => tasksRepo.get(id);

const create = task => tasksRepo.create(task);

const update = (id, boardId, task) => tasksRepo.update(id, boardId, task);

const remove = (id, boardId) => tasksRepo.remove(id, boardId);

const removeBoardTasks = id => tasksRepo.removeBoardTasks(id);

const removeUserTasks = id => tasksRepo.removeUserTasks(id);

module.exports = {
  getAllByBoardId,
  get,
  create,
  update,
  remove,
  removeBoardTasks,
  removeUserTasks
};
