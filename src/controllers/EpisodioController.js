const multer = require('multer');
const Episodio = require('../models/Episodio');
const multerConfig = require('../config/multer');

const upload = multer(multerConfig).single('arquivo');

class EpisodioController {
  criaEpisodio(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      const { nome, anime_id, numero_episodio } = req.body;
      const { filename } = req.file;

      const episodio = await Episodio.create({
        nome, anime_id, video: filename, numero_episodio,
      });
      return res.json(episodio);
    });
  }
}

const episodioController = new EpisodioController();
module.exports = episodioController;
