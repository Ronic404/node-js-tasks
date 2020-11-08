const DB = require('../../common/inMemoryDb');

const getAllByBoardId = async id => await DB.getTasksByBoardId(id);

const get = async id => await DB.getTask(id);

const create = async task => await DB.createTask(task);

const update = async (id, boardId, task) =>
  await DB.updateTask(id, boardId, task);

const remove = async (id, boardId) => await DB.removeTask(id, boardId);

const removeBoardTasks = async id => await DB.removeBoardTasks(id);

const removeUserTasks = async id => await DB.removeUserTasks(id);

module.exports = {
  getAllByBoardId,
  get,
  create,
  update,
  remove,
  removeBoardTasks,
  removeUserTasks
};
