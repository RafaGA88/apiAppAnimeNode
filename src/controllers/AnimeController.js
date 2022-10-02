const Anime = require('../models/Anime');

class AnimeController {
  async criaAnime(req, res) {
    try {
      const anime = await Anime.create(req.body);
      res.json(anime);
    } catch (error) {
      res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async principaisAnimes(req, res) {
    if (req.params.id) {
      const { id } = req.params;

      const consulta = await Anime.findByPk(~~id);

      return res.json(consulta);
    }

    const consulta = await Anime.findOne();
    return res.json(consulta);
  }

  async listagemAnimes(req, res) {
    const consulta = await Anime.findAll({ order: ['titulo'] });
    return res.json(consulta);
  }
}

const animeController = new AnimeController();
module.exports = animeController;
