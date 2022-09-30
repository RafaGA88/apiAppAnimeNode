const multer = require('multer');
const Episodio = require('../models/Episodio');
const multerConfig = require('../config/multer');

const upload = multer(multerConfig).single('arquivo');

class EpisodioController {
  async criaEpisodio(req, res) {
    try {
      return upload(req, res, async (error) => {
        if (error) {
          return res.status(400).json({
            errors: [error.code],
          });
        }
        const ep = {
          // eslint-disable-next-line max-len
          nome: req.body.nome, anime_id: req.body.anime_id, video: req.file.filename, numero_episodio: req.body.numero_episodio,
        };
        const episodio = await Episodio.create(ep);

        return res.json(episodio);
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}
const episodioController = new EpisodioController();
module.exports = episodioController;
