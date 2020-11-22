const Task = require('./task.model');

const getAllByBoardId = async boardId => Task.find({ boardId });

const getTaskById = async taskId => Task.findOne({ _id: taskId });

const add = async task => Task.create(task);

const update = async taskToUpdate =>
  Task.updateOne({ _id: taskToUpdate.id }, taskToUpdate);

const deleteById = async id => Task.deleteOne({ _id: id });

const removeUserTasks = async userId =>
  Task.updateMany({ userId }, { userId: null });

const removeBoardTasks = async id => Task.deleteMany({ boardId: id });

module.exports = {
  getAllByBoardId,
  getTaskById,
  add,
  update,
  deleteById,
  removeUserTasks,
  removeBoardTasks
};
