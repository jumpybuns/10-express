
const Saboteur = require('../models/Saboteurs');

module.exports = Router()
  .post('/', (req, res, next) => {
    Saboteurs
      .insert({ ...req.body, complete: false })
      .then(saboteurs => res.send(saboteurs))
      .catch(next);
  });

  .get('/:id', (req, res, next) => {
    Saboteurs
    .findById(req.params.id)
    .then(saboteur => res.send(saboteur))
    .catch(next);

  });
