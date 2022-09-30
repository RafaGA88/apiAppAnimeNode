const { DataTypes, Model } = require('sequelize');

class Episodio extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        defaultValue: ' ',
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Campo de nome não pode ficar em branco',
          },
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      anime_id: {
        type: DataTypes.INTEGER,
        defaultValue: ' ',
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Campo do Anime não pode ficar em branco',
          },
        },
      },
      video: {
        type: DataTypes.STRING,
        defaultValue: ' ',
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Campo do Video não pode ficar em branco',
          },
        },
      },
      numero_episodio: {
        type: DataTypes.INTEGER,
        defaultValue: ' ',
        allowNull: false,
        validate: {
          notNull: {
            msg: 'O numero do episodio não pode ficar vazio',
          },
        },
      },
    }, {
      sequelize,
    });
  }
}

module.exports = Episodio;
