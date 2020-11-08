const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  try {
    const tasks = await tasksService.getAllByBoardId(req.params.boardId);
    res.json(tasks.map(Task.toResponse));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/:id').get(async (req, res) => {
  try {
    const task = await tasksService.get(req.params.id);
    res.json(Task.toResponse(task));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.create(
    new Task({
      title: req.body.title,
      order: req.body.order,
      description: req.body.description,
      userId: req.body.userId,
      boardId: req.params.boardId,
      columnId: req.body.columnId
    })
  );
  res.json(Task.toResponse(task));
});

router.route('/:id').put(async (req, res) => {
  try {
    const task = await tasksService.update(
      req.params.id,
      req.params.boardId,
      new Task({
        title: req.body.title,
        order: req.body.order,
        description: req.body.description,
        userId: req.body.userId,
        // boardId: req.params.boardId,
        columnId: req.body.columnId
      })
    );
    res.json(Task.toResponse(task));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    await tasksService.remove(req.params.id, req.params.boardId);
    res.send('Task has been deleted');
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = router;
