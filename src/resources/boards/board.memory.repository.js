const DBBoards = require('../../common/inMemoryDb');

const getAll = async () => await DBBoards.getAllBoards();

const get = async id => await DBBoards.getBoard(id);

const create = async board => await DBBoards.createBoard(board);

const update = async (id, board) => await DBBoards.updateBoard(id, board);

const remove = async id => await DBBoards.removeBoard(id);

module.exports = { getAll, get, create, update, remove };
