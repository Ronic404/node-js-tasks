const uuid = require('uuid');

class Board {
  constructor({
    id = uuid(),
    title = 'Board title',
    columns = [
      {
        id: uuid(),
        title: 'Column title',
        order: 0
      }
    ]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
