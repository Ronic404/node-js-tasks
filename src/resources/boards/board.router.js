const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  await res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const board = await boardsService.get(req.params.id);
    await res.json(Board.toResponse(board));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(
    new Board({
      title: req.body.title,
      columns: req.body.columns
    })
  );
  await res.json(Board.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
  try {
    const board = await boardService.update(
      req.params.id,
      new Board({
        title: req.body.title,
        columns: req.body.columns
      })
    );
    res.json(Board.toResponse(board));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    await boardsService.remove(req.params.id);
    res.status(204).send('Board has been deleted');
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = router;
