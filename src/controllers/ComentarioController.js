const Comentario = require('../models/Comentario');

class ComentarioController {
  async comenta(req, res) {
    try {
      const comentario = await Comentario.create(req.body);

      res.json(comentario);
    } catch (error) {
      res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}
const comentarioController = new ComentarioController();
module.exports = comentarioController;
