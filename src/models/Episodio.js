const { DataTypes, Model } = require('sequelize');
const appConfig = require('../config/appConfig');

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
      url: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${appConfig.url}/video/${this.getDataValue('video')}`;
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
      tableName: 'episodio',
    });
  }

  static associate(models) {
    this.belongsTo(models.Anime, { foreignKey: 'anime_id' });
  }
}

module.exports = Episodio;
