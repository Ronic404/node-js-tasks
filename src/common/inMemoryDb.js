const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');

const DBUsers = [];
const DBBoards = [];
let DBTasks = [];

DBUsers.push(new User(), new User(), new User());
DBBoards.push(new Board(), new Board(), new Board());

// USERS
const getAllUsers = () => DBUsers.slice(0);

const getUser = id => DBUsers.filter(user => id === user.id)[0];

const createUser = user => {
  DBUsers.push(user);
  return user;
};

const updateUser = (id, user) => {
  const oldUser = DBUsers.filter(el => id === el.id)[0];
  return Object.assign(oldUser, user, { id });
};

const removeUser = id => DBUsers.filter(user => id !== user.id);

// BOARDS
const getAllBoards = () => DBBoards.slice(0);

const getBoard = id => DBBoards.filter(board => id === board.id)[0];

const createBoard = board => {
  DBBoards.push(board);
  return board;
};

const updateBoard = (id, board) => {
  const oldBoard = DBBoards.filter(el => id === el.id)[0];
  return Object.assign(oldBoard, board, { id });
};

const removeBoard = id => {
  const index = DBBoards.findIndex(board => board.id === id);
  return DBBoards.splice(index, 1);
};

// TASKS
const getTasksByBoardId = id => DBTasks.filter(el => id === el.boardId);

const getTask = id => DBTasks.filter(task => id === task.id)[0];

const createTask = task => {
  DBTasks.push(task);
  return task;
};

const updateTask = (id, boardId, task) => {
  const oldTask = DBTasks.filter(el => id === el.id)[0];
  return Object.assign(oldTask, task, { boardId, id });
};

const removeTask = (id, boardId) => {
  const index = DBTasks.findIndex(
    task => task.boardId === boardId && task.id === id
  );
  return DBTasks.splice(index, 1);
};

const removeBoardTasks = id => {
  DBTasks = DBTasks.filter(task => task.boardId !== id);
  return DBTasks;
};

const removeUserTasks = id => {
  DBTasks.forEach(task => {
    if (task.userId === id) task.userId = null;
  });
  return DBTasks;
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  removeUser,

  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  removeBoard,

  getTasksByBoardId,
  getTask,
  createTask,
  updateTask,
  removeTask,
  removeBoardTasks,
  removeUserTasks
};
